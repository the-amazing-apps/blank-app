var idb;
(function (idb) {
    idb.instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
})(idb || (idb = {})); // namespace idb
var idb;
(function (idb) {
    /**
     * Open a database.
     *
     * @param name Name of the database.
     * @param version Schema version.
     * @param callbacks Additional callbacks.
     */
    function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
        const request = indexedDB.open(name, version);
        const openPromise = idb.wrap(request);
        if (upgrade) {
            request.addEventListener('upgradeneeded', (event) => {
                upgrade(idb.wrap(request.result), event.oldVersion, event.newVersion, idb.wrap(request.transaction));
            });
        }
        if (blocked)
            request.addEventListener('blocked', () => blocked());
        openPromise
            .then((db) => {
            if (terminated)
                db.addEventListener('close', () => terminated());
            if (blocking)
                db.addEventListener('versionchange', () => blocking());
        })
            .catch(() => null);
        return openPromise;
    }
    idb.openDB = openDB;
    /**
     * Delete a database.
     *
     * @param name Name of the database.
     */
    function deleteDB(name, { blocked } = {}) {
        const request = indexedDB.deleteDatabase(name);
        if (blocked)
            request.addEventListener('blocked', () => blocked());
        return idb.wrap(request).then(() => undefined);
    }
    idb.deleteDB = deleteDB;
})(idb || (idb = {})); // namespace idb
var idb;
(function (idb) {
    let idbProxyableTypes;
    let cursorAdvanceMethods;
    // This is a function to prevent it throwing up in node environments.
    function getIdbProxyableTypes() {
        return (idbProxyableTypes ||
            (idbProxyableTypes = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
            ]));
    }
    // This is a function to prevent it throwing up in node environments.
    function getCursorAdvanceMethods() {
        return (cursorAdvanceMethods ||
            (cursorAdvanceMethods = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
            ]));
    }
    const cursorRequestMap = new WeakMap();
    const transactionDoneMap = new WeakMap();
    const transactionStoreNamesMap = new WeakMap();
    const transformCache = new WeakMap();
    idb.reverseTransformCache = new WeakMap();
    function promisifyRequest(request) {
        const promise = new Promise((resolve, reject) => {
            const unlisten = () => {
                request.removeEventListener('success', success);
                request.removeEventListener('error', error);
            };
            const success = () => {
                resolve(wrap(request.result));
                unlisten();
            };
            const error = () => {
                reject(request.error);
                unlisten();
            };
            request.addEventListener('success', success);
            request.addEventListener('error', error);
        });
        promise
            .then((value) => {
            // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
            // (see wrapFunction).
            if (value instanceof IDBCursor) {
                cursorRequestMap.set(value, request);
            }
            // Catching to avoid "Uncaught Promise exceptions"
        })
            .catch(() => null);
        // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
        // is because we create many promises from a single IDBRequest.
        idb.reverseTransformCache.set(promise, request);
        return promise;
    }
    function cacheDonePromiseForTransaction(tx) {
        // Early bail if we've already created a done promise for this transaction.
        if (transactionDoneMap.has(tx))
            return;
        const done = new Promise((resolve, reject) => {
            const unlisten = () => {
                tx.removeEventListener('complete', complete);
                tx.removeEventListener('error', error);
                tx.removeEventListener('abort', error);
            };
            const complete = () => {
                resolve();
                unlisten();
            };
            const error = () => {
                reject(tx.error || new DOMException('AbortError', 'AbortError'));
                unlisten();
            };
            tx.addEventListener('complete', complete);
            tx.addEventListener('error', error);
            tx.addEventListener('abort', error);
        });
        // Cache it for later retrieval.
        transactionDoneMap.set(tx, done);
    }
    let idbProxyTraps = {
        get(target, prop, receiver) {
            if (target instanceof IDBTransaction) {
                // Special handling for transaction.done.
                if (prop === 'done')
                    return transactionDoneMap.get(target);
                // Polyfill for objectStoreNames because of Edge.
                if (prop === 'objectStoreNames') {
                    return target.objectStoreNames || transactionStoreNamesMap.get(target);
                }
                // Make tx.store return the only store in the transaction, or undefined if there are many.
                if (prop === 'store') {
                    return receiver.objectStoreNames[1]
                        ? undefined
                        : receiver.objectStore(receiver.objectStoreNames[0]);
                }
            }
            // Else transform whatever we get back.
            return wrap(target[prop]);
        },
        set(target, prop, value) {
            target[prop] = value;
            return true;
        },
        has(target, prop) {
            if (target instanceof IDBTransaction &&
                (prop === 'done' || prop === 'store')) {
                return true;
            }
            return prop in target;
        },
    };
    function replaceTraps(callback) {
        idbProxyTraps = callback(idbProxyTraps);
    }
    idb.replaceTraps = replaceTraps;
    function wrapFunction(func) {
        // Due to expected object equality (which is enforced by the caching in `wrap`), we
        // only create one new func per func.
        // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
        if (func === IDBDatabase.prototype.transaction &&
            !('objectStoreNames' in IDBTransaction.prototype)) {
            return function (storeNames, ...args) {
                const tx = func.call(idb.unwrap(this), storeNames, ...args);
                transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
                return wrap(tx);
            };
        }
        // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
        // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
        // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
        // with real promises, so each advance methods returns a new promise for the cursor object, or
        // undefined if the end of the cursor has been reached.
        if (getCursorAdvanceMethods().includes(func)) {
            return function (...args) {
                // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
                // the original object.
                func.apply(idb.unwrap(this), args);
                return wrap(cursorRequestMap.get(this));
            };
        }
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            return wrap(func.apply(idb.unwrap(this), args));
        };
    }
    function transformCachableValue(value) {
        if (typeof value === 'function')
            return wrapFunction(value);
        // This doesn't return, it just creates a 'done' promise for the transaction,
        // which is later returned for transaction.done (see idbObjectHandler).
        if (value instanceof IDBTransaction)
            cacheDonePromiseForTransaction(value);
        if (idb.instanceOfAny(value, getIdbProxyableTypes()))
            return new Proxy(value, idbProxyTraps);
        // Return the same value back if we're not going to transform it.
        return value;
    }
    function wrap(value) {
        // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
        // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
        if (value instanceof IDBRequest)
            return promisifyRequest(value);
        // If we've already transformed this value before, reuse the transformed value.
        // This is faster, but it also provides object equality.
        if (transformCache.has(value))
            return transformCache.get(value);
        const newValue = transformCachableValue(value);
        // Not all types are transformed.
        // These may be primitive types, so they can't be WeakMap keys.
        if (newValue !== value) {
            transformCache.set(value, newValue);
            idb.reverseTransformCache.set(newValue, value);
        }
        return newValue;
    }
    idb.wrap = wrap;
    idb.unwrap = (value) => idb.reverseTransformCache.get(value);
})(idb || (idb = {})); // namespace idb
var idb;
(function (idb) {
    const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
    const writeMethods = ['put', 'add', 'delete', 'clear'];
    const cachedMethods = new Map();
    function getMethod(target, prop) {
        if (!(target instanceof IDBDatabase &&
            !(prop in target) &&
            typeof prop === 'string')) {
            return;
        }
        if (cachedMethods.get(prop))
            return cachedMethods.get(prop);
        const targetFuncName = prop.replace(/FromIndex$/, '');
        const useIndex = prop !== targetFuncName;
        const isWrite = writeMethods.includes(targetFuncName);
        if (
        // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
        !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
            !(isWrite || readMethods.includes(targetFuncName))) {
            return;
        }
        const method = async function (storeName, ...args) {
            // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
            const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
            let target = tx.store;
            if (useIndex)
                target = target.index(args.shift());
            const returnVal = await target[targetFuncName](...args);
            if (isWrite)
                await tx.done;
            return returnVal;
        };
        cachedMethods.set(prop, method);
        return method;
    }
    idb.replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
    }));
})(idb || (idb = {})); // namespace idb
// import { instanceOfAny, Func } from './util';
// import { replaceTraps, reverseTransformCache, unwrap } from './wrap-idb-value';
// import { IDBPObjectStore, IDBPIndex, IDBPCursor } from './entry';
var idb;
// import { instanceOfAny, Func } from './util';
// import { replaceTraps, reverseTransformCache, unwrap } from './wrap-idb-value';
// import { IDBPObjectStore, IDBPIndex, IDBPCursor } from './entry';
(function (idb) {
    const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
    const methodMap = {};
    const advanceResults = new WeakMap();
    const ittrProxiedCursorToOriginalProxy = new WeakMap();
    const cursorIteratorTraps = {
        get(target, prop) {
            if (!advanceMethodProps.includes(prop))
                return target[prop];
            let cachedFunc = methodMap[prop];
            if (!cachedFunc) {
                cachedFunc = methodMap[prop] = function (...args) {
                    advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
                };
            }
            return cachedFunc;
        },
    };
    async function* iterate(...args) {
        // tslint:disable-next-line:no-this-assignment
        let cursor = this;
        if (!(cursor instanceof IDBCursor)) {
            cursor = await cursor.openCursor(...args);
        }
        if (!cursor)
            return;
        cursor = cursor;
        const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
        ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
        // Map this double-proxy back to the original, so other cursor methods work.
        idb.reverseTransformCache.set(proxiedCursor, idb.unwrap(cursor));
        while (cursor) {
            yield proxiedCursor;
            // If one of the advancing methods was not called, call continue().
            cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
            advanceResults.delete(proxiedCursor);
        }
    }
    function isIteratorProp(target, prop) {
        return ((prop === Symbol.asyncIterator &&
            idb.instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
            (prop === 'iterate' && idb.instanceOfAny(target, [IDBIndex, IDBObjectStore])));
    }
    idb.replaceTraps((oldTraps) => ({
        ...oldTraps,
        get(target, prop, receiver) {
            if (isIteratorProp(target, prop))
                return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has(target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        },
    }));
})(idb || (idb = {})); // namespace idb
/// <reference path="./util.ts"/>
/// <reference path="./entry.ts"/>
/// <reference path="./wrap-idb-value.ts"/>
/// <reference path="./database-extras.ts"/>
/// <reference path="./async-iterators.ts"/>
var idb;
(function (idb) {
    const { createContext, useContext, useEffect, useState, } = React;
    const DatabaseContext = createContext(null);
    idb.DatabaseProvider = ({ name = 'idb-tools', version = 1, children = null, ...otherProps }) => {
        const [db, setDB] = useState(null);
        useEffect(() => {
            const process = async () => {
                const db = await idb.openDB(name, version, otherProps);
                setDB(db);
            };
            process();
        }, []);
        return (React.createElement(DatabaseContext.Provider, { value: () => db }, db && children));
    };
    idb.useDB = () => useContext(DatabaseContext)();
})(idb || (idb = {})); // namespace idb
/// <reference path="./DatabaseProvider.tsx"/>
/// <reference path="./idb/index.ts"/>
/// <reference path="./components/index.ts"/>
//# sourceMappingURL=idb-tools.js.map
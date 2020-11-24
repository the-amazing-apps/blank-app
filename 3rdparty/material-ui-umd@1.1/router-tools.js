var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var router;
(function (router) {
    var components;
    (function (components) {
        components.RouterContext = React.createContext(function (url) { return console.log({ url: url }); });
    })(components = router.components || (router.components = {})); // namespace components
})(router || (router = {})); // namespace router
/// <reference path="./context.ts"/>
var router;
/// <reference path="./context.ts"/>
(function (router) {
    var Children = React.Children, useState = React.useState, useEffect = React.useEffect, forwardRef = React.forwardRef;
    var createElement = React.createElement, isValidElement = React.isValidElement;
    var components;
    (function (components) {
        var getRoute = function (routes, location) {
            if (routes === void 0) { routes = []; }
            if (location === void 0) { location = ''; }
            var keys = [];
            var params = {};
            var route = routes.reduce(function (acm, _a) {
                var url = _a[0], component = _a[1], guard = _a[2];
                var reg = pathToRegexp(url, keys);
                var match = reg.test(location);
                if (match) {
                    var tokens_1 = reg.exec(location);
                    keys.forEach(function (key, i) {
                        params[key.name] = tokens_1[i + 1];
                    });
                    return [url, component, guard];
                }
                return acm;
            }, null);
            return route === null ? null : __spreadArrays(route, [params]);
        };
        var internal;
        (function (internal) {
            internal.Router = function (_a, ref) {
                var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.guardFallback, guardFallback = _c === void 0 ? '/' : _c, _d = _a.currentUrl, currentUrl = _d === void 0 ? '/' : _d;
                var _e = useState(currentUrl), url = _e[0], setUrl = _e[1];
                var _f = useState([]), routes = _f[0], setRoutes = _f[1];
                var _g = useState(null), route = _g[0], setRoute = _g[1];
                var go = function (url) { return setUrl(url); };
                useEffect(function () {
                    var routes = [];
                    Children.forEach(children, function (element) {
                        if (!isValidElement(element)) {
                            throw new Error('Router invalid element');
                        }
                        else if (element.type !== components.Route) {
                            throw new Error('Router invalid children type');
                        }
                        else {
                            var _a = element.props, url_1 = _a.url, component = _a.component, guard = _a.guard;
                            routes.push([url_1, component, guard ? guard : function () { return true; }]);
                        }
                    });
                    setRoutes(routes);
                }, []);
                useEffect(function () {
                    var route = getRoute(routes, url);
                    if (route) {
                        var url_2 = route[0], component = route[1], guard = route[2], params = route[3];
                        var root = null;
                        if (guard(url_2)) {
                            setRoute(createElement(component, params));
                        }
                        else if (root = getRoute(routes, guardFallback)) {
                            var component_1 = root.slice(1)[0];
                            setRoute(createElement(component_1, params));
                        }
                    }
                    // tslint:disable-next-line: no-string-literal
                    window['routerUrl'] = url;
                    // tslint:disable-next-line: no-string-literal
                    window['routerGo'] = go;
                }, [url, routes]);
                useEffect(function () { return setUrl(currentUrl); }, [currentUrl]);
                if (ref) {
                    ref.current = go;
                }
                return (React.createElement(components.RouterContext.Provider, { value: go }, route));
            };
        })(internal || (internal = {})); // namespace internal
        components.Router = forwardRef(internal.Router);
    })(components = router.components || (router.components = {})); // namespace components
})(router || (router = {})); // namespace router
var router;
(function (router) {
    var components;
    (function (components) {
        components.Route = function (_a) {
            var _b = _a.component, component = _b === void 0 ? null : _b, _c = _a.guard, guard = _c === void 0 ? function (url) { return true; } : _c, _d = _a.url, url = _d === void 0 ? '' : _d;
            return React.createElement(React.Fragment, null);
        };
    })(components = router.components || (router.components = {})); // namespace components
})(router || (router = {})); // namespace router
/// <reference path="./context.ts"/>
var router;
/// <reference path="./context.ts"/>
(function (router) {
    var useContext = React.useContext;
    var components;
    (function (components) {
        components.Link = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.url, url = _c === void 0 ? '' : _c, otherProps = __rest(_a, ["children", "url"]);
            var go = useContext(components.RouterContext);
            return (React.createElement("a", __assign({ onClick: function () { return go(url); } }, otherProps), children));
        };
    })(components = router.components || (router.components = {})); // namespace components
})(router || (router = {})); // namespace router
/// <reference path="./context.ts"/>
var router;
/// <reference path="./context.ts"/>
(function (router) {
    var useContext = React.useContext;
    var components;
    (function (components) {
        components.useRouter = function () { return useContext(components.RouterContext); };
    })(components = router.components || (router.components = {})); // namespace components
})(router || (router = {})); // namespace router
/// <reference path="./context.ts"/>
/// <reference path="./Router.tsx"/>
/// <reference path="./Route.tsx"/>
/// <reference path="./Link.tsx"/>
/// <reference path="./useRouter.ts"/>
/// <reference path="./components/index.ts"/>
var router;
/// <reference path="./components/index.ts"/>
(function (router) {
    var RouterDefault = router.components.Router, RouteDefault = router.components.Route, LinkDefault = router.components.Link, useRouterDefault = router.components.useRouter;
    router.Router = RouterDefault;
    router.Route = RouteDefault;
    router.Link = LinkDefault;
    router.useRouter = useRouterDefault;
})(router || (router = {})); // namespace router
//# sourceMappingURL=router-tools.js.map
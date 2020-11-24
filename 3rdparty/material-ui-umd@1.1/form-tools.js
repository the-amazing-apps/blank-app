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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.get = function (object, path) {
            var pathArray = Array.isArray(path) ? path : path.split('.').filter(function (key) { return key; });
            var pathArrayFlat = pathArray.flatMap(function (part) { return typeof part === 'string' ? part.split('.') : part; });
            return pathArrayFlat.reduce(function (obj, key) { return obj && obj[key]; }, object);
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.set = function (object, path, value) {
            var pathArray = Array.isArray(path) ? path : path.split('.').filter(function (key) { return key; });
            var pathArrayFlat = pathArray.flatMap(function (part) { return typeof part === 'string' ? part.split('.') : part; });
            var parentPath = pathArrayFlat.slice(0, pathArrayFlat.length - 1);
            var parent = parentPath.reduce(function (obj, key) { return obj && obj[key]; }, object);
            var name = pathArrayFlat.reverse()[0];
            try {
                parent[name] = value;
                return true;
            }
            catch (_a) {
                return false;
            }
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.error = function (msg) {
            throw new Error(msg);
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.isNullOrUndefined = function (obj) {
            return typeof obj === "undefined" || obj === null;
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        var isObject = function (obj) {
            var type = typeof obj;
            return type === 'function' || type === 'object' && !!obj;
        };
        utils.deepCompare = function (obj1, obj2) {
            if (obj1 === obj2) {
                return true;
            }
            else if (isObject(obj1) && isObject(obj2)) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                for (var prop in obj1) {
                    if (!utils.deepCompare(obj1[prop], obj2[prop])) {
                        return false;
                    }
                }
                return true;
            }
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var isArray = Array.isArray;
    var utils;
    (function (utils) {
        var isObject = function (obj) {
            var type = typeof obj;
            return type === 'function' || type === 'object' && !!obj;
        };
        utils.deepClone = function (src) {
            var target = {};
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    if (isArray(src[prop])) {
                        /* TODO: нет поддержки копирования массивов объектов */
                        target[prop] = src[prop].slice(0);
                    }
                    else if (isObject(src[prop])) {
                        target[prop] = utils.deepClone(src[prop]);
                    }
                    else {
                        target[prop] = src[prop];
                    }
                }
            }
            return target;
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.randomId = function () { return Math.random().toString(36).substring(2, 15); };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.flat = function (arr, fieldName) {
            if (fieldName === void 0) { fieldName = "items"; }
            return arr.reduce(function (acm, val) {
                var _a;
                return Array.isArray(val[fieldName])
                    ? acm.concat(__assign(__assign({}, val), (_a = {}, _a[fieldName] = [], _a)), utils.flat(val[fieldName]))
                    : acm.concat(val);
            }, []);
        };
        utils.deepFlat = function (arr, fieldName) {
            if (fieldName === void 0) { fieldName = "items"; }
            var result = arr;
            while (true) {
                var iter = utils.flat(result, fieldName);
                if (result.length === iter.length) {
                    return result;
                }
                else {
                    result = iter;
                }
            }
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace scene
var form;
(function (form) {
    var utils;
    (function (utils) {
        utils.initialValue = function (type) {
            if (type === form.FieldType.Checkbox) {
                return false;
            }
            else if (type === form.FieldType.Radio) {
                return "";
            }
            else if (type === form.FieldType.Text) {
                return "";
            }
            else if (type === form.FieldType.Switch) {
                return false;
            }
            else if (type === form.FieldType.Progress) {
                return 1.0;
            }
            else if (type === form.FieldType.Slider) {
                return 0;
            }
            else if (type === form.FieldType.Combo) {
                return null;
            }
            else if (type === form.FieldType.Items) {
                return [];
            }
            else if (type === form.FieldType.Rating) {
                return 3;
            }
            else {
                console.warn('form-tools initialValue unknown type');
                return "";
            }
        };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace scene
var form;
(function (form) {
    var utils;
    (function (utils) {
        /**
         * Ожидает потерю фокуса, используя
         * document.activeElement
         */
        utils.waitForBlur = function (ref) { return new Promise(function (res) {
            var interval = setInterval(function () {
                /**
                 * Для поддержки группы полей, также проверяем наличие родителя сквозь
                 * вложенность через HTMLElement.prototype.contains()
                 */
                if (document.activeElement !== ref && !ref.contains(document.activeElement)) {
                    clearInterval(interval);
                    res();
                }
            }, 50);
        }); };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var MatIcon = material.core.Icon;
    var h = React.createElement;
    var utils;
    (function (utils) {
        utils.createIcon = function (icon) { return typeof icon === 'string'
            ? h(MatIcon, null, icon)
            : h(icon); };
    })(utils = form.utils || (form.utils = {})); // namespace utils
})(form || (form = {})); // namespace form
/// <reference path="./get.ts"/>
/// <reference path="./set.ts"/>
/// <reference path="./error.ts"/>
/// <reference path="./isNullOrUndefined.ts"/>
/// <reference path="./deepCompare.ts"/>
/// <reference path="./deepClone.ts"/>
/// <reference path="./randomId.ts"/>
/// <reference path="./flat.ts"/>
/// <reference path="./initialValue.ts"/>
/// <reference path="./wairForBlur.ts"/>
/// <reference path="./createIcon.ts"/>
var form;
(function (form) {
    var h = React.createElement;
    var hooks;
    (function (hooks) {
        function withType(component) {
            return function (props) { return h(component, props, props === null || props === void 0 ? void 0 : props.children); };
        }
        hooks.withType = withType;
    })(hooks = form.hooks || (form.hooks = {})); // namespace hooks
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var useState = React.useState, useLayoutEffect = React.useLayoutEffect;
    var hooks;
    (function (hooks) {
        /**
         * Конструкция позволяет дождаться применения всех эффектов, а затем дополнительно
         * запустить таймер, для операций дорогих по производительности!
         */
        hooks.useDelayed = function (calculate, delay, deps) {
            var _a = useState(null), value = _a[0], setValue = _a[1];
            useLayoutEffect(function () {
                var computed = calculate();
                var timeout = setTimeout(function (v) { return setValue(delay(v)); }, 1000, computed);
                return function () { return clearTimeout(timeout); };
            }, deps);
            return value;
        };
    })(hooks = form.hooks || (form.hooks = {})); // namespace hooks
})(form || (form = {})); // namespace form
/// <reference path="../utils/index.ts"/>
var form;
/// <reference path="../utils/index.ts"/>
(function (form) {
    var useRef = React.useRef, useState = React.useState, useEffect = React.useEffect;
    var initialValue = form.utils.initialValue, deepClone = form.utils.deepClone, deepFlat = form.utils.deepFlat;
    var assign = Object.assign;
    var hooks;
    (function (hooks) {
        var _this = this;
        var buildObj = function (fields) {
            var obj = {};
            if (fields) {
                deepFlat(fields, "fields").forEach(function (f) {
                    if (f.name && f.type) {
                        obj[f.name] = f.defaultValue || initialValue(f.type);
                    }
                });
            }
            return obj;
        };
        /**
         * Хук разрешает обработчик на корневом уровне, при чем только
         * один раз. Для дочерних One компонентов осуществляется
         * подписка на изменения
         */
        hooks.useResolved = function (handler, fallback, fields) {
            var _a = useState(null), data = _a[0], setData = _a[1];
            var isRoot = useRef(false);
            useEffect(function () {
                var tryResolve = function () { return __awaiter(_this, void 0, void 0, function () {
                    var result, _a, _b, _c, _d, e_1;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (isRoot.current) {
                                    return [2 /*return*/];
                                }
                                if (!(typeof handler === 'function')) return [3 /*break*/, 8];
                                _e.label = 1;
                            case 1:
                                _e.trys.push([1, 5, 6, 7]);
                                result = handler();
                                if (!(result instanceof Promise)) return [3 /*break*/, 3];
                                _a = setData;
                                _b = assign;
                                _c = [buildObj(fields)];
                                _d = deepClone;
                                return [4 /*yield*/, result];
                            case 2:
                                _a.apply(void 0, [_b.apply(void 0, _c.concat([_d.apply(void 0, [_e.sent()])]))]);
                                return [3 /*break*/, 4];
                            case 3:
                                setData(assign(buildObj(fields), deepClone(result)));
                                _e.label = 4;
                            case 4: return [3 /*break*/, 7];
                            case 5:
                                e_1 = _e.sent();
                                if (fallback) {
                                    fallback(e_1);
                                }
                                else {
                                    throw e_1;
                                }
                                return [3 /*break*/, 7];
                            case 6:
                                isRoot.current = true;
                                return [7 /*endfinally*/];
                            case 7: return [3 /*break*/, 9];
                            case 8:
                                setData(assign(buildObj(fields), handler));
                                _e.label = 9;
                            case 9: return [2 /*return*/];
                        }
                    });
                }); };
                tryResolve();
            }, [handler]);
            return [data, setData];
        };
    })(hooks = form.hooks || (form.hooks = {})); // namespace hooks
})(form || (form = {})); // namespace form
/// <reference path="./withType.ts"/>
/// <reference path="./useDelayed.ts"/>
/// <reference path="./useResolved.ts"/>
var form;
(function (form) {
    var h = React.createElement, forwardRef = React.forwardRef;
    var _a = material.core, Grid = _a.Grid, Box = _a.Box;
    var n = function (v) { return Number(v); };
    var components;
    (function (components) {
        var internal;
        (function (internal) {
            var gridProps = function (isItem) {
                if (isItem) {
                    return { spacing: 3, item: true };
                }
                else {
                    return { container: true };
                }
            };
            var renderItem = function (isItem, children) {
                if (isItem) {
                    return h(Box, { mr: 1, mb: 2 }, children);
                }
                else {
                    return children;
                }
            };
            internal.Group = function (_a, ref) {
                var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.columns, columns = _c === void 0 ? '' : _c, _d = _a.phoneColumns, phoneColumns = _d === void 0 ? '' : _d, _e = _a.tabletColumns, tabletColumns = _e === void 0 ? '' : _e, _f = _a.desktopColumns, desktopColumns = _f === void 0 ? '' : _f, _g = _a.children, children = _g === void 0 ? null : _g, _h = _a.isItem, isItem = _h === void 0 ? false : _h, _j = _a.style, style = _j === void 0 ? null : _j, otherProps = __rest(_a, ["className", "columns", "phoneColumns", "tabletColumns", "desktopColumns", "children", "isItem", "style"]);
                return (React.createElement(Grid, __assign({ ref: ref, alignItems: "flex-start" }, otherProps, gridProps(isItem), { xs: n(columns ? columns : phoneColumns ? phoneColumns : '12'), sm: n(columns ? columns : phoneColumns ? phoneColumns : '12'), md: n(columns ? columns : (phoneColumns || tabletColumns) ? (phoneColumns || tabletColumns) : '12'), lg: n(columns ? columns : (tabletColumns || desktopColumns) ? (tabletColumns || desktopColumns) : '12'), xl: n(columns ? columns : desktopColumns ? desktopColumns : '12'), className: className, style: style }), renderItem(isItem, children)));
            };
        })(internal || (internal = {})); // namespace internal
        components.Group = forwardRef(internal.Group);
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace form
/// <reference path="./Group.tsx"/>
var form;
/// <reference path="./Group.tsx"/>
(function (form) {
    var _a = material.core, Typography = _a.Typography, ExpansionPanel = _a.ExpansionPanel, ExpansionPanelDetails = _a.ExpansionPanelDetails, ExpansionPanelSummary = _a.ExpansionPanelSummary, makeStyles = _a.makeStyles;
    var ExpandMore = material.icons.ExpandMore;
    var useStyles = makeStyles(function (theme) { return ({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary
        },
        strech: {
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch'
        },
        content: {
            flexGrow: 1,
            width: '100%'
        }
    }); });
    var components;
    (function (components) {
        components.Expansion = function (_a) {
            var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.description, description = _c === void 0 ? '' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.columns, columns = _e === void 0 ? '' : _e, _f = _a.phoneColumns, phoneColumns = _f === void 0 ? '' : _f, _g = _a.tabletColumns, tabletColumns = _g === void 0 ? '' : _g, _h = _a.desktopColumns, desktopColumns = _h === void 0 ? '' : _h, _j = _a.children, children = _j === void 0 ? null : _j, otherProps = __rest(_a, ["title", "description", "className", "columns", "phoneColumns", "tabletColumns", "desktopColumns", "children"]);
            var classes = useStyles();
            return (React.createElement(components.Group, __assign({ className: classNames(className, classes.strech), columns: columns }, otherProps, { phoneColumns: phoneColumns, tabletColumns: tabletColumns, desktopColumns: desktopColumns }),
                React.createElement(ExpansionPanel, { className: classes.content },
                    React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(ExpandMore, null) },
                        React.createElement(Typography, { className: classes.heading }, title),
                        React.createElement(Typography, { className: classes.secondaryHeading }, description)),
                    React.createElement(ExpansionPanelDetails, null,
                        React.createElement(components.Group, null, children)))));
        };
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var FieldType;
    (function (FieldType) {
        FieldType["Switch"] = "switch";
        FieldType["Line"] = "line";
        FieldType["Group"] = "group";
        FieldType["Expansion"] = "expansion";
        FieldType["Radio"] = "radio";
        FieldType["Checkbox"] = "checkbox";
        FieldType["Text"] = "text";
        FieldType["Progress"] = "progress";
        FieldType["Component"] = "component";
        FieldType["Slider"] = "slider";
        FieldType["Combo"] = "combo";
        FieldType["Items"] = "items";
        FieldType["Rating"] = "rating";
    })(FieldType = form.FieldType || (form.FieldType = {}));
    ;
})(form || (form = {})); // namespace form
/// <reference path="./FieldType.ts"/>
/// <reference path="./IField.ts"/>
/// <reference path="./IField.ts"/>
var form;
(function (form) {
    var SelectionMode;
    (function (SelectionMode) {
        SelectionMode["Single"] = "single";
        SelectionMode["Multiple"] = "multiple";
        SelectionMode["None"] = "none";
    })(SelectionMode = form.SelectionMode || (form.SelectionMode = {}));
    ;
})(form || (form = {})); // namespace form
var form;
(function (form) {
    ;
})(form || (form = {})); // namespace form
var form;
(function (form) {
    ;
})(form || (form = {})); // namespace form
/// <reference path="./IField.ts"/>
/// <reference path="./SelectionMode.ts"/>
/// <reference path="./IListHandlerInput.ts"/>
/// <reference path="./IListHandlerResult.ts"/>
var form;
/// <reference path="./IField.ts"/>
/// <reference path="./SelectionMode.ts"/>
/// <reference path="./IListHandlerInput.ts"/>
/// <reference path="./IListHandlerResult.ts"/>
(function (form) {
    ;
})(form || (form = {})); // namespace form
/// <reference path="./IField.ts"/>
/// <reference path="./IEntity.ts"/>
/// <reference path="./IOneProps.ts"/>
/// <reference path="./FieldType.ts"/>
/// <reference path="./IListProps.ts"/>
/// <reference path="./Group.tsx"/>
/// <reference path="../utils/get.ts"/>
/// <reference path="../utils/wairForBlur.ts"/>
var form;
/// <reference path="./Group.tsx"/>
/// <reference path="../utils/get.ts"/>
/// <reference path="../utils/wairForBlur.ts"/>
(function (form) {
    var useRef = React.useRef, useState = React.useState, useEffect = React.useEffect;
    var makeStyles = material.core.makeStyles;
    var get = form.utils.get, set = form.utils.set, deepClone = form.utils.deepClone, deepCompare = form.utils.deepCompare, waitForBlur = form.utils.waitForBlur;
    var useDebounce = useDebounceHook.useDebounce;
    var components;
    (function (components) {
        var stretch = {
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch'
        };
        var useStyles = makeStyles({
            root: __assign(__assign({}, stretch), { '& > *': __assign(__assign({}, stretch), { flexGrow: 1 }), '& > * > *': {
                    flexGrow: 1
                } }),
            hidden: {
                display: 'none'
            }
        });
        /**
         *  - Оборачивает IEntity в удобную абстракцию IManaged, где сразу
         *    представлены invalid, disabled, visible и можно задваивать вызов onChange
         *  - Управляет фокусировкой, мануально ожидая потерю фокуса, эмулируя onBlur
         */
        components.makeManaged = function (Component, skipDebounce) {
            if (skipDebounce === void 0) { skipDebounce = false; }
            return function (_a) {
                var _b;
                var _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.columns, columns = _d === void 0 ? '' : _d, _e = _a.phoneColumns, phoneColumns = _e === void 0 ? '' : _e, _f = _a.tabletColumns, tabletColumns = _f === void 0 ? '' : _f, _g = _a.desktopColumns, desktopColumns = _g === void 0 ? '' : _g, _h = _a.isDisabled, isDisabled = _h === void 0 ? function () { return false; } : _h, _j = _a.isVisible, isVisible = _j === void 0 ? function () { return true; } : _j, _k = _a.isInvalid, isInvalid = _k === void 0 ? function () { return null; } : _k, _l = _a.change, change = _l === void 0 ? function (v) { return console.log({ v: v }); } : _l, _m = _a.compute, compute = _m === void 0 ? null : _m, _o = _a.object, object = _o === void 0 ? {} : _o, _p = _a.name, name = _p === void 0 ? '' : _p, _q = _a.focus, focus = _q === void 0 ? null : _q, _r = _a.blur, blur = _r === void 0 ? null : _r, _s = _a.readonly, readonly = _s === void 0 ? false : _s, _t = _a.style, style = _t === void 0 ? null : _t, otherProps = __rest(_a, ["className", "columns", "phoneColumns", "tabletColumns", "desktopColumns", "isDisabled", "isVisible", "isInvalid", "change", "compute", "object", "name", "focus", "blur", "readonly", "style"]);
                var groupRef = useRef(null);
                var classes = useStyles();
                var _u = useState(false), disabled = _u[0], setDisabled = _u[1];
                var _v = useState(null), invalid = _v[0], setInvalid = _v[1];
                var _w = useState(true), visible = _w[0], setVisible = _w[1];
                var inputUpdate = useRef(false);
                /**
                 * Чтобы поле input было React-управляемым, нельзя
                 * передавать в свойство value значение null
                 */
                var _x = useState(false), value = _x[0], setValue = _x[1];
                var debouncedValue = useDebounce(value, skipDebounce ? 0 : 600)[0];
                /**
                 * Эффект входящего изменения.
                 */
                useEffect(function () {
                    if (compute) {
                        setValue(compute(object));
                    }
                    else {
                        var newValue = get(object, name);
                        if (newValue !== value) {
                            inputUpdate.current = true;
                            setValue(newValue);
                        }
                        setDisabled(isDisabled(object));
                        setVisible(isVisible(object));
                        setInvalid(isInvalid(object));
                    }
                }, [object]);
                /**
                 * Эффект исходящего изменения. Привязан на изменение
                 * value, обернутое в хук useDebounce для оптимизации
                 * производительности
                 */
                useEffect(function () {
                    if (inputUpdate.current) {
                        inputUpdate.current = false;
                    }
                    else if (compute) {
                        return;
                    }
                    else {
                        var copy = deepClone(object);
                        var check = set(copy, name, debouncedValue);
                        var invalid_1 = isInvalid(copy);
                        setInvalid(invalid_1);
                        if (!check || !name) {
                            throw new Error("One error invalid name specified \"" + name + "\"");
                        }
                        else if (invalid_1 !== null) {
                            return;
                        }
                        else if (!deepCompare(object, copy)) {
                            change(copy);
                        }
                    }
                }, [debouncedValue]);
                var groupProps = {
                    columns: columns,
                    phoneColumns: phoneColumns,
                    tabletColumns: tabletColumns,
                    desktopColumns: desktopColumns
                };
                /**
                 * Блокирует применение изменений,
                 * если поле вычисляемое или только
                 * на чтение
                 */
                var onChange = function (newValue) {
                    if (readonly) {
                        return;
                    }
                    if (compute) {
                        return;
                    }
                    setValue(newValue);
                };
                /**
                 * Запускает механизм вещания фокусировки,
                 * использует полифил для ожидания потери
                 * фокуса
                 */
                var onFocus = function () {
                    if (blur) {
                        waitForBlur(groupRef.current)
                            .then(blur);
                    }
                    if (focus) {
                        focus();
                    }
                };
                var managedProps = __assign({ value: value, disabled: disabled, invalid: invalid, onChange: onChange }, otherProps);
                var hidden = (_b = {},
                    _b[classes.hidden] = !visible,
                    _b);
                return (React.createElement(components.Group, __assign({ isItem: true, style: style, className: classNames(className, classes.root, hidden) }, groupProps, { onFocus: onFocus, ref: groupRef }),
                    React.createElement(Component, __assign({}, managedProps))));
            };
        };
    })(components = form.components || (form.components = {}));
    ;
})(form || (form = {})); // namespace components
/// <reference path="../components/makeManaged.tsx"/>
var form;
/// <reference path="../components/makeManaged.tsx"/>
(function (form) {
    var _a = material.core, Checkbox = _a.Checkbox, FormGroup = _a.FormGroup, FormControlLabel = _a.FormControlLabel;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        fields.CheckboxField = makeManaged(function (_a) {
            var disabled = _a.disabled, value = _a.value, onChange = _a.onChange, title = _a.title;
            return (React.createElement(FormGroup, null,
                React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { disabled: disabled, checked: value, onChange: function () { return onChange(!value); } }), label: title })));
        }, true);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="../components/Group.tsx"/>
var form;
/// <reference path="../components/Group.tsx"/>
(function (form) {
    var _a = material.core, Typography = _a.Typography, Box = _a.Box, makeStyles = _a.makeStyles;
    var Group = form.components.Group;
    var fields;
    (function (fields) {
        var useStyles = makeStyles(function (theme) { return ({
            root: {
                height: 72,
                display: 'flex',
                flexWrap: 'nowrap',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                justifyContent: 'stretch'
            },
            line: {
                background: theme.palette.text.secondary,
                flexGrow: 1,
                margin: 15,
                height: 1
            }
        }); });
        fields.LineField = function (_a) {
            var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.columns, columns = _c === void 0 ? '' : _c, _d = _a.title, title = _d === void 0 ? '' : _d, _e = _a.phoneColumns, phoneColumns = _e === void 0 ? '' : _e, _f = _a.tabletColumns, tabletColumns = _f === void 0 ? '' : _f, _g = _a.desktopColumns, desktopColumns = _g === void 0 ? '' : _g, _h = _a.styles, styles = _h === void 0 ? null : _h;
            var classes = useStyles();
            var groupProps = {
                styles: styles, columns: columns,
                desktopColumns: desktopColumns,
                tabletColumns: tabletColumns,
                phoneColumns: phoneColumns
            };
            return (React.createElement(Group, __assign({}, groupProps, { className: classNames(className, classes.root) }),
                React.createElement(Typography, { variant: "h5" }, title),
                React.createElement(Box, { className: classes.line })));
        };
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="../components/makeManaged.tsx"/>
var form;
/// <reference path="../components/makeManaged.tsx"/>
(function (form) {
    var makeManaged = form.components.makeManaged;
    var _a = material.core, Radio = _a.Radio, FormGroup = _a.FormGroup, RadioGroup = _a.RadioGroup, FormControlLabel = _a.FormControlLabel;
    var fields;
    (function (fields) {
        fields.RadioField = makeManaged(function (_a) {
            var disabled = _a.disabled, value = _a.value, onChange = _a.onChange, title = _a.title, radioValue = _a.radioValue;
            return (React.createElement(FormGroup, null,
                React.createElement(RadioGroup, { name: name, disabled: disabled, value: value, onChange: function () { return onChange(radioValue); } },
                    React.createElement(FormControlLabel, { value: radioValue, control: React.createElement(Radio, null), label: title }))));
        }, true);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="../components/makeManaged.tsx"/>
var form;
/// <reference path="../components/makeManaged.tsx"/>
(function (form) {
    var makeManaged = form.components.makeManaged;
    var _a = material.core, Switch = _a.Switch, FormGroup = _a.FormGroup, FormControlLabel = _a.FormControlLabel;
    var fields;
    (function (fields) {
        fields.SwitchField = makeManaged(function (_a) {
            var disabled = _a.disabled, value = _a.value, onChange = _a.onChange, title = _a.title;
            return (React.createElement(FormGroup, null,
                React.createElement(FormControlLabel, { control: React.createElement(Switch, { disabled: disabled, checked: value, onChange: function () { return onChange(!value); } }), label: title })));
        }, true);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="../components/makeManaged.tsx"/>
/// <reference path="../utils/createIcon.ts"/>
var form;
/// <reference path="../components/makeManaged.tsx"/>
/// <reference path="../utils/createIcon.ts"/>
(function (form) {
    var _a = material.core, MatTextField = _a.TextField, InputAdornment = _a.InputAdornment, IconButton = _a.IconButton;
    var makeManaged = form.components.makeManaged;
    var icon = form.utils.createIcon;
    var fields;
    (function (fields) {
        var icons = function (leadingIcon, trailingIcon, leadingIconClick, trailingIconClick, v, c) { return (__assign(__assign({}, leadingIcon ? { startAdornment: (React.createElement(InputAdornment, { position: "start" },
                React.createElement(IconButton, { edge: "start", onClick: function () {
                        if (leadingIconClick) {
                            leadingIconClick(v, c);
                        }
                    } }, icon(leadingIcon)))) } : {}), trailingIcon ? { endAdornment: (React.createElement(InputAdornment, { position: "end" },
                React.createElement(IconButton, { edge: "end", onClick: function () {
                        if (trailingIconClick) {
                            trailingIconClick(v, c);
                        }
                    } }, icon(trailingIcon)))) } : {})); };
        var multiline = function (inputRows) { return ({
            multiline: inputRows > 1,
            rows: inputRows
        }); };
        fields.TextField = makeManaged(function (_a) {
            var invalid = _a.invalid, value = _a.value, disabled = _a.disabled, _b = _a.inputType, inputType = _b === void 0 ? 'text' : _b, _c = _a.description, description = _c === void 0 ? '' : _c, _d = _a.outlined, outlined = _d === void 0 ? true : _d, _e = _a.title, title = _e === void 0 ? '' : _e, _f = _a.leadingIcon, li = _f === void 0 ? null : _f, _g = _a.trailingIcon, ti = _g === void 0 ? null : _g, _h = _a.leadingIconClick, lic = _h === void 0 ? null : _h, _j = _a.trailingIconClick, tic = _j === void 0 ? null : _j, _k = _a.inputRows, rows = _k === void 0 ? 1 : _k, _l = _a.placeholder, placeholder = _l === void 0 ? '' : _l, onChange = _a.onChange;
            return (React.createElement(MatTextField, __assign({ variant: outlined ? "outlined" : "standard", helperText: invalid || description, InputProps: icons(li, ti, lic, tic, value, onChange), type: inputType, value: value, error: invalid !== null, placeholder: placeholder, onChange: function (_a) {
                    var target = _a.target;
                    return onChange(target.value.toString());
                }, label: title, disabled: disabled }, multiline(rows))));
        }, false);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var _a = material.core, MatLinearProgress = _a.LinearProgress, ThemeProvider = _a.ThemeProvider, Typography = _a.Typography, Box = _a.Box;
    var createMuiTheme = material.core.createMuiTheme;
    var round = Math.round, min = Math.min, max = Math.max;
    var h = React.createElement;
    var useDelayed = form.hooks.useDelayed;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        var percent = function (v, m) { return min(100, round((max(Number(v), 0) / m) * 100)); };
        var LinearProgress = function (_a) {
            var value = _a.value, progressColor = _a.progressColor, progressBarColor = _a.progressBarColor;
            var progress = h(MatLinearProgress, { value: value, variant: "determinate" });
            if (progressColor && progressBarColor) {
                return useDelayed(function () { return createMuiTheme({
                    overrides: {
                        MuiLinearProgress: {
                            colorPrimary: {
                                backgroundColor: progressColor(value)
                            },
                            barColorPrimary: {
                                backgroundColor: progressBarColor(value)
                            }
                        }
                    }
                }); }, function (theme) { return h(ThemeProvider, { theme: theme }, progress); }, [value]);
            }
            else {
                return progress;
            }
        };
        fields.ProgressField = makeManaged(function (_a) {
            var _b = _a.progressBarColor, progressBarColor = _b === void 0 ? null : _b, _c = _a.progressColor, progressColor = _c === void 0 ? null : _c, _d = _a.maxPercent, maxPercent = _d === void 0 ? 1.0 : _d, showPercentLabel = _a.showPercentLabel, value = _a.value;
            return (React.createElement(Box, { display: "flex", alignItems: "center" },
                React.createElement(Box, { width: "100%", mr: 1 },
                    React.createElement(LinearProgress, { value: percent(value, maxPercent), progressBarColor: progressBarColor, progressColor: progressColor })),
                showPercentLabel && React.createElement(Box, { minWidth: 35 },
                    React.createElement(Typography, { variant: "body2", color: "textSecondary" }, percent(value, maxPercent) + "%"))));
        });
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var isValidElement = React.isValidElement;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        fields.ComponentField = makeManaged(function (_a) {
            var value = _a.value;
            if (isValidElement(value)) {
                return value;
            }
            else {
                return React.createElement("p", null, "Invalid component");
            }
        });
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var _a = material.core, Box = _a.Box, Grid = _a.Grid, IconButton = _a.IconButton, ThemeProvider = _a.ThemeProvider, MatSlider = _a.Slider;
    var h = React.createElement;
    var createMuiTheme = material.core.createMuiTheme;
    var useDelayed = form.hooks.useDelayed;
    var makeManaged = form.components.makeManaged;
    var icon = form.utils.createIcon;
    var fields;
    (function (fields) {
        var createIcon = function (icn, value, onChange, click, edge) { return (React.createElement(IconButton, { onClick: function () {
                if (click) {
                    click(value, onChange);
                }
            }, edge: edge }, icon(icn))); };
        var Slider = function (_a) {
            var stepSlider = _a.stepSlider, _b = _a.maxSlider, maxSlider = _b === void 0 ? 100 : _b, _c = _a.minSlider, minSlider = _c === void 0 ? 0 : _c, onChange = _a.onChange, value = _a.value;
            return (React.createElement(MatSlider, { step: stepSlider, marks: !!stepSlider, min: minSlider, max: maxSlider, "aria-labelledby": "discrete-slider", valueLabelDisplay: "auto", color: "primary", value: value, onChange: function (_a, v) { return onChange(v); } }));
        };
        var SliderColor = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b, thumbColor = _a.thumbColor, trackColor = _a.trackColor, railColor = _a.railColor, value = _a.value;
            if (thumbColor && trackColor && railColor) {
                return useDelayed(function () { return createMuiTheme({
                    overrides: {
                        MuiSlider: {
                            thumb: { color: thumbColor(value) },
                            track: { color: trackColor(value) },
                            rail: { color: railColor(value) }
                        }
                    }
                }); }, function (theme) { return h(ThemeProvider, { theme: theme }, children); }, [value]);
            }
            else {
                return children;
            }
        };
        fields.SliderField = makeManaged(function (_a) {
            var value = _a.value, onChange = _a.onChange, _b = _a.leadingIcon, li = _b === void 0 ? null : _b, _c = _a.trailingIcon, ti = _c === void 0 ? null : _c, _d = _a.leadingIconClick, lic = _d === void 0 ? null : _d, _e = _a.trailingIconClick, tic = _e === void 0 ? null : _e, _f = _a.sliderThumbColor, thc = _f === void 0 ? null : _f, _g = _a.sliderTrackColor, trc = _g === void 0 ? null : _g, _h = _a.sliderRailColor, rc = _h === void 0 ? null : _h, otherProps = __rest(_a, ["value", "onChange", "leadingIcon", "trailingIcon", "leadingIconClick", "trailingIconClick", "sliderThumbColor", "sliderTrackColor", "sliderRailColor"]);
            return (React.createElement(Box, { mr: 1 },
                React.createElement(Grid, { alignItems: "center", container: true, spacing: 2 },
                    React.createElement(Grid, { item: true }, li && createIcon(li, value, onChange, lic, 'end')),
                    React.createElement(Grid, { item: true, xs: true },
                        React.createElement(SliderColor, { value: value, thumbColor: thc, trackColor: trc, railColor: rc },
                            React.createElement(Slider, __assign({}, otherProps, { onChange: onChange, value: value })))),
                    React.createElement(Grid, { item: true }, ti && createIcon(ti, value, onChange, tic, 'start')))));
        });
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var MatTextField = material.core.TextField;
    var Autocomplete = material.lab.Autocomplete;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        fields.ComboField = makeManaged(function (_a) {
            var value = _a.value, disabled = _a.disabled, _b = _a.description, description = _b === void 0 ? '' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, _d = _a.outlined, outlined = _d === void 0 ? true : _d, _e = _a.itemList, itemList = _e === void 0 ? [] : _e, _f = _a.title, title = _f === void 0 ? '' : _f, _g = _a.tr, tr = _g === void 0 ? function (s) { return s; } : _g, onChange = _a.onChange;
            return (React.createElement(Autocomplete, { value: value, onChange: function (_a, v) { return onChange(v); }, getOptionLabel: function (s) { return tr(s); }, options: itemList, disabled: disabled, renderInput: function (params) { return (React.createElement(MatTextField, __assign({}, params, { variant: outlined ? "outlined" : "standard", helperText: description, label: title, placeholder: placeholder }))); } }));
        }, true);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var _a = material.core, MatTextField = _a.TextField, Chip = _a.Chip;
    var Autocomplete = material.lab.Autocomplete;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        fields.ItemsField = makeManaged(function (_a) {
            var value = _a.value, disabled = _a.disabled, _b = _a.description, description = _b === void 0 ? '' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, _d = _a.outlined, outlined = _d === void 0 ? true : _d, _e = _a.itemList, itemList = _e === void 0 ? [] : _e, _f = _a.title, title = _f === void 0 ? '' : _f, _g = _a.tr, tr = _g === void 0 ? function (s) { return s; } : _g, onChange = _a.onChange;
            return (React.createElement(Autocomplete, { multiple: true, onChange: function (_a, v) { return onChange(v); }, options: itemList, disabled: disabled, value: value, getOptionLabel: function (s) { return tr(s); }, renderTags: function (value, getTagProps) { return value.map(function (option, index) { return (React.createElement(Chip, __assign({ variant: outlined ? "outlined" : "standard", label: option }, getTagProps({ index: index })))); }); }, renderInput: function (params) { return (React.createElement(MatTextField, __assign({ variant: outlined ? "outlined" : "standard" }, params, { label: title, placeholder: placeholder, helperText: description }))); } }));
        }, true);
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var Rating = material.lab.Rating;
    var _a = material.core, Box = _a.Box, Typography = _a.Typography;
    var makeManaged = form.components.makeManaged;
    var fields;
    (function (fields) {
        fields.RatingField = makeManaged(function (_a) {
            var value = _a.value, disabled = _a.disabled, readonly = _a.readonly, title = _a.title, onChange = _a.onChange;
            return (React.createElement(Box, { display: "flex", justifyContent: "center", component: "fieldset", borderColor: "transparent" },
                React.createElement(Typography, { component: "legend" }, title),
                React.createElement(Rating, { onChange: function (_a, v) { return onChange(v); }, disabled: disabled, value: value, readOnly: readonly })));
        });
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="../fields/index.ts"/>
var form;
/// <reference path="../fields/index.ts"/>
(function (form) {
    var fields;
    (function (fields) {
        fields.createField = function (entity, currentPath) {
            if (currentPath === void 0) { currentPath = ''; }
            var type = entity.type;
            if (type === form.FieldType.Text) {
                return React.createElement(fields.TextField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Line) {
                return React.createElement(fields.LineField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Radio) {
                return React.createElement(fields.RadioField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Switch) {
                return React.createElement(fields.SwitchField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Checkbox) {
                return React.createElement(fields.CheckboxField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Progress) {
                return React.createElement(fields.ProgressField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Component) {
                return React.createElement(fields.ComponentField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Slider) {
                return React.createElement(fields.SliderField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Combo) {
                return React.createElement(fields.ComboField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Items) {
                return React.createElement(fields.ItemsField, __assign({}, entity, { key: currentPath }));
            }
            else if (type === form.FieldType.Rating) {
                return React.createElement(fields.RatingField, __assign({}, entity, { key: currentPath }));
            }
            else {
                throw new Error('FieldFactory unknown key type');
            }
        };
    })(fields = form.fields || (form.fields = {})); // namespace fields
})(form || (form = {})); // namespace form
/// <reference path="./CheckboxField.tsx"/>
/// <reference path="./LineField.tsx"/>
/// <reference path="./RadioField.tsx"/>
/// <reference path="./SwitchField.tsx"/>
/// <reference path="./TextField.tsx"/>
/// <reference path="./ProgressField.tsx"/>
/// <reference path="./ComponentField.tsx"/>
/// <reference path="./SliderField.tsx"/>
/// <reference path="./ComboField.tsx"/>
/// <reference path="./ItemsField.tsx"/>
/// <reference path="./RatingField.tsx"/>
/// <reference path="./createField.tsx"/>
/// <reference path="../components/index.ts"/>
/// <reference path="../common/index.ts"/>
/// <reference path="../fields/index.ts"/>
var form;
/// <reference path="../components/index.ts"/>
/// <reference path="../common/index.ts"/>
/// <reference path="../fields/index.ts"/>
(function (form) {
    var Fragment = React.Fragment;
    var createField = form.fields.createField;
    var useResolved = form.hooks.useResolved;
    var components;
    (function (components) {
        components.One = function (_a) {
            var fields = _a.fields, change = _a.change, _b = _a.prefix, prefix = _b === void 0 ? 'root' : _b, _c = _a.fallback, fallback = _c === void 0 ? null : _c, _d = _a.handler, handler = _d === void 0 ? function () { return ({}); } : _d, _e = _a.focus, focus = _e === void 0 ? null : _e, _f = _a.blur, blur = _f === void 0 ? null : _f, _g = _a.LoadPlaceholder, LoadPlaceholder = _g === void 0 ? null : _g;
            var _h = useResolved(handler, fallback, fields), object = _h[0], setObject = _h[1];
            var onChange = function (v) {
                setObject(v);
                change(v);
            };
            if (object === null) {
                return LoadPlaceholder;
            }
            else {
                return (React.createElement(Fragment, null, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {
                    var entity = __assign(__assign({ focus: focus, blur: blur }, field), { object: object, change: onChange });
                    var currentPath = prefix + "." + field.type + "[" + index + "]";
                    if (field.type === form.FieldType.Expansion) {
                        return (React.createElement(components.Expansion, __assign({}, field, { key: currentPath }),
                            React.createElement(components.One, { LoadPlaceholder: LoadPlaceholder, fields: field.fields, focus: focus, blur: blur, prefix: currentPath, handler: object, change: onChange })));
                    }
                    else if (field.type === form.FieldType.Group) {
                        return (React.createElement(components.Group, __assign({}, field, { key: currentPath }),
                            React.createElement(components.One, { LoadPlaceholder: LoadPlaceholder, fields: field.fields, focus: focus, blur: blur, prefix: currentPath, handler: object, change: onChange })));
                    }
                    else {
                        return createField(entity, currentPath);
                    }
                })));
            }
        };
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace form
/// <reference path="../fields/index.ts"/>
/// <reference path="../common/index.ts"/>
/// <reference path="../utils/index.ts"/>
var form;
/// <reference path="../fields/index.ts"/>
/// <reference path="../common/index.ts"/>
/// <reference path="../utils/index.ts"/>
(function (form) {
    var _a = material.core, Box = _a.Box, Radio = _a.Radio, Table = _a.Table, Checkbox = _a.Checkbox, TableRow = _a.TableRow, TableCell = _a.TableCell, TableHead = _a.TableHead, TableBody = _a.TableBody, TextField = _a.TextField, IconButton = _a.IconButton, InputAdornment = _a.InputAdornment, TableSortLabel = _a.TableSortLabel, TablePagination = _a.TablePagination;
    var _b = material.icons, SyncIcon = _b.Sync, EditIcon = _b.Edit, DeleteIcon = _b.Delete, SearchIcon = _b.Search;
    var makeStyles = material.core.makeStyles;
    var useRef = React.useRef, useState = React.useState, useEffect = React.useEffect, useContext = React.useContext, useCallback = React.useCallback;
    var createField = form.fields.createField;
    var createContext = React.createContext;
    var components;
    (function (components) {
        var _this = this;
        var useStyles = makeStyles({
            root: {
                position: 'relative',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            },
            container: {
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'stretch'
            },
            scroll: {
                maxHeight: 'calc(100% - 100px)',
                overflow: 'auto'
            },
            stretch: {
                flexGrow: 1,
                flexShrink: 1
            },
            disabled: {
                pointerEvents: 'none',
                touchAction: 'none',
                opacity: 0.5
            }
        });
        var ListRadioContext = createContext([]);
        var ListRadioManager = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var _c = useState(-1), value = _c[0], setValue = _c[1];
            return (React.createElement(ListRadioContext.Provider, { value: [value, function (v) { return setValue(v); }] }, children));
        };
        var ListHeader = function (_a) {
            var _b = _a.fields, fields = _b === void 0 ? [] : _b, _c = _a.orderBy, orderBy = _c === void 0 ? '' : _c, _d = _a.order, order = _d === void 0 ? '' : _d, _e = _a.selection, selection = _e === void 0 ? form.SelectionMode.None : _e, _f = _a.onOrder, onOrder = _f === void 0 ? function (name) { return console.log({ name: name }); } : _f;
            return (React.createElement(TableHead, null,
                React.createElement(TableRow, null,
                    React.createElement(TableCell, { padding: "checkbox" },
                        React.createElement(ListMark, { disabled: true, selection: selection })),
                    fields.map(function (_a) {
                        var title = _a.title, name = _a.name;
                        return (React.createElement(TableCell, { key: name, sortDirection: orderBy === name ? order : false },
                            React.createElement(TableSortLabel, { direction: orderBy === name ? order : 'asc', active: orderBy === name && order, onClick: function () { return onOrder(name); } }, title)));
                    }),
                    React.createElement(TableCell, { align: "right" }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"))));
        };
        var ListToolbar = function (_a) {
            var _b = _a.keyword, keyword = _b === void 0 ? '' : _b, _c = _a.onKeyword, onKeyword = _c === void 0 ? function (keyword) { return console.log({ keyword: keyword }); } : _c, _d = _a.onUpdate, onUpdate = _d === void 0 ? function () { return console.log('update'); } : _d;
            var styles = useStyles();
            var inputProps = {
                startAdornment: (React.createElement(InputAdornment, { position: "start" },
                    React.createElement(SearchIcon, null)))
            };
            return (React.createElement(Box, { className: styles.container },
                React.createElement(TextField, { label: "\u041F\u043E\u0438\u0441\u043A", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430", style: { minWidth: 'max(30%, 275px)' }, value: keyword, onChange: function (_a) {
                        var target = _a.target;
                        return onKeyword(target.value);
                    }, InputProps: inputProps }),
                React.createElement(Box, { className: styles.stretch }),
                React.createElement(IconButton, { onClick: onUpdate },
                    React.createElement(SyncIcon, null))));
        };
        var ListMark = function (_a) {
            var _b = _a.selection, selection = _b === void 0 ? form.SelectionMode.None : _b, _c = _a.line, line = _c === void 0 ? 0 : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.onSelect, onSelect = _e === void 0 ? function (line) { return console.log({ line: line }); } : _e;
            var _f = useContext(ListRadioContext), value = _f[0], setValue = _f[1];
            if (selection === form.SelectionMode.Single) {
                var onChange_1 = function (line) {
                    setValue(line);
                    onSelect(line);
                };
                return (React.createElement(Radio, { checked: value === line, disabled: disabled, onClick: function () { return onChange_1(line); } }));
            }
            else if (selection === form.SelectionMode.Multiple) {
                return (React.createElement(Checkbox, { disabled: disabled, onClick: function () { return onSelect(line); } }));
            }
            else if (selection === form.SelectionMode.None) {
                return (React.createElement(Checkbox, { disabled: true }));
            }
            else {
                throw new Error('ListMark invalid selection mode');
            }
        };
        var ListContent = function (_a) {
            var _b = _a.objects, objects = _b === void 0 ? [] : _b, _c = _a.fields, fields = _c === void 0 ? [] : _c, _d = _a.canSelect, canSelect = _d === void 0 ? true : _d, _e = _a.canDelete, canDelete = _e === void 0 ? true : _e, _f = _a.canEdit, canEdit = _f === void 0 ? true : _f, _g = _a.limit, limit = _g === void 0 ? 0 : _g, _h = _a.offset, offset = _h === void 0 ? 0 : _h, _j = _a.selection, selection = _j === void 0 ? form.SelectionMode.None : _j, _k = _a.onDelete, onDelete = _k === void 0 ? function (object) { return console.log({ object: object }); } : _k, _l = _a.onClick, onClick = _l === void 0 ? function (object) { return console.log({ object: object }); } : _l, _m = _a.onSelect, onSelect = _m === void 0 ? function (line) { return console.log({ line: line }); } : _m;
            return (React.createElement(TableBody, null,
                React.createElement(ListRadioManager, { key: "radio-" + limit + "-" + offset }, objects === null || objects === void 0 ? void 0 : objects.map(function (object, index) { return (React.createElement(TableRow, { key: index + offset },
                    React.createElement(TableCell, { padding: "checkbox" },
                        React.createElement(ListMark, { selection: selection, disabled: !canSelect, line: index, onSelect: onSelect })), fields === null || fields === void 0 ? void 0 :
                    fields.map(function (field, name) {
                        var entity = __assign(__assign({}, field), { object: object, readonly: true, outlined: false });
                        return (React.createElement(TableCell, { key: name, onClick: function () { return canEdit && onClick(object); } }, createField(entity)));
                    }),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement(IconButton, { disabled: !canEdit, onClick: function () { return onClick(object); } },
                            React.createElement(EditIcon, null)),
                        React.createElement(IconButton, { disabled: !canDelete, onClick: function () { return onDelete(object); } },
                            React.createElement(DeleteIcon, null))))); }))));
        };
        var ListFooter = function (_a) {
            var _b;
            var _c = _a.limit, limit = _c === void 0 ? 10 : _c, _d = _a.offset, offset = _d === void 0 ? 0 : _d, _e = _a.total, total = _e === void 0 ? 100 : _e, _f = _a.disabled, disabled = _f === void 0 ? true : _f, _g = _a.onChangeLimit, onChangeLimit = _g === void 0 ? function (limit) { return console.log({ limit: limit }); } : _g, _h = _a.onChangeOffset, onChangeOffset = _h === void 0 ? function (offset) { return console.log({ offset: offset }); } : _h;
            var classes = useStyles();
            return (React.createElement(TablePagination, { className: classNames((_b = {}, _b[classes.disabled] = disabled, _b)), rowsPerPageOptions: [5, 10, 25, 50], component: "div", count: total, rowsPerPage: limit, page: offset / limit, onChangePage: function (e, newPage) { return onChangeOffset(limit * newPage); }, onChangeRowsPerPage: function (_a) {
                    var target = _a.target;
                    return onChangeLimit(target.value);
                } }));
        };
        components.List = function (_a) {
            var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.fields, fields = _c === void 0 ? [] : _c, _d = _a.selection, selection = _d === void 0 ? form.SelectionMode.None : _d, _e = _a.limit, limit = _e === void 0 ? 25 : _e, _f = _a.offset, offset = _f === void 0 ? 0 : _f, _g = _a.total, total = _g === void 0 ? 100 : _g, _h = _a.canSelect, canSelect = _h === void 0 ? true : _h, _j = _a.canDelete, canDelete = _j === void 0 ? true : _j, _k = _a.canEdit, canEdit = _k === void 0 ? true : _k, _l = _a.select, select = _l === void 0 ? function (objects) { return console.log({ objects: objects }); } : _l, _m = _a.click, click = _m === void 0 ? function (object) { return console.log({ object: object }); } : _m, _o = _a.remove, remove = _o === void 0 ? function (object) { return console.log({ object: object }); } : _o, _p = _a.handler, handler = _p === void 0 ? function () { return null; } : _p, _q = _a.fallback, fallback = _q === void 0 ? null : _q, otherProps = __rest(_a, ["className", "fields", "selection", "limit", "offset", "total", "canSelect", "canDelete", "canEdit", "select", "click", "remove", "handler", "fallback"]);
            var classes = useStyles();
            var _r = useState(''), keyword = _r[0], setKeyword = _r[1];
            var _s = useState(''), orderBy = _s[0], setOrderBy = _s[1];
            var _t = useState([]), objects = _t[0], setObjects = _t[1];
            var _u = useState(true), loading = _u[0], setLoading = _u[1];
            var _v = useState(''), order = _v[0], setOrder = _v[1];
            var _w = useState({ limit: limit, offset: offset, total: total }), pagination = _w[0], setPagination = _w[1];
            var _x = useState(new Set()), selections = _x[0], setSelections = _x[1];
            var onOrder = useCallback(function (name) {
                if (name === orderBy && order === 'desc') {
                    setOrder('asc');
                }
                else if (name === orderBy && order === 'asc') {
                    setOrderBy('');
                    setOrder('');
                }
                else {
                    setOrderBy(name);
                    setOrder('desc');
                }
            }, [order, orderBy]);
            var onSelect = useCallback(function (index) {
                if (selection === form.SelectionMode.Single) {
                    selections.clear();
                    selections.add(index);
                }
                else if (selections.has(index)) {
                    selections["delete"](index);
                }
                else {
                    selections.add(index);
                }
                setSelections(selections);
                select(Array.from(selections).map(function (i) { return objects[i]; }));
            }, [selections, pagination, objects]);
            var onUpdate = useCallback(function () {
                setLoading(true);
                var process = function () { return __awaiter(_this, void 0, void 0, function () {
                    var props, getData, data, total_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                props = __assign({ keyword: keyword, order: order, orderBy: orderBy }, pagination);
                                getData = function () { return __awaiter(_this, void 0, void 0, function () {
                                    var result, e_2;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(typeof handler === 'function')) return [3 /*break*/, 7];
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 5, , 6]);
                                                result = handler(props);
                                                if (!(result instanceof Promise)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, result];
                                            case 2: return [2 /*return*/, _a.sent()];
                                            case 3: return [2 /*return*/, result];
                                            case 4: return [3 /*break*/, 6];
                                            case 5:
                                                e_2 = _a.sent();
                                                if (fallback) {
                                                    fallback(e_2);
                                                }
                                                else {
                                                    throw e_2;
                                                }
                                                return [3 /*break*/, 6];
                                            case 6: return [3 /*break*/, 8];
                                            case 7: throw new Error('List handler callback not function');
                                            case 8: return [2 /*return*/];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, getData()];
                            case 1:
                                data = _a.sent();
                                if ('items' in data) {
                                    setObjects(data.items);
                                }
                                if ('total' in data) {
                                    total_1 = data.total;
                                    setPagination(function (p) { return (__assign(__assign({}, p), { total: total_1 })); });
                                }
                                if (selections.size > 0) {
                                    setSelections(new Set());
                                    select([]);
                                }
                                setLoading(false);
                                return [2 /*return*/];
                        }
                    });
                }); };
                process();
            }, [handler, keyword, order, orderBy, pagination, selections]);
            var onDelete = function (obj) { return __awaiter(_this, void 0, void 0, function () {
                var result, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(typeof remove === 'function')) return [3 /*break*/, 6];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            result = remove(obj);
                            if (!(result instanceof Promise)) return [3 /*break*/, 3];
                            return [4 /*yield*/, result];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            e_3 = _a.sent();
                            if (fallback) {
                                fallback(e_3);
                            }
                            else {
                                throw e_3;
                            }
                            return [3 /*break*/, 5];
                        case 5: return [3 /*break*/, 7];
                        case 6: throw new Error('List remove callback not function');
                        case 7:
                            onUpdate();
                            return [2 /*return*/];
                    }
                });
            }); };
            useEffect(function () {
                var timeout = setTimeout(function () { return onUpdate(); }, 700);
                return function () { return clearTimeout(timeout); };
            }, [keyword, order, orderBy, pagination.limit, pagination.offset]);
            var onChangeLimit = function (limit) { return setPagination(function (p) { return (__assign(__assign({}, p), { limit: limit, offset: 0 })); }); };
            var onChangeOffset = function (offset) { return setPagination(function (p) { return (__assign(__assign({}, p), { offset: offset })); }); };
            return (React.createElement(Box, __assign({ className: classNames(className, classes.root, classes.container) }, otherProps),
                React.createElement(ListToolbar, { onKeyword: function (v) { return setKeyword(v); }, keyword: keyword, onUpdate: onUpdate }),
                React.createElement("div", { className: classNames(classes.container, classes.scroll, classes.stretch) },
                    React.createElement(Table, null,
                        React.createElement(ListHeader, { onOrder: onOrder, order: order, orderBy: orderBy, fields: fields, selection: selection }),
                        React.createElement(ListContent, __assign({ objects: objects, selection: selection, canSelect: canSelect && !!select, canDelete: canDelete && !!remove, canEdit: canEdit && !!click, onClick: click, onSelect: onSelect, fields: fields, onDelete: onDelete }, pagination)))),
                React.createElement(ListFooter, __assign({ onChangeOffset: onChangeOffset, disabled: loading, onChangeLimit: onChangeLimit }, pagination))));
        };
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var _a = material.core, MatBreadcrumbs = _a.Breadcrumbs, Typography = _a.Typography, Button = _a.Button, Link = _a.Link, Box = _a.Box;
    var makeStyles = material.core.makeStyles;
    var components;
    (function (components) {
        var useStyles = makeStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'stretch',
                flexDirection: 'row',
                paddingTop: '10px',
                paddingBottom: '10px'
            },
            stretch: {
                flexGrow: 1,
                shrink: 1
            }
        });
        components.Breadcrumbs = function (_a) {
            var _b = _a.back, back = _b === void 0 ? function () { return console.log('back'); } : _b, _c = _a.save, save = _c === void 0 ? function () { return console.log('save'); } : _c, _d = _a.currentTitle, currentTitle = _d === void 0 ? 'Справочник' : _d, _e = _a.backwardTitle, backwardTitle = _e === void 0 ? 'Документ' : _e, _f = _a.saveLabel, saveLabel = _f === void 0 ? 'Сохранить' : _f, _g = _a.saveDisabled, saveDisabled = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? '' : _h, otherProps = __rest(_a, ["back", "save", "currentTitle", "backwardTitle", "saveLabel", "saveDisabled", "className"]);
            var classes = useStyles();
            return (React.createElement(Box, __assign({ className: classNames(classes.root, className) }, otherProps),
                React.createElement(MatBreadcrumbs, { className: classes.stretch, "aria-label": "breadcrumb" },
                    React.createElement(Link, { color: "inherit", onClick: back }, backwardTitle),
                    React.createElement(Typography, { color: "textPrimary" }, currentTitle)),
                React.createElement(Button, { onClick: save, color: "primary", disabled: saveDisabled, variant: "contained" }, saveLabel)));
        };
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace form
var form;
(function (form) {
    var _a = material.core, AppBar = _a.AppBar, Toolbar = _a.Toolbar, Typography = _a.Typography, IconButton = _a.IconButton, makeStyles = _a.makeStyles, CssBaseline = _a.CssBaseline;
    var _b = material.core, Drawer = _b.Drawer, ListItem = _b.ListItem, Container = _b.Container, ListItemText = _b.ListItemText, ListItemIcon = _b.ListItemIcon, MatList = _b.List;
    var _c = material.icons, GitHub = _c.GitHub, Menu = _c.Menu;
    var h = React.createElement, Fragment = React.Fragment;
    var createIcon = form.utils.createIcon;
    var useState = React.useState;
    var withType = form.hooks.withType;
    var components;
    (function (components) {
        var openBlank = function () {
            var a = document.createElement('a');
            a.href = 'https://github.com/tripolskypetr/material-ui-umd/tree/master/packages/form-generator-app';
            a.target = '_blank';
            a.click();
        };
        var useStyles = makeStyles(function (theme) { return ({
            title: {
                flexGrow: 1
            },
            appBar: {
                background: theme.palette.background.level2,
                color: theme.palette.text.primary
            },
            offset: theme.mixins.toolbar,
            adjust: {
                padding: 10
            },
            hide: {
                display: 'none'
            }
        }); });
        var internal;
        (function (internal) {
            var RightCornerDefault = function () { return (React.createElement(IconButton, { color: "inherit", onClick: openBlank },
                React.createElement(GitHub, null))); };
            internal.Scaffold = function (_a) {
                var _b;
                var _c = _a.showMenu, showMenu = _c === void 0 ? true : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.title, title = _f === void 0 ? 'Application Title' : _f, RightCorner = _a.RightCorner, _g = _a.pages, pages = _g === void 0 ? [] : _g, _h = _a.style, style = _h === void 0 ? {} : _h;
                var classes = useStyles();
                var _j = useState(false), opened = _j[0], setOpened = _j[1];
                return (React.createElement(Fragment, null,
                    React.createElement(CssBaseline, null),
                    React.createElement(Drawer, { open: opened, onClose: function () { return setOpened(false); } },
                        React.createElement(MatList, { style: { minWidth: "240px" } }, pages.map(function (_a, index) {
                            var icon = _a.icon, title = _a.title, click = _a.click;
                            return (React.createElement(ListItem, { button: true, onClick: function () {
                                    if (click) {
                                        click();
                                    }
                                    setOpened(false);
                                }, key: index },
                                icon && h(ListItemIcon, null, createIcon(icon)),
                                React.createElement(ListItemText, { primary: title })));
                        }))),
                    React.createElement(AppBar, { className: classNames(classes.appBar, className), position: "fixed", style: style },
                        React.createElement(Toolbar, null,
                            React.createElement(IconButton, { className: classNames((_b = {},
                                    _b[classes.hide] = !showMenu,
                                    _b)), onClick: function () { return setOpened(true); }, color: "inherit" },
                                React.createElement(Menu, null)),
                            React.createElement(Typography, { variant: "h6", className: classes.title }, title),
                            (RightCorner && h(RightCorner)) || (RightCorner !== null && h(RightCornerDefault)))),
                    React.createElement("div", { className: classes.offset }),
                    React.createElement("div", { className: classes.adjust },
                        React.createElement(Container, null, children))));
            };
        })(internal || (internal = {})); // namespace internal
        ;
        components.Scaffold = withType(internal.Scaffold);
    })(components = form.components || (form.components = {})); // namespace components
})(form || (form = {})); // namespace app
/// <reference path="./Expansion.tsx"/>
/// <reference path="./Group.tsx"/>
/// <reference path="./One.tsx"/>
/// <reference path="./List.tsx"/>
/// <reference path="./makeManaged.tsx"/>
/// <reference path="./Breadcrumbs.tsx"/>
/// <reference path="./Scaffold.tsx"/>
/// <reference path="./utils/index.ts"/>
/// <reference path="./hooks/index.ts"/>
/// <reference path="./components/index.ts"/>
var form;
/// <reference path="./utils/index.ts"/>
/// <reference path="./hooks/index.ts"/>
/// <reference path="./components/index.ts"/>
(function (form) {
    var OneDefault = form.components.One, ListDefault = form.components.List, ScaffoldDefault = form.components.Scaffold, BreadcrumbsDefault = form.components.Breadcrumbs;
    form.One = OneDefault;
    form.List = ListDefault;
    form.Scaffold = ScaffoldDefault;
    form.Breadcrumbs = BreadcrumbsDefault;
})(form || (form = {})); // namespace form
/// <reference path="./IEntity.ts"/>
//# sourceMappingURL=form-tools.js.map
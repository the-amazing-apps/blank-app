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
var other;
(function (other) {
    var snack;
    (function (snack) {
        var SnackType;
        (function (SnackType) {
            SnackType["Error"] = "error";
            SnackType["Warning"] = "warning";
            SnackType["Info"] = "info";
            SnackType["Success"] = "success";
            SnackType["Normal"] = "normal";
        })(SnackType = snack.SnackType || (snack.SnackType = {}));
    })(snack = other.snack || (other.snack = {})); // namespace snack
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var snack;
    (function (snack) {
        var TransitionType;
        (function (TransitionType) {
            TransitionType["Grow"] = "grow";
            TransitionType["Slide"] = "slide";
        })(TransitionType = snack.TransitionType || (snack.TransitionType = {}));
    })(snack = other.snack || (other.snack = {})); // namespace snack
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var snack;
    (function (snack) {
        var VerticalAlign;
        (function (VerticalAlign) {
            VerticalAlign["Top"] = "top";
            VerticalAlign["Bottom"] = "bottom";
        })(VerticalAlign = snack.VerticalAlign || (snack.VerticalAlign = {}));
    })(snack = other.snack || (other.snack = {})); // namespace snack
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var snack;
    (function (snack) {
        var HorizontalAlign;
        (function (HorizontalAlign) {
            HorizontalAlign["Left"] = "left";
            HorizontalAlign["Center"] = "center";
            HorizontalAlign["Right"] = "right";
        })(HorizontalAlign = snack.HorizontalAlign || (snack.HorizontalAlign = {}));
    })(snack = other.snack || (other.snack = {})); // namespace snack
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var snack;
    (function (snack) {
        var TransitionDirection;
        (function (TransitionDirection) {
            TransitionDirection["Right"] = "right";
            TransitionDirection["Down"] = "down";
            TransitionDirection["Left"] = "left";
            TransitionDirection["Up"] = "up";
        })(TransitionDirection = snack.TransitionDirection || (snack.TransitionDirection = {}));
    })(snack = other.snack || (other.snack = {})); // namespace snack
})(other || (other = {})); // namespace other
/// <reference path="./SnackType.ts"/>
/// <reference path="./TransitionType.ts"/>
/// <reference path="./VerticalAlign.ts"/>
/// <reference path="./HorizontalAlign.ts"/>
/// <reference path="./TransitionDirection.ts"/>
/// <reference path="./ISnack.ts"/>
/// <reference path="./IReducerAction.ts"/>
/// <reference path="./snack/index.ts"/>
/// <reference path="./state/index.ts"/>
var other;
(function (other) {
    var useContext = React.useContext, createContext = React.createContext;
    var components;
    (function (components) {
        components.SnackContext = createContext(null);
        components.useSnack = function () { return useContext(components.SnackContext); };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace snack
var other;
(function (other) {
    var Fragment = React.Fragment;
    var h = React.createElement;
    var useState = React.useState, useLayoutEffect = React.useLayoutEffect;
    var components;
    (function (components) {
        var applyCloseMiddleware = function (s, message, onClose) { return (__assign(__assign({}, s), { message: message, onClose: function () {
                if (s.onClose) {
                    setTimeout(function () { return s.onClose(); });
                }
                onClose();
            } })); };
        components.SnackProvider = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var _c = useState(null), snack = _c[0], setSnack = _c[1];
            var _d = useState([]), queue = _d[0], setQueue = _d[1];
            /**
             * Гарантировано вызывается после всех мутаций
             * DOM древа: snack и queue будут обновлены
             * одновременно...
             */
            useLayoutEffect(function () {
                if (snack === null && queue.length) {
                    var snack_1 = queue[0];
                    setSnack(h(components.SnackViewer, snack_1));
                    setQueue(queue.slice(1));
                }
            }, [snack, queue]);
            /**
             * Помимо уведомления кода прикладного программиста,
             * при закрытии очищаем выбранный snack для
             * перерисовки DOM древа...
             */
            var onSnack = function (msg, s) { return setQueue(function (q) { return q.concat(applyCloseMiddleware(s || {}, msg, function () { return setSnack(null); })); }); };
            return (React.createElement(Fragment, null,
                React.createElement(components.SnackContext.Provider, { value: onSnack }, children),
                snack));
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace snack
var other;
(function (other) {
    var _a = material.core, SnackbarContent = _a.SnackbarContent, IconButton = _a.IconButton, Snackbar = _a.Snackbar, Button = _a.Button, makeStyles = _a.makeStyles;
    var _b = material.core, Slide = _b.Slide, Grow = _b.Grow;
    var Close = material.icons.Close;
    var Alert = material.lab.Alert;
    var useState = React.useState;
    var components;
    (function (components) {
        var useStyles = makeStyles({
            closeButton: {
                color: '#808080a1'
            }
        });
        var SnackAction = function (_a) {
            var action = _a.action, actionMode = _a.actionMode, onAction = _a.onAction, onClose = _a.onClose;
            var classes = useStyles();
            if (actionMode === ActionMode.Button) {
                return (React.createElement(Button, { onClick: onAction, color: "secondary", size: "small" }, action));
            }
            else if (actionMode === ActionMode.Close) {
                return (React.createElement(IconButton, { onClick: onClose, className: classes.closeButton },
                    React.createElement(Close, null)));
            }
            else {
                return null;
            }
        };
        var createTransition = function (type, direction) {
            if (type === other.snack.TransitionType.Grow) {
                return function (props) { return React.createElement(Grow, __assign({}, props)); };
            }
            else if (type === other.snack.TransitionType.Slide) {
                return function (props) { return React.createElement(Slide, __assign({}, props, { direction: direction })); };
            }
            else {
                return null;
            }
        };
        var ActionMode;
        (function (ActionMode) {
            ActionMode["Button"] = "button";
            ActionMode["Close"] = "close";
            ActionMode["None"] = "none";
        })(ActionMode || (ActionMode = {}));
        ;
        var defaultProps = function (s, onClose) { return ({
            anchorOrigin: {
                vertical: s.anchorVertical || other.snack.VerticalAlign.Bottom,
                horizontal: s.anchorHorizontal || other.snack.HorizontalAlign.Center
            },
            message: s.message || 'Message unset',
            action: s.action,
            transition: s.transition || other.snack.TransitionType.Grow,
            type: s.type || other.snack.SnackType.Normal,
            timeout: s.timeout || 5000,
            transitionDirection: s.transitionDirection || other.snack.TransitionDirection.Up,
            actionMode: (s.action && ActionMode.Button)
                || (s.message && s.message.length > 25 && ActionMode.None)
                || ActionMode.Close,
            onClose: function () {
                if (s.onClose) {
                    setTimeout(function () { return s.onClose(); });
                }
                onClose();
            },
            onAction: function () {
                if (s.onAction) {
                    setTimeout(function () { return s.onAction(); });
                }
                if (s.onClose) {
                    setTimeout(function () { return s.onClose(); });
                }
                onClose();
            }
        }); };
        components.SnackViewer = function (props) {
            var _a = useState(true), open = _a[0], setOpen = _a[1];
            var _b = defaultProps(props, function () { return setOpen(false); }), tr = _b.transition, transitionDirection = _b.transitionDirection, anchorOrigin = _b.anchorOrigin, onClose = _b.onClose, onAction = _b.onAction, timeout = _b.timeout, message = _b.message, type = _b.type, action = _b.action, actionMode = _b.actionMode;
            var renderContent = function () {
                if (type === other.snack.SnackType.Normal) {
                    return (React.createElement(SnackbarContent, { message: message, action: React.createElement(SnackAction, { actionMode: actionMode, onAction: onAction, onClose: onClose, action: action }), onClose: onClose }));
                }
                else {
                    return (React.createElement(Alert, { onClose: onClose, severity: type }, message));
                }
            };
            return (React.createElement(Snackbar, { anchorOrigin: anchorOrigin, autoHideDuration: timeout, message: message, onClose: onClose, open: open, TransitionComponent: createTransition(tr, transitionDirection) }, renderContent()));
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace scene
/// <reference path="./useSnack.ts"/>
/// <reference path="./SnackProvider.tsx"/>
/// <reference path="./SnackViewer.tsx"/>
var other;
(function (other) {
    var useContext = React.useContext, createContext = React.createContext;
    var components;
    (function (components) {
        components.DispatchContext = createContext(null);
        components.useDispatch = function () {
            var ctx = useContext(components.DispatchContext);
            if (ctx) {
                return ctx();
            }
            else {
                return [null];
            }
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var useReducer = React.useReducer;
    var components;
    (function (components) {
        components.DispatchProvider = function (_a) {
            var _b = _a.reducer, reducer = _b === void 0 ? function () { return null; } : _b, _c = _a.initialState, initialState = _c === void 0 ? {} : _c, _d = _a.children, children = _d === void 0 ? null : _d;
            var _e = useReducer(reducer, initialState), state = _e[0], dispatch = _e[1];
            var useDispatch = function () { return [state, function (args) { return dispatch(args); }]; };
            return (React.createElement(components.DispatchContext.Provider, { value: useDispatch }, children));
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var h = React.createElement;
    var components;
    (function (components) {
        components.connectState = function (component, mapStateToProps, mapDispatchToProps) {
            if (mapStateToProps === void 0) { mapStateToProps = function (state) { return state; }; }
            if (mapDispatchToProps === void 0) { mapDispatchToProps = function (_a) { return ({}); }; }
            return function (props) {
                var _a = components.useDispatch(), state = _a[0], dispatch = _a[1];
                if (state) {
                    return h(component, __assign(__assign(__assign({}, mapStateToProps(state)), mapDispatchToProps(dispatch)), props));
                }
                else {
                    return null;
                }
            };
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace other
/// <reference path="./useDispatch.ts"/>
/// <reference path="./DispatchProvider.tsx"/>
/// <reference path="./connectState.ts"/>
var other;
(function (other) {
    var useContext = React.useContext, createContext = React.createContext;
    var components;
    (function (components) {
        components.FetchContext = createContext(null);
        components.useFetch = function () { return useContext(components.FetchContext)(); };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var useState = React.useState, useLayoutEffect = React.useLayoutEffect;
    var components;
    (function (components) {
        var _this = this;
        var resolve = function (handler, state) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof handler === 'function')) return [3 /*break*/, 4];
                        result = handler(state);
                        if (!(result instanceof Promise)) return [3 /*break*/, 2];
                        return [4 /*yield*/, result];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, result];
                    case 3: return [3 /*break*/, 5];
                    case 4: return [2 /*return*/, handler];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        var combine = function (url, searchParams) {
            var protocol = location.protocol;
            var prefix = url.includes('://') ? '' : protocol + '//';
            var newUrl = new URL(prefix + url);
            var params = new URLSearchParams(searchParams);
            params.forEach(function (v, k) { return newUrl.searchParams.set(k, v); });
            return newUrl.toString();
        };
        components.FetchProvider = function (_a) {
            var _b = _a.searchParams, searchParams = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.headers, headers = _d === void 0 ? {} : _d;
            var state = components.useDispatch()[0];
            var _e = useState(null), resolvedHeaders = _e[0], setResolvedHeaders = _e[1];
            var _f = useState(null), resolvedSearchParams = _f[0], setResolvedSearchParams = _f[1];
            useLayoutEffect(function () {
                var process = function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = setResolvedHeaders;
                                return [4 /*yield*/, resolve(headers, state)];
                            case 1:
                                _a.apply(void 0, [_c.sent()]);
                                _b = setResolvedSearchParams;
                                return [4 /*yield*/, resolve(searchParams, state)];
                            case 2:
                                _b.apply(void 0, [_c.sent()]);
                                return [2 /*return*/];
                        }
                    });
                }); };
                setResolvedHeaders(null);
                setResolvedSearchParams(null);
                process();
            }, [state]);
            var f = function (url, _a) {
                if (_a === void 0) { _a = { headers: {} }; }
                var headers = _a.headers, otherProps = __rest(_a, ["headers"]);
                var options = __assign(__assign({}, otherProps), { headers: __assign(__assign({}, headers), resolvedHeaders) });
                return window.fetch(combine(url, resolvedSearchParams), options);
            };
            if (resolvedHeaders !== null && resolvedSearchParams !== null) {
                return (React.createElement(components.FetchContext.Provider, { value: function () { return f; } }, children));
            }
            else {
                return null;
            }
        };
    })(components = other.components || (other.components = {})); // namespace components
})(other || (other = {})); // namespace other
/// <reference path="./useFetch.ts"/>
/// <reference path="./FetchProvider.tsx"/>
/// <reference path="./snack/index.ts"/>
/// <reference path="./state/index.ts"/>
/// <reference path="./fetch/index.ts"/>
/// <reference path="./common/index.ts"/>
/// <reference path="./components/index.ts"/>
var other;
/// <reference path="./common/index.ts"/>
/// <reference path="./components/index.ts"/>
(function (other) {
    var SnackProviderDefault = other.components.SnackProvider, useSnackDefault = other.components.useSnack;
    var DispatchProviderDefault = other.components.DispatchProvider, connectStateDefault = other.components.connectState, useDispatchDefault = other.components.useDispatch;
    var FetchProviderDefault = other.components.FetchProvider, useFetchDefault = other.components.useFetch;
    var snack;
    (function (snack) {
        snack.SnackProvider = SnackProviderDefault;
        snack.useSnack = useSnackDefault;
    })(snack = other.snack || (other.snack = {})); // namespace snack
    var state;
    (function (state) {
        state.DispatchProvider = DispatchProviderDefault;
        state.useDispatch = useDispatchDefault;
        state.connect = connectStateDefault;
    })(state = other.state || (other.state = {})); // namespace state
    var fetch;
    (function (fetch) {
        fetch.FetchProvider = FetchProviderDefault;
        fetch.useFetch = useFetchDefault;
    })(fetch = other.fetch || (other.fetch = {})); // namespace fetch
})(other || (other = {})); // namespace other
var other;
(function (other) {
    var fetch;
    (function (fetch) {
    })(fetch = other.fetch || (other.fetch = {})); // namespace fetch
})(other || (other = {})); // namespace other
/// <reference path="./ResponseType.ts"/>
/// <reference path="./IBody.ts"/>
/// <reference path="./IHeaders.ts"/>
/// <reference path="./IFetchOptions.ts"/>
/// <reference path="./IResponse.ts"/>
//# sourceMappingURL=other-tools.js.map
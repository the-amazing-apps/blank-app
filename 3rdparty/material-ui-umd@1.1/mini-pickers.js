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
var pickers;
(function (pickers) {
    var utils;
    (function (utils) {
        utils.pickerStyles = function (theme) { return ({
            container: {
                width: 300,
                height: 420
            },
            toolbar: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary,
                height: 100
            }
        }); };
    })(utils = pickers.utils || (pickers.utils = {})); // namespace utils
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var utils;
    (function (utils) {
        var constants;
        (function (constants) {
            constants.HOURS = 'hours';
            constants.MINUTES = 'minutes';
        })(constants = utils.constants || (utils.constants = {})); // namespace constants
    })(utils = pickers.utils || (pickers.utils = {})); // namespace utils
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var utils;
    (function (utils) {
        var center = {
            x: 260 / 2,
            y: 260 / 2
        };
        var basePoint = {
            x: center.x,
            y: 0
        };
        var cx = basePoint.x - center.x;
        var cy = basePoint.y - center.y;
        var rad2deg = function (rad) { return rad * 57.29577951308232; };
        var getAngleValue = function (step, offsetX, offsetY) {
            var x = offsetX - center.x;
            var y = offsetY - center.y;
            var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
            var deg = rad2deg(atan);
            deg = Math.round(deg / step) * step;
            deg %= 360;
            var value = Math.floor(deg / step) || 0;
            return value;
        };
        utils.getHours = function (offsetX, offsetY) {
            var value = getAngleValue(30, offsetX, offsetY) || 12;
            return value % 12;
        };
        utils.getMinutes = function (offsetX, offsetY, step) {
            if (step === void 0) { step = 6; }
            var value = getAngleValue(step, offsetX, offsetY);
            return value;
        };
    })(utils = pickers.utils || (pickers.utils = {})); // namespace utils
})(pickers || (pickers = {})); // namespace pickers
/// <reference path="./pickerStyles.ts"/>
/// <reference path="./constants.ts"/>
/// <reference path="./time-utils.ts"/>
var pickers;
(function (pickers) {
    var _a = material.core, Dialog = _a.Dialog, Button = _a.Button, DialogContent = _a.DialogContent, DialogActions = _a.DialogActions;
    var makeStyles = material.core.makeStyles;
    var components;
    (function (components) {
        var useStyles = makeStyles({
            dialog: {
                '&:first-child': {
                    padding: 0
                }
            }
        });
        components.ModalDialog = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.onAccept, onAccept = _c === void 0 ? function () { return console.log('accept'); } : _c, _d = _a.onDismiss, onDismiss = _d === void 0 ? function () { return console.log('dismiss'); } : _d, other = __rest(_a, ["children", "onAccept", "onDismiss"]);
            var classes = useStyles();
            return (React.createElement(Dialog, __assign({}, other),
                React.createElement(DialogContent, { className: classes.dialog }, children),
                React.createElement(DialogActions, null,
                    React.createElement(Button, { color: "primary", onClick: onAccept }, " OK "),
                    React.createElement(Button, { color: "primary", onClick: onDismiss }, " Cancel "))));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var TextField = material.core.TextField;
    var components;
    (function (components) {
        components.DateTextField = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.format, format = _c === void 0 ? '' : _c, _d = _a.value, value = _d === void 0 ? '' : _d, other = __rest(_a, ["onChange", "format", "value"]);
            var getDisplayDate = function () { return moment(value).format(format); };
            var handleChange = function (_a) {
                var target = _a.target;
                var value = target.value;
                var momentValue = moment(value);
                if (momentValue.isValid()) {
                    onChange(momentValue);
                }
            };
            return (React.createElement(TextField, __assign({ value: getDisplayDate(), onChange: handleChange }, other)));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var Typography = material.core.Typography;
    var makeStyles = material.core.makeStyles;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            toolbarBtn: {
                cursor: 'pointer',
                color: theme.palette.text.secondary
            },
            toolbarBtnSelected: {
                color: theme.palette.text.primary
            }
        }); });
        components.ToolbarButton = function (_a) {
            var _b;
            var _c = _a.selected, selected = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.label, label = _e === void 0 ? '' : _e, other = __rest(_a, ["selected", "className", "label"]);
            var classes = useStyles();
            return (React.createElement(Typography, __assign({ className: classNames(classes.toolbarBtn, className, (_b = {},
                    _b[classes.toolbarBtnSelected] = selected,
                    _b)) }, other), label));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var components;
    (function (components) {
        var positions = [
            [0, 5],
            [55, 19.6],
            [94.4, 59.5],
            [109, 114],
            [94.4, 168.5],
            [54.5, 208.4],
            [0, 223],
            [-54.5, 208.4],
            [-94.4, 168.5],
            [-109, 114],
            [-94.4, 59.5],
            [-54.5, 19.6],
        ];
        var useStyles = makeStyles(function (theme) { return ({
            clockNumber: {
                width: 32,
                height: 32,
                position: 'absolute',
                left: 'calc(50% - 16px)',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                color: theme.palette.type === 'light'
                    ? theme.palette.text.primary
                    : theme.palette.text.hint
            },
            selected: {
                color: theme.palette.getContrastText(theme.palette.text.primary)
            }
        }); });
        components.ClockNumber = function (_a) {
            var _b;
            var _c = _a.selected, selected = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? '' : _d, _e = _a.index, index = _e === void 0 ? 0 : _e;
            var classes = useStyles();
            var className = classNames(classes.clockNumber, (_b = {},
                _b[classes.selected] = selected,
                _b));
            var getTransformStyle = function (index) {
                var position = positions[index];
                return {
                    transform: "translate(" + position[0] + "px, " + position[1] + "px"
                };
            };
            return (React.createElement("div", { className: className, style: getTransformStyle(index) }, label));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var useCallback = React.useCallback;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            pointer: {
                width: 2,
                backgroundColor: theme.palette.primary.main,
                height: '40%',
                position: 'absolute',
                left: 'calc(50% - 1px)',
                bottom: '50%',
                transformOrigin: 'center bottom 0px'
            },
            thumb: {
                width: 4,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: '100%',
                position: 'absolute',
                top: -21,
                left: -15,
                border: "14px solid " + theme.palette.primary.main,
                boxSizing: 'content-box'
            },
            noPoint: {
                backgroundColor: theme.palette.primary.main
            }
        }); });
        components.ClockPointer = function (_a) {
            var _b;
            var _c = _a.hasSelected, hasSelected = _c === void 0 ? false : _c, _d = _a.value, value = _d === void 0 ? 0 : _d, _e = _a.max, max = _e === void 0 ? 0 : _e;
            var classes = useStyles();
            var getAngleStyle = useCallback(function () {
                var angle = (360 / max) * value;
                return {
                    transform: "rotateZ(" + angle + "deg)"
                };
            }, [value, max]);
            return (React.createElement("div", { className: classes.pointer, style: getAngleStyle() },
                React.createElement("div", { className: classNames(classes.thumb, (_b = {}, _b[classes.noPoint] = hasSelected, _b)) })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var clockType = pickers.utils.constants;
    var getMinutes = pickers.utils.getMinutes, getHours = pickers.utils.getHours;
    var components;
    (function (components) {
        var useStyles = makeStyles({
            container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: 40
            },
            clock: {
                backgroundColor: 'rgba(0,0,0,.07)',
                borderRadius: '50%',
                height: 260,
                width: 260,
                position: 'relative',
                pointerEvents: 'none'
            },
            squareMask: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                pointerEvents: 'auto'
            }
        });
        components.Clock = function (_a) {
            var _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? 0 : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.onChange, onChange = _e === void 0 ? function (value, finish) { return console.log({ value: value, finish: finish }); } : _e;
            var classes = useStyles();
            var setTime = function (e, finish) {
                if (typeof e.offsetX === 'undefined') {
                    console.warn('Touch events not supporting');
                }
                var value = type === clockType.MINUTES
                    ? getMinutes(e.offsetX, e.offsetY)
                    : getHours(e.offsetX, e.offsetY);
                onChange(value, finish);
            };
            var handleUp = function (event) {
                event.preventDefault();
                setTime(event.nativeEvent, true);
            };
            var handleMove = function (e) {
                e.preventDefault();
                if (e.buttons !== 1) {
                    return;
                }
                setTime(e.nativeEvent, false);
            };
            var hasSelected = function () {
                if (type === clockType.HOURS) {
                    return true;
                }
                return value % 5 === 0;
            };
            return (React.createElement("div", { className: classes.container },
                React.createElement("div", { className: classes.clock },
                    React.createElement("div", { className: classes.squareMask, onMouseUp: handleUp, onMouseMove: handleMove }),
                    React.createElement(components.ClockPointer, { max: type === clockType.HOURS ? 12 : 60, hasSelected: hasSelected(), value: value }),
                    children)));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var HOURS = pickers.utils.constants.HOURS;
    var components;
    (function (components) {
        components.HourView = function (_a) {
            var _b = _a.date, date = _b === void 0 ? moment() : _b, _c = _a.onChange, onChange = _c === void 0 ? function (change) { return console.log({ change: change }); } : _c;
            var handleChange = function (hours) {
                var updatedDate = date.clone().hour(hours);
                onChange(updatedDate);
            };
            var value = date.get('hours');
            var ampmValue = Number(date.format('hh'));
            return (React.createElement(components.Clock, { type: HOURS, onChange: handleChange, value: value },
                React.createElement(components.ClockNumber, { label: "12", selected: ampmValue === 12, index: 0 }),
                React.createElement(components.ClockNumber, { label: "1", selected: ampmValue === 1, index: 1 }),
                React.createElement(components.ClockNumber, { label: "2", selected: ampmValue === 2, index: 2 }),
                React.createElement(components.ClockNumber, { label: "3", selected: ampmValue === 3, index: 3 }),
                React.createElement(components.ClockNumber, { label: "4", selected: ampmValue === 4, index: 4 }),
                React.createElement(components.ClockNumber, { label: "5", selected: ampmValue === 5, index: 5 }),
                React.createElement(components.ClockNumber, { label: "6", selected: ampmValue === 6, index: 6 }),
                React.createElement(components.ClockNumber, { label: "7", selected: ampmValue === 7, index: 7 }),
                React.createElement(components.ClockNumber, { label: "8", selected: ampmValue === 8, index: 8 }),
                React.createElement(components.ClockNumber, { label: "9", selected: ampmValue === 9, index: 9 }),
                React.createElement(components.ClockNumber, { label: "10", selected: ampmValue === 10, index: 10 }),
                React.createElement(components.ClockNumber, { label: "11", selected: ampmValue === 11, index: 11 })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var MINUTES = pickers.utils.constants.MINUTES;
    var components;
    (function (components) {
        components.MinutesView = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.date, date = _c === void 0 ? moment() : _c;
            var value = date.get('minutes');
            var handleChange = function (minutes) {
                var updatedDate = date.clone().minutes(minutes);
                onChange(updatedDate);
            };
            return (React.createElement(components.Clock, { type: MINUTES, onChange: handleChange, value: value },
                React.createElement(components.ClockNumber, { label: "00", selected: value === 0, index: 0 }),
                React.createElement(components.ClockNumber, { label: "05", selected: value === 5, index: 1 }),
                React.createElement(components.ClockNumber, { label: "10", selected: value === 10, index: 2 }),
                React.createElement(components.ClockNumber, { label: "15", selected: value === 15, index: 3 }),
                React.createElement(components.ClockNumber, { label: "20", selected: value === 20, index: 4 }),
                React.createElement(components.ClockNumber, { label: "25", selected: value === 25, index: 5 }),
                React.createElement(components.ClockNumber, { label: "30", selected: value === 30, index: 6 }),
                React.createElement(components.ClockNumber, { label: "35", selected: value === 35, index: 7 }),
                React.createElement(components.ClockNumber, { label: "40", selected: value === 40, index: 8 }),
                React.createElement(components.ClockNumber, { label: "45", selected: value === 45, index: 9 }),
                React.createElement(components.ClockNumber, { label: "50", selected: value === 50, index: 10 }),
                React.createElement(components.ClockNumber, { label: "55", selected: value === 55, index: 11 })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var Toolbar = material.core.Toolbar;
    var makeStyles = material.core.makeStyles;
    var pickerStyles = pickers.utils.pickerStyles;
    var useState = React.useState, useEffect = React.useEffect, useCallback = React.useCallback;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) {
            var globalStyles = pickerStyles(theme);
            return __assign(__assign({}, globalStyles), { toolbar: __assign(__assign({}, globalStyles.toolbar), { flexDirection: 'row', alignItems: 'center', paddingLeft: 50 }), separator: {
                    margin: '0 2px 0 4px',
                    cursor: 'default'
                }, ampmSelection: {
                    marginLeft: 20,
                    marginRight: -20
                }, ampmLabel: {
                    fontSize: 18
                } });
        });
        components.TimePicker = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.date, date = _c === void 0 ? moment() : _c;
            var classes = useStyles();
            var _d = useState({
                meridiemMode: date.format('a'),
                isHourViewShown: true
            }), state = _d[0], setState = _d[1];
            var handleChange = useCallback(function (time) {
                if (time.format('a') !== state.meridiemMode) {
                    var hours = state.meridiemMode === 'am'
                        ? time.hours() - 12
                        : time.hours() + 12;
                    time = time.clone().hours(hours);
                }
                onChange(time);
            }, [state]);
            var setMeridiemMode = function (mode) { return function () { return setState(function (p) { return (__assign(__assign({}, p), { meridiemMode: mode })); }); }; };
            useEffect(function () { return handleChange(date); }, [date, state.meridiemMode]);
            var openMinutesView = function () { return setState(function (p) { return (__assign(__assign({}, p), { isHourViewShown: false })); }); };
            var openHourView = function () { return setState(function (p) { return (__assign(__assign({}, p), { isHourViewShown: true })); }); };
            return (React.createElement("div", { className: classes.container },
                React.createElement(Toolbar, { className: classes.toolbar },
                    React.createElement(components.ToolbarButton, { type: "display3", onClick: openHourView, selected: state.isHourViewShown, label: date.format('hh') }),
                    React.createElement(components.ToolbarButton, { type: "display3", label: ":", selected: false, className: classes.separator }),
                    React.createElement(components.ToolbarButton, { type: "display3", onClick: openMinutesView, selected: !state.isHourViewShown, label: date.format('mm') }),
                    React.createElement("div", { className: classes.ampmSelection },
                        React.createElement(components.ToolbarButton, { className: classes.ampmLabel, selected: state.meridiemMode === 'am', type: "subheading", label: "AM", onClick: setMeridiemMode('am') }),
                        React.createElement(components.ToolbarButton, { className: classes.ampmLabel, selected: state.meridiemMode === 'pm', type: "subheading", label: "PM", onClick: setMeridiemMode('pm') }))),
                state.isHourViewShown
                    ?
                        React.createElement(components.HourView, { date: date, onChange: handleChange })
                    :
                        React.createElement(components.MinutesView, { date: date, onChange: handleChange })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var useState = React.useState, useCallback = React.useCallback;
    var components;
    (function (components) {
        components.TimePickerModal = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.now, now = _c === void 0 ? moment() : _c;
            var _d = useState(now), time = _d[0], setTime = _d[1];
            var handleChange = function (time) { return setTime(time); };
            var handleAccept = useCallback(function () { return onChange(time); }, [time]);
            var handleDismiss = function () { return onChange(null); };
            return (React.createElement(components.ModalDialog, { open: true, onAccept: handleAccept, onDismiss: handleDismiss },
                React.createElement(components.TimePicker, { date: time, onChange: handleChange })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
/// <reference path="./ClockNumber.tsx"/>
/// <reference path="./ClockPointer.tsx"/>
/// <reference path="./Clock.tsx"/>
/// <reference path="./HourView.tsx"/>
/// <reference path="./MinutesView.tsx"/>
/// <reference path="./TimePicker.tsx"/>
/// <reference path="./TimePickerModal.tsx"/>
var pickers;
(function (pickers) {
    var createContext = React.createContext, useCallback = React.useCallback, useContext = React.useContext, useState = React.useState;
    var components;
    (function (components) {
        var TimeContext = createContext(null);
        components.TimeProvider = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var _c = useState(null), props = _c[0], setProps = _c[1];
            var useTime = function (now) {
                if (now === void 0) { now = moment(); }
                return function () { return new Promise(function (onChange) { return setProps({ now: now, onChange: onChange }); }); };
            };
            var onChange = useCallback(function (time) {
                props.onChange(time);
                setProps(null);
            }, [props]);
            return (React.createElement(TimeContext.Provider, { value: useTime },
                props && React.createElement(components.TimePickerModal, { now: props.now, onChange: onChange }),
                children));
        };
        components.useTime = function () { return useContext(TimeContext)(); };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var IconButton = material.core.IconButton;
    var _a = material.icons, KeyboardArrowLeft = _a.KeyboardArrowLeft, KeyboardArrowRight = _a.KeyboardArrowRight;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            switchHeader: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '10px 0 20px'
            },
            daysHeader: {
                display: 'flex',
                justifyContent: 'stretch',
                alignItems: 'stretch'
            },
            dayLabel: {
                flex: 1,
                margin: '0 12px 0 12px',
                fontSize: 13,
                textAlign: 'center',
                color: theme.palette.text.secondary
            },
            dayLabelStart: {
                textAlign: 'start'
            },
            dayLabelEnd: {
                textAlign: 'end'
            },
            monthName: {
                color: theme.palette.text.primary
            }
        }); });
        components.CalendarHeader = function (_a) {
            var _b = _a.currentMonth, currentMonth = _b === void 0 ? moment() : _b, _c = _a.onMonthChange, onMonthChange = _c === void 0 ? function (month) { return console.log({ month: month }); } : _c;
            var classes = useStyles();
            var selectNextMonth = function () { return onMonthChange(currentMonth.clone().add(1, 'months')); };
            var selectPreviousMonth = function () { return onMonthChange(currentMonth.clone().subtract(1, 'months')); };
            return (React.createElement("div", null,
                React.createElement("div", { className: classes.switchHeader },
                    React.createElement(IconButton, { onClick: selectPreviousMonth },
                        React.createElement(KeyboardArrowLeft, null)),
                    React.createElement("div", { className: classes.monthName }, currentMonth.format('MMMM YYYY')),
                    React.createElement(IconButton, { onClick: selectNextMonth },
                        React.createElement(KeyboardArrowRight, null))),
                React.createElement("div", { className: classes.daysHeader }, moment.weekdaysMin().map(function (day, index) {
                    var _a;
                    return (React.createElement("div", { key: day, className: classNames(classes.dayLabel, (_a = {},
                            _a[classes.dayLabelStart] = index === 0,
                            _a[classes.dayLabelEnd] = index === 6,
                            _a)) },
                        " ",
                        day,
                        " "));
                }))));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var useRef = React.useRef, useCallback = React.useCallback, useLayoutEffect = React.useLayoutEffect;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            container: {
                maxHeight: 320,
                overflowY: 'auto',
                justifyContent: 'center'
            },
            yearItem: {
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                outline: 'none',
                color: theme.palette.text.primary
            },
            selectedYear: {
                fontSize: 26,
                margin: '10px 0',
                color: theme.palette.primary[500]
            },
            disabled: {
                pointerEvents: 'none',
                color: theme.palette.text.hint
            }
        }); });
        var getYears = function (minDate, maxDate) {
            var total = maxDate.diff(minDate, 'years') + 1;
            var years = [];
            for (var i = 0; i !== total; i++) {
                years.push(minDate.clone().add(i, 'years'));
            }
            return years;
        };
        components.YearSelection = function (_a) {
            var _b = _a.date, date = _b === void 0 ? moment() : _b, _c = _a.minDate, minDate = _c === void 0 ? moment() : _c, _d = _a.maxDate, maxDate = _d === void 0 ? moment() : _d, _e = _a.onChange, onChange = _e === void 0 ? function (change) { return console.log({ change: change }); } : _e, _f = _a.disableFuture, disableFuture = _f === void 0 ? false : _f, _g = _a.animateYearScrolling, animateYearScrolling = _g === void 0 ? true : _g;
            var classes = useStyles();
            var rootRef = useRef(null);
            var currentYear = date.get('year');
            useLayoutEffect(function () {
                var root = rootRef.current;
                var currentYearElement = root.getElementsByClassName(classes.selectedYear)[0];
                if (currentYearElement) {
                    currentYearElement.scrollIntoView({
                        behavior: animateYearScrolling ? 'smooth' : 'auto'
                    });
                }
            }, [animateYearScrolling]);
            var onYearSelect = useCallback(function (year) {
                var newDate = date.clone().set('year', year);
                onChange(newDate);
            }, [date, onChange]);
            return (React.createElement("div", { ref: rootRef, className: classes.container }, getYears(minDate, maxDate)
                .map(function (year) {
                var _a;
                var yearNumber = year.get('year');
                var className = classNames(classes.yearItem, (_a = {},
                    _a[classes.selectedYear] = yearNumber === currentYear,
                    _a[classes.disabled] = disableFuture && year.isAfter(moment()),
                    _a));
                return (React.createElement("div", { role: "button", key: year.format('YYYY'), className: className, tabIndex: yearNumber, onClick: function () { return onYearSelect(yearNumber); }, onKeyPress: function () { return onYearSelect(yearNumber); } }, yearNumber));
            })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var makeStyles = material.core.makeStyles;
    var useState = React.useState, useCallback = React.useCallback;
    var Fragment = React.Fragment;
    var IconButton = material.core.IconButton;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            calendar: {
                marginTop: 10,
                display: 'grid',
                gridTemplateColumns: '1fr repeat(5, 2fr) 1fr'
            },
            hidden: {
                opacity: 0,
                pointerEvents: 'none'
            },
            day: {
                width: 36,
                height: 36,
                fontSize: 14,
                margin: '0 2px',
                color: theme.palette.text.primary
            },
            selected: {
                color: theme.palette.primary[700],
                backgroundColor: theme.palette.primary[200]
            },
            disabled: {
                pointerEvents: 'none',
                color: theme.palette.text.hint
            },
            active: {
                color: theme.palette.primary.main
            },
            cell: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& :nth-child(7n)': {
                    justifyContent: 'flex-end'
                },
                '& :nth-child(7n + 1)': {
                    justifyContent: 'flex-start'
                }
            }
        }); });
        var getDays = function (minDate, maxDate) {
            var total = maxDate.diff(minDate, 'days') + 1;
            var days = [];
            for (var i = 0; i !== total; i++) {
                days.push(minDate.clone().add(i, 'days'));
            }
            return days;
        };
        var getWeeks = function (minDate, maxDate) {
            var total = maxDate.diff(minDate, 'weeks') + 1;
            var weeks = [];
            for (var i = 0; i !== total; i++) {
                weeks.push(minDate.clone().add(i, 'weeks'));
            }
            return weeks;
        };
        components.Calendar = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.disableFuture, disableFuture = _c === void 0 ? false : _c, _d = _a.date, date = _d === void 0 ? moment() : _d;
            var classes = useStyles();
            var _e = useState(date.clone().startOf('month')), currentMonth = _e[0], setCurrentMonth = _e[1];
            var renderDays = useCallback(function (week) {
                var end = week.clone().endOf('week');
                var currentMonthNumber = currentMonth.get('month');
                return getDays(week, end)
                    .map(function (day) {
                    var _a;
                    var dayClass = classNames(classes.day, classes.cell, (_a = {},
                        _a[classes.hidden] = day.get('month') !== currentMonthNumber,
                        _a[classes.selected] = day.toString() === date.toString(),
                        _a[classes.disabled] = disableFuture && day.isAfter(moment()),
                        _a[classes.active] = moment().isSame(day, 'date'),
                        _a));
                    return (React.createElement(IconButton, { key: day.toString(), className: dayClass, onClick: function () { return onDateSelect(day); } },
                        React.createElement("span", null,
                            " ",
                            day.format('DD'),
                            " ")));
                });
            }, [disableFuture, classes, date, currentMonth]);
            var renderWeeks = useCallback(function () {
                var start = currentMonth.clone().startOf('week');
                var end = currentMonth.clone().endOf('month').endOf('week');
                return getWeeks(start, end)
                    .map(function (week) { return (React.createElement(Fragment, { key: "week-" + week.toString() }, renderDays(week))); });
            }, [currentMonth]);
            var onDateSelect = function (day) { return onChange(day); };
            var handleChangeMonth = function (newMonth) { return setCurrentMonth(newMonth); };
            return (React.createElement("div", { className: classes.container },
                React.createElement(components.CalendarHeader, { currentMonth: currentMonth, onMonthChange: handleChangeMonth }),
                React.createElement("div", { className: classes.calendar }, renderWeeks())));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var useState = React.useState;
    var makeStyles = material.core.makeStyles;
    var pickerStyles = pickers.utils.pickerStyles;
    var Toolbar = material.core.Toolbar;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return (__assign({}, pickerStyles(theme))); });
        components.DatePicker = function (_a) {
            var _b = _a.date, date = _b === void 0 ? moment() : _b, _c = _a.minDate, minDate = _c === void 0 ? '1900-01-01' : _c, _d = _a.maxDate, maxDate = _d === void 0 ? '2100-01-01' : _d, _e = _a.onChange, onChange = _e === void 0 ? function (change) { return console.log({ change: change }); } : _e, _f = _a.disableFuture, disableFuture = _f === void 0 ? false : _f, _g = _a.animateYearScrolling, animateYearScrolling = _g === void 0 ? true : _g, _h = _a.openToYearSelection, openToYearSelection = _h === void 0 ? false : _h;
            var _j = useState(openToYearSelection), showYearSelection = _j[0], setShowYearSelection = _j[1];
            var classes = useStyles();
            var openYearSelection = function () { return setShowYearSelection(true); };
            var openCalendar = function () { return setShowYearSelection(false); };
            var startOfDay = date.startOf('day');
            return (React.createElement("div", { className: classes.container },
                React.createElement(Toolbar, { className: classes.toolbar },
                    React.createElement(components.ToolbarButton, { type: "subheading", onClick: openYearSelection, selected: showYearSelection, label: date.format('YYYY') }),
                    React.createElement(components.ToolbarButton, { type: "display1", onClick: openCalendar, selected: !showYearSelection, label: date.format('ddd, MMM DD') })),
                showYearSelection
                    ?
                        React.createElement(components.YearSelection, { date: startOfDay, onChange: onChange, minDate: moment(minDate), maxDate: moment(maxDate), disableFuture: disableFuture, animateYearScrolling: animateYearScrolling })
                    :
                        React.createElement(components.Calendar, { date: startOfDay, onChange: onChange, disableFuture: disableFuture })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
var pickers;
(function (pickers) {
    var useState = React.useState;
    var components;
    (function (components) {
        components.DatePickerModal = function (_a) {
            var _b = _a.onChange, onChange = _b === void 0 ? function (change) { return console.log({ change: change }); } : _b, _c = _a.animateYearScrolling, animateYearScrolling = _c === void 0 ? false : _c, _d = _a.openToYearSelection, openToYearSelection = _d === void 0 ? false : _d, _e = _a.disableFuture, disableFuture = _e === void 0 ? false : _e, _f = _a.now, now = _f === void 0 ? moment() : _f;
            var _g = useState(moment(now)), date = _g[0], setDate = _g[1];
            var handleChange = function (date) { return setDate(date); };
            var handleAccept = function () { return onChange(date); };
            var handleDismiss = function () { return onChange(null); };
            return (React.createElement(components.ModalDialog, { open: true, onAccept: handleAccept, onDismiss: handleDismiss },
                React.createElement(components.DatePicker, { date: date, onChange: handleChange, disableFuture: disableFuture, animateYearScrolling: animateYearScrolling, openToYearSelection: openToYearSelection })));
        };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
/// <reference path="./CalendarHeader.tsx"/>
/// <reference path="./YearSelection.tsx"/>
/// <reference path="./Calendar.tsx"/>
/// <reference path="./DatePicker.tsx"/>
/// <reference path="./DatePickerModal.tsx"/>
var pickers;
(function (pickers) {
    var createContext = React.createContext, useCallback = React.useCallback, useContext = React.useContext, useState = React.useState;
    var components;
    (function (components) {
        var DateContext = createContext(null);
        components.DateProvider = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var _c = useState(null), props = _c[0], setProps = _c[1];
            var useDate = function (now) {
                if (now === void 0) { now = moment(); }
                return function () { return new Promise(function (onChange) { return setProps({ now: now, onChange: onChange }); }); };
            };
            var onChange = useCallback(function (time) {
                props.onChange(time);
                setProps(null);
            }, [props]);
            return (React.createElement(DateContext.Provider, { value: useDate },
                props && React.createElement(components.DatePickerModal, { now: props.now, onChange: onChange }),
                children));
        };
        components.useDate = function () { return useContext(DateContext)(); };
    })(components = pickers.components || (pickers.components = {})); // namespace components
})(pickers || (pickers = {})); // namespace pickers
/// <reference path="./shared/ModalDialog.tsx"/>
/// <reference path="./shared/DateTextField.tsx"/>
/// <reference path="./shared/ToolbarButton.tsx"/>
/// <reference path="./TimePicker/index.ts"/>
/// <reference path="./TimeProvider.tsx"/>
/// <reference path="./DatePicker/index.ts"/>
/// <reference path="./DateProvider.tsx"/>
/// <reference path="./utils/index.ts"/>
/// <reference path="./components/index.ts"/>
var pickers;
/// <reference path="./utils/index.ts"/>
/// <reference path="./components/index.ts"/>
(function (pickers) {
    var TimeProviderDefault = pickers.components.TimeProvider, useTimeDefault = pickers.components.useTime, DateProviderDefault = pickers.components.DateProvider, useDateDefault = pickers.components.useDate;
    pickers.TimeProvider = TimeProviderDefault;
    pickers.useTime = useTimeDefault;
    pickers.DateProvider = DateProviderDefault;
    pickers.useDate = useDateDefault;
})(pickers || (pickers = {})); // namespace pickers
//# sourceMappingURL=mini-pickers.js.map
declare namespace pickers {
    namespace utils {
        const pickerStyles: (theme: any) => {
            container: {
                width: number;
                height: number;
            };
            toolbar: {
                display: string;
                flexDirection: string;
                alignItems: string;
                justifyContent: string;
                backgroundColor: any;
                height: number;
            };
        };
    }
}
declare namespace pickers {
    namespace utils {
        namespace constants {
            const HOURS = "hours";
            const MINUTES = "minutes";
        }
    }
}
declare namespace pickers {
    namespace utils {
        const getHours: (offsetX: any, offsetY: any) => number;
        const getMinutes: (offsetX: any, offsetY: any, step?: number) => number;
    }
}
declare namespace pickers {
    namespace components {
        const ModalDialog: ({ children, onAccept, onDismiss, ...other }: {
            [x: string]: any;
            children?: any;
            onAccept?: () => void;
            onDismiss?: () => void;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const DateTextField: ({ onChange, format, value, ...other }: {
            [x: string]: any;
            onChange?: (change: any) => void;
            format?: string;
            value?: string;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const ToolbarButton: ({ selected, className, label, ...other }: {
            [x: string]: any;
            selected?: boolean;
            className?: string;
            label?: string;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const ClockNumber: ({ selected, label, index, }: {
            selected?: boolean;
            label?: string;
            index?: number;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const ClockPointer: ({ hasSelected, value, max, }: {
            hasSelected?: boolean;
            value?: number;
            max?: number;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const Clock: ({ type, value, children, onChange, }: {
            type?: string;
            value?: number;
            children?: any;
            onChange?: (value: any) => void;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const HourView: ({ date, onChange, }: {
            date?: moment.Moment;
            onChange?: (change: any) => void;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const MinutesView: ({ onChange, date, }: {
            onChange?: (change: any) => void;
            date?: moment.Moment;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const TimePicker: ({ onChange, date, }: {
            onChange?: (change: any) => void;
            date?: moment.Moment;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const TimePickerModal: ({ onChange, now, }: {
            onChange?: (change: any) => void;
            now?: moment.Moment;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const TimeProvider: ({ children, }: {
            children?: any;
        }) => JSX.Element;
        const useTime: () => any;
    }
}
declare namespace pickers {
    namespace components {
        const CalendarHeader: ({ currentMonth, onMonthChange, }: {
            currentMonth?: moment.Moment;
            onMonthChange?: (month: any) => void;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const YearSelection: ({ date, minDate, maxDate, onChange, disableFuture, animateYearScrolling, }: {
            date?: moment.Moment;
            minDate?: moment.Moment;
            maxDate?: moment.Moment;
            onChange?: (change: any) => void;
            disableFuture?: boolean;
            animateYearScrolling?: boolean;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const Calendar: ({ onChange, disableFuture, date, }: {
            onChange?: (change: any) => void;
            disableFuture?: boolean;
            date?: moment.Moment;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const DatePicker: ({ date, minDate, maxDate, onChange, disableFuture, animateYearScrolling, openToYearSelection, }: {
            date?: moment.Moment;
            minDate?: string;
            maxDate?: string;
            onChange?: (change: any) => void;
            disableFuture?: boolean;
            animateYearScrolling?: boolean;
            openToYearSelection?: boolean;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const DatePickerModal: ({ onChange, animateYearScrolling, openToYearSelection, disableFuture, now, }: {
            onChange?: (change: any) => void;
            animateYearScrolling?: boolean;
            openToYearSelection?: boolean;
            disableFuture?: boolean;
            now?: moment.Moment;
        }) => JSX.Element;
    }
}
declare namespace pickers {
    namespace components {
        const DateProvider: ({ children, }: {
            children?: any;
        }) => JSX.Element;
        const useDate: () => any;
    }
}
declare namespace pickers {
    const TimeProvider: ({ children, }: {
        children?: any;
    }) => JSX.Element;
    const useTime: () => any;
    const DateProvider: ({ children, }: {
        children?: any;
    }) => JSX.Element;
    const useDate: () => any;
}

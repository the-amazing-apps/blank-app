declare namespace other {
    namespace snack {
        enum SnackType {
            Error = "error",
            Warning = "warning",
            Info = "info",
            Success = "success",
            Normal = "normal"
        }
    }
}
declare namespace other {
    namespace snack {
        enum TransitionType {
            Grow = "grow",
            Slide = "slide"
        }
    }
}
declare namespace other {
    namespace snack {
        enum VerticalAlign {
            Top = "top",
            Bottom = "bottom"
        }
    }
}
declare namespace other {
    namespace snack {
        enum HorizontalAlign {
            Left = "left",
            Center = "center",
            Right = "right"
        }
    }
}
declare namespace other {
    namespace snack {
        enum TransitionDirection {
            Right = "right",
            Down = "down",
            Left = "left",
            Up = "up"
        }
    }
}
declare namespace other {
    namespace snack {
        interface ISnack {
            type?: SnackType;
            transition?: TransitionType;
            transitionDirection?: TransitionDirection;
            timeout?: number;
            onClose?: CallableFunction;
            onAction?: CallableFunction;
            action?: string;
            anchorVertical?: VerticalAlign;
            anchorHorizontal?: HorizontalAlign;
            message?: string;
        }
    }
}
declare namespace other {
    namespace state {
        interface IReducerAction<P = any> {
            type: string;
            payload: P;
        }
    }
}
declare namespace other {
    namespace fetch {
        enum ResponseType {
            Basic,
            Cors,
            Default,
            Error,
            Opaque
        }
    }
}
declare namespace other {
    namespace fetch {
        interface IBody<J = JSON> {
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            formData(): Promise<FormData>;
            json(): Promise<J>;
            text(): Promise<string>;
        }
    }
}
declare namespace other {
    namespace fetch {
        interface IHeaders {
            append(name: string, value: string): void;
            delete(name: string): void;
            get(name: string): string;
            getAll(name: string): string[];
            has(name: string): boolean;
            set(name: string, value: string): void;
        }
    }
}
declare namespace other {
    namespace fetch {
        interface IFetchOptions {
            method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "HEAD" | "OPTIONS" | "CONNECT";
            headers?: any;
            body?: any;
            mode?: "cors" | "no-cors" | "same-origin";
            credentials?: "omit" | "same-origin" | "include";
            cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
            redirect?: "follow" | "error" | "manual";
            referrer?: string;
            referrerPolicy?: "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url";
            integrity?: any;
        }
    }
}
declare namespace other {
    namespace fetch {
        interface IResponse<J = JSON> extends IBody<J> {
            error(): IResponse;
            redirect(url: string, status?: number): IResponse;
            type: ResponseType;
            url: string;
            status: number;
            ok: boolean;
            statusText: string;
            headers: IHeaders;
            clone(): IResponse;
        }
    }
}
declare namespace other {
    namespace i11n {
        interface ITranslationProviderProps {
            locale?: ITranslationLocale;
            children?: React.ReactNode;
        }
    }
}
declare namespace other {
    namespace i11n {
        interface ITranslationLocale {
            [key: string]: string;
        }
    }
}
declare namespace other {
    namespace components {
        type useSnackHook = (message: string, obj?: snack.ISnack) => void;
        export const SnackContext: React.Context<useSnackHook>;
        export const useSnack: () => useSnackHook;
        export {};
    }
}
declare namespace other {
    namespace components {
        const SnackProvider: ({ children, }: {
            children?: any;
        }) => JSX.Element;
    }
}
declare namespace other {
    namespace components {
        const SnackViewer: (props: snack.ISnack) => JSX.Element;
    }
}
declare namespace other {
    namespace components {
        type useDispatchHook<T = other.state.IReducerAction> = () => [any, (args: T) => any];
        const DispatchContext: React.Context<useDispatchHook<state.IReducerAction<any>>>;
        const useDispatch: () => any[] | [any, (args: state.IReducerAction<any>) => any];
    }
}
declare namespace other {
    namespace components {
        interface IDispatchProviderProps<S = any> {
            reducer: React.Reducer<S, other.state.IReducerAction>;
            children?: React.ReactNode;
            initialState: S;
        }
        const DispatchProvider: ({ reducer, initialState, children, }: IDispatchProviderProps) => JSX.Element;
    }
}
declare namespace other {
    namespace components {
        type connectStateFunc = (component: material.Component, mapStateToProps?: (obj: any) => any, mapDispatchToProps?: (dispatch: (a: state.IReducerAction) => void) => any) => material.Component;
        const connectState: connectStateFunc;
    }
}
declare namespace other {
    namespace components {
        type fetchFunc<J = any> = (url: string, options?: other.fetch.IFetchOptions) => Promise<other.fetch.IResponse<J>>;
        type useFetchHook<J = any> = () => fetchFunc<J>;
        const FetchContext: React.Context<useFetchHook<any>>;
        const useFetch: <J = any>() => fetchFunc<J>;
    }
}
declare namespace other {
    namespace components {
        interface IFetchProviderProps {
            children?: React.ReactNode;
            /**
             *  - Токен можно передать в заголовке. Если используются
             * state-tools, входным параметром будет текущее состояние
             *  - С существующими заголовками произойдет автоматическая
             * склейка
             * @example {"MY-Token": "J3QQ4-H7H2V-2HCH4-M3HK8-6M8VW"}
             */
            headers?: any | ((s: any) => any) | ((s: any) => Promise<any>);
            /**
             *  - Токен можно передать GET параметром. Если используются
             * state-tools, входным параметром будет текущее состояние.
             *  - С существующими get параметрами произойдет автоматическая
             * склейка
             * @example ?token=J3QQ4-H7H2V-2HCH4-M3HK8-6M8VW
             */
            searchParams?: string | ((s: any) => string) | ((s: any) => Promise<string>);
        }
        const FetchProvider: ({ searchParams, children, headers, }: IFetchProviderProps) => JSX.Element;
    }
}
declare namespace other {
    namespace components {
        type trFunc = (key: string) => string;
        export const TranslationContext: React.Context<trFunc>;
        export const useTr: () => (template: TemplateStringsArray, ...substitutions: any[]) => string;
        export {};
    }
}
declare namespace other {
    namespace components {
        const TranslationProvider: ({ children, locale, }: i11n.ITranslationProviderProps) => JSX.Element;
    }
}
declare namespace other {
    namespace snack {
        const SnackProvider: ({ children, }: {
            children?: any;
        }) => JSX.Element;
        const useSnack: () => (message: string, obj?: ISnack) => void;
    }
    namespace state {
        const DispatchProvider: ({ reducer, initialState, children, }: components.IDispatchProviderProps<any>) => JSX.Element;
        const useDispatch: () => any[] | [any, (args: IReducerAction<any>) => any];
        const connect: components.connectStateFunc;
    }
    namespace fetch {
        const FetchProvider: ({ searchParams, children, headers, }: components.IFetchProviderProps) => JSX.Element;
        const useFetch: <J = any>() => components.fetchFunc<J>;
    }
    namespace i11n {
        const TranslationProvider: ({ children, locale, }: ITranslationProviderProps) => JSX.Element;
        const useTr: () => (template: TemplateStringsArray, ...substitutions: any[]) => string;
    }
}

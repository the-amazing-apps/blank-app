declare namespace router {
    namespace components {
        const RouterContext: React.Context<(url: any) => void>;
    }
}
declare namespace router {
    namespace components {
        const Router: React.ForwardRefExoticComponent<{
            children?: any;
            guardFallback?: string;
            currentUrl?: string;
        } & React.RefAttributes<unknown>>;
    }
}
declare namespace router {
    namespace components {
        const Route: ({ component, guard, url, }: {
            component?: any;
            guard?: (url?: string) => boolean;
            url?: string;
        }) => JSX.Element;
        type RouteProps = Parameters<typeof Route>[0];
    }
}
declare namespace router {
    namespace components {
        const Link: ({ children, url, ...otherProps }: {
            [x: string]: any;
            children?: any;
            url?: string;
        }) => JSX.Element;
    }
}
declare namespace router {
    namespace components {
        const useRouter: () => (url: any) => void;
    }
}
declare namespace router {
    const Router: React.ForwardRefExoticComponent<{
        children?: any;
        guardFallback?: string;
        currentUrl?: string;
    } & React.RefAttributes<unknown>>;
    const Route: ({ component, guard, url, }: {
        component?: any;
        guard?: (url?: string) => boolean;
        url?: string;
    }) => JSX.Element;
    const Link: ({ children, url, ...otherProps }: {
        [x: string]: any;
        children?: any;
        url?: string;
    }) => JSX.Element;
    const useRouter: () => (url: any) => void;
}

declare namespace form {
    namespace utils {
        const get: (object: any, path: any) => any;
    }
}
declare namespace form {
    namespace utils {
        const set: (object: any, path: any, value: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const error: (msg: any) => never;
    }
}
declare namespace form {
    namespace utils {
        const isNullOrUndefined: (obj: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const deepCompare: (obj1: any, obj2: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const deepClone: (src: any) => {};
    }
}
declare namespace form {
    namespace utils {
        const randomId: () => string;
    }
}
declare namespace form {
    namespace utils {
        const flat: (arr: any, fieldName?: string) => any;
        const deepFlat: (arr: any, fieldName?: string) => any;
    }
}
declare namespace form {
    namespace utils {
        const initialValue: (type: FieldType) => false | any[] | "" | 1 | 0 | 3;
    }
}
declare namespace form {
    namespace utils {
        /**
         * Ожидает потерю фокуса, используя
         * document.activeElement
         */
        const waitForBlur: (ref: HTMLElement) => Promise<unknown>;
    }
}
declare namespace form {
    namespace utils {
        const createIcon: (icon: any) => React.FunctionComponentElement<any> | React.CElement<{}, React.Component<{}, any, any>>;
    }
}
declare namespace form {
    namespace hooks {
        interface IProps {
            children?: React.ReactChildren;
        }
        export function withType<T extends IProps>(component: React.ComponentType<any>): (props: T) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        export {};
    }
}
declare namespace form {
    namespace hooks {
        /**
         * Конструкция позволяет дождаться применения всех эффектов, а затем дополнительно
         * запустить таймер, для операций дорогих по производительности!
         */
        const useDelayed: (calculate: () => any, delay: (v: any) => void, deps: any[]) => any;
    }
}
declare namespace form {
    namespace hooks {
        type useResolvedHook = (handler: () => Promise<any> | any, fallback: (e: Error) => void, fields: IField[]) => [any, (v: any) => void];
        /**
         * Хук разрешает обработчик на корневом уровне, при чем только
         * один раз. Для дочерних One компонентов осуществляется
         * подписка на изменения
         */
        export const useResolved: useResolvedHook;
        export {};
    }
}
declare namespace form {
    namespace components {
        const Group: React.ForwardRefExoticComponent<Pick<{
            [x: string]: any;
            className?: string;
            columns?: string;
            phoneColumns?: string;
            tabletColumns?: string;
            desktopColumns?: string;
            children?: any;
            isItem?: boolean;
            style?: any;
        }, string | number> & React.RefAttributes<unknown>>;
    }
}
declare namespace form {
    namespace components {
        const Expansion: ({ title, description, className, columns, phoneColumns, tabletColumns, desktopColumns, children, ...otherProps }: {
            [x: string]: any;
            title?: string;
            description?: string;
            className?: string;
            columns?: string;
            phoneColumns?: string;
            tabletColumns?: string;
            desktopColumns?: string;
            children?: any;
        }) => JSX.Element;
    }
}
declare namespace form {
    enum FieldType {
        Switch = "switch",
        Line = "line",
        Group = "group",
        Expansion = "expansion",
        Radio = "radio",
        Checkbox = "checkbox",
        Text = "text",
        Progress = "progress",
        Component = "component",
        Slider = "slider",
        Combo = "combo",
        Items = "items",
        Rating = "rating"
    }
}
declare namespace form {
    type inputType = "text" | "color" | "date" | "email" | "month" | "number" | "password" | "search" | "tel" | "time" | "url" | "week";
    /**
     * Объект поля для прикладного программиста
     */
    export interface IField {
        /**
         * Общие поля. Поле name позволяет задать забор
         * поля из целевого объекта, не нужен для group,
         * expansion и line.
         *  - Поле id пробрасывается в аттрибуты корневого
         * блока компонента на странице и не используется в
         * компоненте List.
         */
        id?: string;
        name?: string;
        /**
         * Коллбеки, вызываемый при фокусировкеи потере фокуса.
         * Подразумевается изменение формы со стороны прикладного
         * программиста, а не работа с полем ввода
         * (например, обновление ссылки на изображение)
         */
        focus?: () => void;
        blur?: () => void;
        /**
         * Флаг только на чтение и "круглой окаймовки". У
         * компонента List филды принудительно получают
         * значения false.
         */
        readonly?: boolean;
        outlined?: boolean;
        /**
         * Поле, специфичное для RadioField и позволяющее
         * задать значение при выборе элемента кликом
         */
        radioValue?: string;
        /**
         * Поле type для MatTextField
         */
        inputType?: inputType;
        /**
         * Делает TextField многострочным, если
         * inputRows больше единицы
         */
        inputRows?: number;
        /**
         * Иконки для MatTextField
         */
        leadingIcon?: any;
        trailingIcon?: any;
        /**
         * При клике на иконку мы можем запросить данные из модального
         * окна, расположенного в коде прикладного программиста. Коллбек
         * получает на вход текущее значение поля и функцию onChange...
         */
        leadingIconClick?: (value: any, onChange: CallableFunction) => void;
        trailingIconClick?: (value: any, onChange: CallableFunction) => void;
        /**
         * Максимальное число для высчитывания процента
         * (минимальное число всегда ноль)
         */
        maxPercent?: number;
        /**
         * Показывает процент числом слева
         */
        showPercentLabel?: boolean;
        /**
         * - Коллбеки, позволяющий перекрасить SliderField.
         * Работают только если заданы все вместе
         * - ВНИМАНИЕ! Потенциально возможна просадка производительности,
         * так как осуществляет рекомпиляцию стилей material-ui
         */
        sliderThumbColor?: (v: number) => string;
        sliderTrackColor?: (v: number) => string;
        sliderRailColor?: (v: number) => string;
        /**
         *  - Коллбеки, позволяющие перекрасить ProgressField.
         * Работают только если заданы все вместе
         *  - ВНИМАНИЕ! Потенциально возможна просадка производительности,
         * так как осуществляет рекомпиляцию стилей material-ui
         */
        progressColor?: (v: number) => string;
        progressBarColor?: (v: number) => string;
        /**
         * Поля, специфичные для SliderField
         */
        minSlider?: number;
        maxSlider?: number;
        stepSlider?: number;
        /**
         * Варианты выбора для ComboField и ItemsField
         */
        itemList?: string[];
        /**
         * Позволяет перевести значения у ComboField и ItemsField
         * из поле itemList на человеческий, если
         * используются константы
         */
        tr?: (s: any) => any;
        /**
         * Тип поля для логического ветвления при рендеринге
         */
        type: FieldType;
        /**
         * Наименование класса для корневого элемента поля (опционально)
         */
        className?: string;
        /**
         * Стиль корневого элемента для поля (опционально)
         */
        style?: React.CSSProperties;
        /**
         * Заголовок и описание, если возможен вывод у поля
         */
        title?: string;
        description?: string;
        /**
         * placeholder для TextField, ComboField, ItemsField
         */
        placeholder?: string;
        /**
         * Колонки для One. Не используются в List (кроме фильтров).
         * Если указано поле columns, то остальные приравниваются к
         * его значению
         */
        columns?: string;
        phoneColumns?: string;
        tabletColumns?: string;
        desktopColumns?: string;
        /**
         * Дочерние поля для групп
         */
        fields?: IField[];
        /**
         * Коллбек, позволяющий организовать валидацию. Если
         * возвращаемое значение не равно null, считается за
         * ошибку
         */
        isInvalid?: (v: any) => null | string;
        /**
         * Коллбек, позволяющий скрыть поле, исходя из целевого
         * объекта
         */
        isVisible?: (v: any) => boolean;
        /**
         * Коллбек, позволяющий отключить поле, исходя из целевого
         * объекта
         */
        isDisabled?: (v: any) => boolean;
        /**
         * Коллбек, если значение поля вычисляется динамически. Автоматически
         * включает readonly. Для ComponentField может возвращать JSX.
         */
        compute?: (v: any) => any;
        /**
         * Значение по-умолчанию для поля
         */
        defaultValue?: string | number | boolean;
    }
    export {};
}
declare namespace form {
    type exclude = 'defaultValue';
    /**
     * Объект сущность представляет собой поле прикладного
     * программииста, расширенное входным параметром и
     * коллбеком изменения для внутренней организации
     * работы. ВАЖНО - изменение поля влечет изменение
     * всего целевого объекта, следуя паттерну immutable
     */
    export interface IEntity extends Omit<IField, exclude> {
        change?: (object: any) => void;
        object: object;
    }
    export {};
}
declare namespace form {
    interface IOneProps {
        /**
         * Позволяет загружать данные в компонент
         */
        handler?: () => Promise<any> | any;
        /**
         * Вызывается при ошибке в handler
         */
        fallback?: (e: Error) => void;
        /**
         * Вызываются при фокусировки по филду
         * в компоненте и потере фокуса
         */
        focus?: () => void;
        blur?: () => void;
        /**
         * Вызывается после изменения и передает измененный
         * объект прикладному программисту
         */
        change: (object: any) => void;
        /**
         * Массив полей, выводимый в компоненте
         */
        fields: IField[];
        /**
         * Префикс для формирования ключей элементов
         */
        prefix?: string;
        /**
         * Плейсхолдер, показываемый во время загрузки данных
         */
        LoadPlaceholder?: null | material.Element;
    }
}
declare namespace form {
    enum SelectionMode {
        Single = "single",
        Multiple = "multiple",
        None = "none"
    }
}
declare namespace form {
    type order = 'desc' | 'asc' | '';
    /**
     * Входные параметры обработчику List
     */
    interface IListHandlerInput {
        /**
         * Ключевое слово для поиску по базе данных
         */
        keyword?: string;
        /**
         * Значения для пагинации, где limit это число
         * записей на странице, offset это отступ от начала, а
         * total это общее количество записей
         */
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Значения для сортировки по полю
         */
        order?: order;
        orderBy?: string;
    }
}
declare namespace form {
    interface IListHandlerResult {
        /**
         * Обработчик List должен вернуть объект с массивом items.
         */
        items: any[];
        /**
         * Возвращает общее число элементов
         */
        total?: number;
    }
}
declare namespace form {
    interface IListProps {
        /**
         * Позволяет загружать данные в компонент
         */
        handler: (params?: IListHandlerInput) => Promise<IListHandlerResult> | IListHandlerResult;
        /**
         * Вызывается при ошибке в handler
         */
        fallback?: (e: Error) => void;
        /**
         * Вызывается после клика по строке. Подразумевается
         * переход на страницу с обработчиком One, получающим
         * параметр id из адресной строки...
         */
        click?: (object: any) => void;
        /**
         * Массив полей, выводимый в компоненте
         */
        fields: IField[];
        /**
         * Класс корневого элемента таблицы
         */
        className?: string;
        /**
         * Возможность выбирать элементы. Доступны опции
         * single (radio-button), multiple (checkbox), none
         */
        selection?: SelectionMode;
        /**
         * Можно сделать записи не редактируемыми и не
         * удаляемыми, чтобы был доступен только выбор
         */
        canSelect?: boolean;
        canDelete?: boolean;
        canEdit?: boolean;
        /**
         * Коллбек, вызываемый после клика по элементу
         */
        select?: (object: any[]) => void;
        /**
         * Коллбек, вызываемый для удаления элемента
         */
        remove?: (object: any) => Promise<void> | void;
        /**
         * Значения по-умолчанию для пагинации. Значение
         * total будет переопределяться исходя из доступности
         * соответствующего поля ответа
         */
        limit?: number;
        offset?: number;
        total?: number;
    }
}
declare namespace form {
    namespace components {
        /**
         *  - Оборачивает IEntity в удобную абстракцию IManaged, где сразу
         *    представлены invalid, disabled, visible и можно задваивать вызов onChange
         *  - Управляет фокусировкой, мануально ожидая потерю фокуса, эмулируя onBlur
         */
        const makeManaged: (Component: material.Component<IManaged>, skipDebounce?: boolean) => ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const CheckboxField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const LineField: ({ className, columns, title, phoneColumns, tabletColumns, desktopColumns, styles, }: {
            className?: string;
            columns?: string;
            title?: string;
            phoneColumns?: string;
            tabletColumns?: string;
            desktopColumns?: string;
            styles?: any;
        }) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const RadioField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const SwitchField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const TextField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const ProgressField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const ComponentField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const SliderField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const ComboField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const ItemsField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const RatingField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, compute, object, name, focus, blur, readonly, style, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const createField: (entity: IEntity, currentPath?: string) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        const One: ({ fields, change, prefix, fallback, handler, focus, blur, LoadPlaceholder, }: IOneProps) => any;
    }
}
declare namespace form {
    namespace components {
        const List: ({ className, fields, selection, limit, offset, total, canSelect, canDelete, canEdit, select, click, remove, handler, fallback, ...otherProps }: IListProps) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        const Breadcrumbs: ({ back, save, currentTitle, backwardTitle, saveLabel, saveDisabled, className, ...otherProps }: {
            [x: string]: any;
            back?: () => void;
            save?: () => void;
            currentTitle?: string;
            backwardTitle?: string;
            saveLabel?: string;
            saveDisabled?: boolean;
            className?: string;
        }) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        namespace internal {
            const Scaffold: ({ showMenu, children, className, title, RightCorner, pages, style, }: {
                showMenu?: boolean;
                children?: any;
                className?: string;
                title?: string;
                RightCorner: any;
                pages?: any[];
                style?: {};
            }) => JSX.Element;
            type ScaffoldProps = Parameters<typeof Scaffold>[0];
        }
        export interface IScaffoldProps extends Omit<internal.ScaffoldProps, 'RightCorner'> {
            /**
             * Регулирует доступность бокового меню
             */
            showMenu?: boolean;
            /**
             * Внутри Scaffold следует размещать приложение
             */
            children?: material.Element;
            /**
             * Наименования классов, которые будет переданы в AppBar
             */
            className?: string;
            /**
             * Стили, которые будут переданы в AppBar
             */
            styles?: React.CSSProperties;
            /**
             * Содержимое бокового меню. Состоит из массива объектов
             * следующей структуры
             */
            pages?: {
                icon: material.Component | string;
                click: CallableFunction;
                title: string;
            }[];
            /**
             * Компонент иконки в правом углу можно переопределить
             */
            RightCorner?: material.Component | null;
            /**
             * Заголовок приложения
             */
            title?: string;
        }
        export const Scaffold: (props: IScaffoldProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        export {};
    }
}
declare namespace form {
    const One: ({ fields, change, prefix, fallback, handler, focus, blur, LoadPlaceholder, }: IOneProps) => any;
    const List: ({ className, fields, selection, limit, offset, total, canSelect, canDelete, canEdit, select, click, remove, handler, fallback, ...otherProps }: IListProps) => JSX.Element;
    const Scaffold: (props: components.IScaffoldProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    const Breadcrumbs: ({ back, save, currentTitle, backwardTitle, saveLabel, saveDisabled, className, ...otherProps }: {
        [x: string]: any;
        back?: () => void;
        save?: () => void;
        currentTitle?: string;
        backwardTitle?: string;
        saveLabel?: string;
        saveDisabled?: boolean;
        className?: string;
    }) => JSX.Element;
}
declare namespace form {
    /**
     * Свойства, не доступные управляемому полю
     */
    type exclude = 'object' | 'type' | 'focus' | 'blur';
    /**
     * Возможные значения value
     */
    type v = number | string | boolean;
    /**
     * Свойства сущности, обернутой в компонент высшего порядка
     */
    export interface IManaged extends Omit<IEntity, exclude> {
        /**
         * Компонент высшего порядка перехватывает управление
         */
        columns?: never;
        phoneColumns?: never;
        tabletColumns?: never;
        desktopColumns?: never;
        isDisabled?: never;
        isVisible?: never;
        isInvalid?: never;
        change?: never;
        object?: never;
        name?: never;
        readonly?: never;
        /**
         * Компонент высшего порядка предоставляет удобную
         * абстракцию
         */
        value: v;
        disabled: boolean;
        invalid: string | null;
        onChange: (v: v) => void;
    }
    export {};
}

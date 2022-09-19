export { Context };
declare namespace Context {
    type id = number;
    type t<Context> = (() => Context | undefined) & {
        data: {
            context: Context;
            id: id;
        }[];
        allowsNesting: boolean;
        get(): Context;
        has(): boolean;
        runWith<Result>(context: Context, func: () => Result): [Context, Result];
        runWithAsync<Result>(context: Context, func: () => Promise<Result>): Promise<[Context, Result]>;
        enter(context: Context): id;
        leave(id: id): Context;
        id: () => id;
    };
}
declare const Context: {
    create: typeof create;
};
declare function create<C>(options?: {
    allowsNesting?: boolean | undefined;
    default?: C | undefined;
}): Context.t<C>;

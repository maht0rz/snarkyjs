export * as Types from './gen/parties.js';
export { jsLayout } from './gen/js-layout.js';
export { asFieldsAndAux };
declare function asFieldsAndAux<T, JsonT>(layout: any): {
    sizeInFields(): number;
    toFields(value: T): import("../snarky.js").Field[];
    toAuxiliary(value?: T | undefined): any[];
    fromFields(fields: import("../snarky.js").Field[], aux: any[]): T;
    toJSON(value: T): JsonT;
    check(value: T): void;
    toInput(value: T): import("../lib/hash.js").HashInput;
    witness(f: () => T): T;
};

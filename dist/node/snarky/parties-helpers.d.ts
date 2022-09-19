import { TypeMap } from './parties-leaves.js';
import { Field } from '../snarky.js';
import { AsFieldsAndAux } from '../lib/circuit_value.js';
import { HashInput } from '../lib/hash.js';
export { asFieldsAndAux, Layout, AsFieldsAndAux };
declare type CustomTypes = Record<string, AsFieldsAndAux<any, any>>;
declare function asFieldsAndAux<T, TJson>(typeData: Layout, customTypes: CustomTypes): {
    sizeInFields(): number;
    toFields(value: T): Field[];
    toAuxiliary(value?: T): any[];
    fromFields(fields: Field[], aux: any[]): T;
    toJSON(value: T): TJson;
    check(value: T): void;
    toInput(value: T): HashInput;
    witness(f: () => T): T;
};
declare type WithChecked = {
    checkedType?: Layout;
    checkedTypeName?: string;
};
declare type BaseLayout = {
    type: keyof TypeMap;
} & WithChecked;
declare type RangeLayout<T extends BaseLayout> = {
    type: 'object';
    name: string;
    keys: ['lower', 'upper'];
    entries: {
        lower: T;
        upper: T;
    };
} & WithChecked;
declare type OptionLayout<T extends BaseLayout> = {
    type: 'option';
} & ({
    optionType: 'flaggedOption';
    inner: RangeLayout<T>;
} | {
    optionType: 'flaggedOption';
    inner: T;
} | {
    optionType: 'orUndefined';
    inner: T;
}) & WithChecked;
declare type ArrayLayout = {
    type: 'array';
    inner: Layout;
    staticLength: number | null;
} & WithChecked;
declare type Layout = OptionLayout<BaseLayout> | BaseLayout | ({
    type: 'object';
    name: string;
    keys: string[];
    entries: Record<string, Layout>;
} & WithChecked) | ArrayLayout;

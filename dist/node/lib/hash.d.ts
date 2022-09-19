import { Poseidon as Poseidon_, Field } from '../snarky.js';
export { Poseidon };
export { HashInput, prefixes, emptyHashWithPrefix, hashWithPrefix, salt, TokenSymbol, packToFields, emptyReceiptChainHash, };
declare class Sponge {
    private sponge;
    constructor();
    absorb(x: Field): void;
    squeeze(): Field;
}
declare const Poseidon: {
    hash(input: Field[]): Field;
    update(state: [Field, Field, Field], input: Field[]): [Field, Field, Field];
    readonly initialState: [Field, Field, Field];
    Sponge: typeof Sponge;
};
declare function emptyHashWithPrefix(prefix: string): Field;
declare function hashWithPrefix(prefix: string, input: Field[]): Field;
declare const prefixes: typeof Poseidon_.prefixes;
declare function salt(prefix: string): [Field, Field, Field];
/**
 * Convert the {fields, packed} hash input representation to a list of field elements
 * Random_oracle_input.Chunked.pack_to_fields
 */
declare function packToFields({ fields, packed }: HashInput): Field[];
declare type HashInput = {
    fields?: Field[];
    packed?: [Field, number][];
};
declare const HashInput: {
    readonly empty: {};
    append(input1: HashInput, input2: HashInput): HashInput;
};
declare type TokenSymbol = {
    symbol: string;
    field: Field;
};
declare const TokenSymbol: {
    empty: {
        symbol: string;
        field: Field;
    };
    from(symbol: string): TokenSymbol;
    sizeInFields(): number;
    toFields(value: TokenSymbol): Field[];
    toAuxiliary(value?: TokenSymbol | undefined): any[];
    fromFields(fields: Field[], aux: any[]): TokenSymbol;
    toJSON(value: TokenSymbol): string;
    check(value: TokenSymbol): void;
    toInput(value: TokenSymbol): HashInput;
};
declare function emptyReceiptChainHash(): Field;

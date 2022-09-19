import { Field, Bool } from '../lib/core.js';
import * as Json from './gen/parties-json.js';
import { UInt32, UInt64, Sign } from '../lib/int.js';
import { TokenSymbol } from '../lib/hash.js';
import { PublicKey } from '../lib/signature.js';
import { AsFieldsAndAux, AsFieldsExtended } from '../lib/circuit_value.js';
export { PublicKey, Field, Bool, AuthRequired, UInt64, UInt32, Sign, TokenId };
export { Events, Events as SequenceEvents, StringWithHash, TokenSymbol };
export { TypeMap };
declare type AuthRequired = {
    constant: Bool;
    signatureNecessary: Bool;
    signatureSufficient: Bool;
};
declare type TokenId = Field;
declare type TypeMap = {
    PublicKey: PublicKey;
    Field: Field;
    Bool: Bool;
    AuthRequired: AuthRequired;
    UInt32: UInt32;
    UInt64: UInt64;
    Sign: Sign;
    TokenId: TokenId;
    number: number;
    null: null;
    undefined: undefined;
    string: string;
};
declare const TokenId: AsFieldsExtended<TokenId>;
declare const AuthRequired: AsFieldsExtended<AuthRequired>;
declare const TypeMap: {
    [K in keyof TypeMap]: AsFieldsAndAux<TypeMap[K], Json.TypeMap[K]>;
};
declare type DataAsHash<T> = {
    data: T;
    hash: Field;
};
declare const Events: AsFieldsAndAux<DataAsHash<Field[][]>, string[][]>;
declare const StringWithHash: AsFieldsAndAux<DataAsHash<string>, string>;

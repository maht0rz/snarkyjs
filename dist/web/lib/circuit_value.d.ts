import 'reflect-metadata';
import { Circuit, JSONValue, AsFieldElements } from '../snarky.js';
import { Field, Bool } from './core.js';
import { Context } from './global-context.js';
import { HashInput } from './hash.js';
export { Circuit, CircuitValue, prop, arrayProp, matrixProp, public_, circuitMain, circuitValue, };
export { AsFieldsExtended, AsFieldsAndAux, AnyConstructor, cloneCircuitValue, circuitValueEquals, circuitArray, memoizationContext, memoizeWitness, getBlindingValue, toConstant, };
declare type AnyConstructor = new (...args: any) => any;
declare type NonMethodKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
declare type NonMethods<T> = Pick<T, NonMethodKeys<T>>;
declare abstract class CircuitValue {
    constructor(...props: any[]);
    static fromObject<T extends AnyConstructor>(this: T, value: NonMethods<InstanceType<T>>): InstanceType<T>;
    static sizeInFields(): number;
    static toFields<T extends AnyConstructor>(this: T, v: InstanceType<T>): Field[];
    static toInput<T extends AnyConstructor>(this: T, v: InstanceType<T>): HashInput;
    toFields(): Field[];
    toJSON(): JSONValue;
    toConstant(): this;
    equals(x: this): Bool;
    assertEquals(x: this): void;
    isConstant(): boolean;
    static ofFields<T extends AnyConstructor>(this: T, xs: Field[]): InstanceType<T>;
    static check<T extends AnyConstructor>(this: T, v: InstanceType<T>): void;
    static toConstant<T extends AnyConstructor>(this: T, t: InstanceType<T>): InstanceType<T>;
    static toJSON<T extends AnyConstructor>(this: T, v: InstanceType<T>): JSONValue;
    static fromJSON<T extends AnyConstructor>(this: T, value: JSONValue): InstanceType<T> | null;
}
declare function prop(this: any, target: any, key: string): void;
declare function circuitArray<T>(elementType: AsFieldElements<T> | AsFieldsExtended<T>, length: number): AsFieldsExtended<T[]>;
declare function arrayProp<T>(elementType: AsFieldElements<T>, length: number): (target: any, key: string) => void;
declare function matrixProp<T>(elementType: AsFieldElements<T>, nRows: number, nColumns: number): (target: any, key: string) => void;
declare function public_(target: any, _key: string | symbol, index: number): void;
declare function circuitMain(target: any, propertyName: string, _descriptor?: PropertyDescriptor): any;
declare type AsFieldsExtended<T> = AsFieldElements<T> & {
    toInput: (x: T) => {
        fields?: Field[];
        packed?: [Field, number][];
    };
    toJSON: (x: T) => JSONValue;
};
declare function circuitValue<T>(typeObj: any, options?: {
    customObjectKeys: string[];
}): AsFieldsExtended<T>;
declare function cloneCircuitValue<T>(obj: T): T;
declare function circuitValueEquals<T>(a: T, b: T): boolean;
declare function toConstant<T>(type: AsFieldElements<T>, value: T): T;
declare let memoizationContext: Context.t<{
    memoized: Field[][];
    currentIndex: number;
    blindingValue: Field;
}>;
/**
 * Like Circuit.witness, but memoizes the witness during transaction construction
 * for reuse by the prover. This is needed to witness non-deterministic values.
 */
declare function memoizeWitness<T>(type: AsFieldElements<T>, compute: () => T): T;
declare function getBlindingValue(): Field;
declare type AsFieldsAndAux<T, TJson> = {
    sizeInFields(): number;
    toFields(value: T): Field[];
    toAuxiliary(value?: T): any[];
    fromFields(fields: Field[], aux: any[]): T;
    toJSON(value: T): TJson;
    check(value: T): void;
    toInput(value: T): HashInput;
};
declare function fromCircuitValue<T, A extends AsFieldsExtended<T>, TJson = JSONValue>(type: A): AsFieldsAndAux<T, TJson>;
declare const AsFieldsAndAux: {
    fromCircuitValue: typeof fromCircuitValue;
};

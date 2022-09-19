// @generated this file is auto-generated - don't edit it directly
import { TokenSymbol, StringWithHash, Events, SequenceEvents, } from '../parties-leaves.js';
import { asFieldsAndAux } from '../parties-helpers.js';
import * as Json from './parties-json.js';
import { jsLayout } from './js-layout.js';
export { customTypes, Parties, Party };
export { Json };
export * from '../parties-leaves.js';
let customTypes = {
    StringWithHash,
    TokenSymbol,
    Events,
    SequenceEvents,
};
let Parties = asFieldsAndAux(jsLayout.Parties, customTypes);
let Party = asFieldsAndAux(jsLayout.Party, customTypes);
//# sourceMappingURL=parties.js.map
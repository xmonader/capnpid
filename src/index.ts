import * as crypto from "crypto";


/*
import * as bignum from "big-integer";
*/
export function randInt(min = 0, max: any) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
export function calcCapnpID() {
    // return bignum(randInt(0, Math.pow(2, 64))).or(bignum(1).shiftLeft(63)).toString(16);
    return crypto.randomBytes(8).toString("hex");
}
export function newCapnpID() {
    return `@0x${calcCapnpID()};`;
}
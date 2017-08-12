import * as crypto from "crypto";
import * as bignum from "big-integer";

export function randInt(min = 0, max: any) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
export function calcCapnpID() {
    const num = crypto.randomBytes(8).toString("hex");
    return bignum(num, 16).or(bignum(1).shiftLeft(63)).toString(16);

}
export function newCapnpID() {
    return `@0x${calcCapnpID()};`;
}
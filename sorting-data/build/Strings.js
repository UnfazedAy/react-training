"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
const sortData_1 = require("./sortData");
class Strings extends sortData_1.SortData {
    constructor(str) {
        super();
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    compare(indexLeft, indexRight) {
        return (this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase());
    }
    swap(indexLeft, indexRight) {
        const letters = [...this.str];
        const leftArg = letters[indexLeft];
        letters[indexLeft] = letters[indexRight];
        letters[indexRight] = leftArg;
        this.str = letters.join('');
    }
}
exports.Strings = Strings;

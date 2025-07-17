"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const sortData_1 = require("./sortData");
class Numbers extends sortData_1.SortData {
    constructor(number) {
        super();
        this.number = number;
    }
    compare(indexLeft, indexRight) {
        return this.number[indexLeft] > this.number[indexRight];
    }
    swap(indexLeft, indexRight) {
        const leftArg = this.number[indexLeft];
        this.number[indexLeft] = this.number[indexRight];
        this.number[indexRight] = leftArg;
    }
    // Getter
    get length() {
        return this.number.length;
    }
}
exports.Numbers = Numbers;

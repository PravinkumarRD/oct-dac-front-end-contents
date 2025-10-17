"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = void 0;
exports.default = mathModuleMessage;
exports.addition = addition;
exports.multiplication = multiplication;
exports.division = division;
exports.subtraction = subtraction;
console.log('Basic Math Module Started!');
const advance_math_1 = require("./advance-math");
Object.defineProperty(exports, "square", { enumerable: true, get: function () { return advance_math_1.square; } });
function mathModuleMessage() {
    return "This is a basics math ESM default message!";
}
function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
console.log('Basic Math Module Ended!');
//# sourceMappingURL=basic-math.js.map
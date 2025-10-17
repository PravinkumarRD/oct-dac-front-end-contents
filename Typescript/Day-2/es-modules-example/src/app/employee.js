"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Employee Module Started!');
const person_1 = __importDefault(require("./person"));
class Employee extends person_1.default {
    constructor() {
        super();
        console.log('Employee Class Constructor Executed!');
    }
    employeeId;
}
exports.default = new Employee();
console.log('Employee Module Ended!');
//# sourceMappingURL=employee.js.map
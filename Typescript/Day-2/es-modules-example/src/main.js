"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Main Module Started!');
// import mathModuleMessage, {
//   addition,
//   multiplication,
//   division,
//   subtraction,
//   square,
// } from "./app/basic-math";
const basic_math_1 = __importStar(require("./app/basic-math")), BajajMath = basic_math_1;
const employee_1 = __importDefault(require("./app/employee"));
const employee_2 = __importDefault(require("./app/employee"));
console.log(`Default Basic Math Module Export Message - ${(0, basic_math_1.default)()}`);
console.log(`Addition ${BajajMath.addition(1200, 1200)}`);
console.log(`Subtraction ${BajajMath.subtraction(1300, 1200)}`);
console.log(`Multiplication ${BajajMath.multiplication(1200, 1200)}`);
console.log(`Dividion ${BajajMath.division(12000, 1200)}`);
console.log(`Suare ${BajajMath.square(17)}`);
employee_1.default.employeeId = 3849;
employee_1.default.firstName = "Alisha";
employee_1.default.lastName = "C.";
employee_1.default.city = "Mumbai";
console.log(employee_1.default.getPersonInfo());
console.log(employee_2.default.getPersonInfo());
console.log('Main Module Ended!');
//# sourceMappingURL=main.js.map
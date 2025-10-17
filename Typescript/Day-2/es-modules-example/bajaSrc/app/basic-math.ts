console.log('Basic Math Module Started!');
import { square } from "./advance-math";

export default function mathModuleMessage() {
  return "This is a basics math ESM default message!";
}

function addition(num1:number, num2:number):number {
  return num1 + num2;
}
function subtraction(num1:number, num2:number):number {
  return num1 - num2;
}
function multiplication(num1:number, num2:number):number {
  return num1 * num2;
}
function division(num1:number, num2:number):number {
  return num1 / num2;
}

export { addition, multiplication, division, subtraction, square/* Re-exporting square from basics-math module */ };


console.log('Basic Math Module Ended!');
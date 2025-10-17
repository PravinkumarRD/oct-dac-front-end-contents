"use strict";
//Type Inference - Upon declaration and initialization of a variable, Typescript will pickup an appropriate type from the type system and retain that type throughout the program
let num1 = 100;
num1 = 190;
//num1="2378"; will not work
//Type Annotations
//Union Annotations
let digit;
digit = 100;
digit = "Hundred";
//digit=true;
function addition(num1, num2) {
    return num1 + num2;
}
//# sourceMappingURL=type-inference-and-type-annotations.js.map
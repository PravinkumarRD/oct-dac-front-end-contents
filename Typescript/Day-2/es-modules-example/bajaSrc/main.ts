console.log('Main Module Started!');
// import mathModuleMessage, {
//   addition,
//   multiplication,
//   division,
//   subtraction,
//   square,
// } from "./app/basic-math";
import mathModuleMessage, * as BajajMath from "./app/basic-math";
import employee1 from "./app/employee";
import employee2 from "./app/employee";
console.log(`Default Basic Math Module Export Message - ${mathModuleMessage()}`);
console.log(`Addition ${BajajMath.addition(1200,1200)}`);
console.log(`Subtraction ${BajajMath.subtraction(1300,1200)}`);
console.log(`Multiplication ${BajajMath.multiplication(1200,1200)}`);
console.log(`Dividion ${BajajMath.division(12000,1200)}`);
console.log(`Suare ${BajajMath.square(17)}`);

employee1.employeeId=3849;
employee1.firstName="Alisha";
employee1.lastName="C.";
employee1.city="Mumbai";
console.log(employee1.getPersonInfo());
console.log(employee2.getPersonInfo());

console.log('Main Module Ended!');
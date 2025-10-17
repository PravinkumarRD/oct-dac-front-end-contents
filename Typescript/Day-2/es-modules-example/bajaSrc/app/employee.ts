console.log('Employee Module Started!');
import BajajPerson from "./person";
class Employee extends BajajPerson {
    constructor() {
        super();
        console.log('Employee Class Constructor Executed!');
    }
    employeeId: number;
}
export default new Employee();
console.log('Employee Module Ended!');
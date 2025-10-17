"use strict";
class CrudRepository {
    _inMemoryDb = new Array();
    getAll() {
        return this._inMemoryDb;
    }
    getDetails(id) {
        return this._inMemoryDb[0];
    }
    insert(t) {
        this._inMemoryDb.push(t);
    }
    update(t) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
class Employee {
    employeeId;
    employeeName;
    city;
    constructor(employeeId, employeeName, city) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.city = city;
    }
}
class Supplier {
    supplierId;
    supplierName;
    city;
    constructor(supplierId, supplierName, city) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.city = city;
    }
}
const e1 = new Employee(1000, 'Alisha C.', 'Mumbai');
const e2 = new Employee(1001, 'Manish S.', 'Delhi');
const s1 = new Supplier(3452, "Blue Dart", "Mumbai");
const s2 = new Supplier(3452, "Green Dart", "Hyderabad");
const employeeRepository = new CrudRepository();
employeeRepository.insert(e1);
employeeRepository.insert(e2);
console.log(employeeRepository.getAll());
console.log(employeeRepository.getDetails(e1.employeeId));
const suppilerRepository = new CrudRepository();
suppilerRepository.insert(s1);
suppilerRepository.insert(s2);
console.log(suppilerRepository.getAll());
console.log(suppilerRepository.getDetails(s1.supplierId));
//# sourceMappingURL=generics.js.map
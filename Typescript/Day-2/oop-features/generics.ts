interface CommonCrud<T> {
    getAll(): T[];
    getDetails(id: number): T;
    insert(t: T): void;
    update(t: T): void;
    delete(id: number): void;
}

class CrudRepository<T> implements CommonCrud<T> {
    private _inMemoryDb: Array<T> = new Array<T>();
    getAll(): T[] {
        return this._inMemoryDb;
    }
    getDetails(id: number): T {
        return this._inMemoryDb[0];
    }
    insert(t: T): void {
        this._inMemoryDb.push(t);
    }
    update(t: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}

class Employee {
    constructor(public employeeId: number, public employeeName: string, public city: string) {

    }
}
class Supplier {
    constructor(public supplierId: number, public supplierName: string, public city: string) {

    }
}

const e1: Employee = new Employee(1000, 'Alisha C.', 'Mumbai');
const e2: Employee = new Employee(1001, 'Manish S.', 'Delhi');

const s1: Supplier = new Supplier(3452, "Blue Dart", "Mumbai");
const s2: Supplier = new Supplier(3452, "Green Dart", "Hyderabad");

const employeeRepository: CommonCrud<Employee> = new CrudRepository<Employee>();
employeeRepository.insert(e1);
employeeRepository.insert(e2);
console.log(employeeRepository.getAll());
console.log(employeeRepository.getDetails(e1.employeeId));

const suppilerRepository:CommonCrud<Supplier> = new CrudRepository<Supplier>();
suppilerRepository.insert(s1);
suppilerRepository.insert(s2);
console.log(suppilerRepository.getAll());
console.log(suppilerRepository.getDetails(s1.supplierId));
"use strict";
/*class Person {
    protected _socialId: number;
    firstName: string;
    lastName: string;
    city: string;
    getPersonInfo(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
class Person {
    constructor(firstName?: string, lastName?: string, city?: string, socialId?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this._socialId = socialId;
    }
    protected _socialId: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    city: string | undefined;
    getPersonInfo(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
*/
//Constrcutor Properties
class Person {
    firstName;
    lastName;
    city;
    socialId;
    constructor(firstName, lastName, city, socialId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.socialId = socialId;
        console.log('Person Constructor Executed!');
    }
    _address;
    get address() {
        console.log('Address - GET Property Executed!');
        return this._address;
    }
    set address(value) {
        console.log('Address - SET Property Executed!');
        this._address = value;
    }
    _state;
    get state() {
        return this._state;
    }
    set state(v) {
        this._state = v;
    }
    getPersonInfo() {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
class Customer extends Person {
    constructor(firstName, lastName, city, socialId) {
        super(firstName, lastName, city, socialId);
        console.log('Customer Constructor Executed!');
    }
    customerId;
    changeAddress(oldAddress, newAddress) {
        console.log(`Customer ${this.firstName} ${this.lastName} has changed his/her address from ${oldAddress} to ${newAddress}!`);
        return true;
    }
}
//const person: Person = new Person("Pravinkumar", "R. D.", "Pune", 2392839233);
const customer = new Customer("Manish", "Kaushik", "Raipur", 2392739333);
customer.address = "Suncity, A8/404";
// customer.firstName = "Alisha";
// customer.lastName = "Patil";
// customer.city = "Delhi";
console.log(customer.getPersonInfo());
console.log(customer.changeAddress(customer.address, "Star City,C5/101"));
//Multiple Inheritance is not supported
// class PrimeCustomer extends Customer,Person{
// }
class Counter {
    static Count = 1;
    constructor() {
        console.log(`Counter class instance number is ${Counter.Count++}!`);
    }
    static incrementCounter() {
        return Counter.Count++;
    }
}
new Counter();
new Counter();
new Counter();
console.log(Counter.incrementCounter());
console.log(Counter.incrementCounter());
console.log(Counter.incrementCounter());
//# sourceMappingURL=classes-examples.js.map
"use strict";
const Customer = {
    customerId: 2378,
    contactName: 'Alisha C.',
    city: 'Mumbai',
    getCustomerInfo: function () {
        setTimeout(() => {
            console.log(`Customer Id ${this.customerId}, Name is ${this.contactName} lives in city ${this.city}!`);
        }, 2000);
    }
};
Customer.getCustomerInfo();
const mgs = () => console.log('Welcome To One Liner Arrow Function!');
mgs();
const square = (num) => num * num;
console.log(square(56));
const salesNetProfitEast = (cogs, expense, actualSales, gstPercent) => {
    const gstAmount = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
};
console.log(salesNetProfitEast(12000, 13000, 150000, 18));
//# sourceMappingURL=arrow-functions.js.map
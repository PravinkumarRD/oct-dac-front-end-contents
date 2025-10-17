const Customer = {
    customerId: 2378,
    contactName: 'Alisha C.',
    city: 'Mumbai',
    getCustomerInfo: function () {
        setTimeout(() => {
            console.log(`Customer Id ${this.customerId}, Name is ${this.contactName} lives in city ${this.city}!`);
        }, 2000);
    }
}

Customer.getCustomerInfo();

const mgs = () => console.log('Welcome To One Liner Arrow Function!');
mgs();

const square = (num: number): number => num * num;
console.log(square(56));

const salesNetProfitEast = (cogs: number, expense: number, actualSales: number, gstPercent: number): number => {
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(salesNetProfitEast(12000,13000,150000,18));
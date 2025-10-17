"use strict";
var Payment;
(function (Payment) {
    let COD;
    (function (COD) {
        function makePayment(customerId, orderId, amount) {
            return `Customer Id ${customerId} needs to pay CASH INR ${amount}/- for an Order Id ${orderId}!`;
        }
        COD.makePayment = makePayment;
    })(COD = Payment.COD || (Payment.COD = {}));
    let Wallet;
    (function (Wallet) {
        function makePayment(customerId, orderId, amount, walletName) {
            return `Customer Id ${customerId} needs to pay INR ${amount}/- for an Order Id ${orderId} using wallet ${walletName}!`;
        }
        Wallet.makePayment = makePayment;
    })(Wallet = Payment.Wallet || (Payment.Wallet = {}));
})(Payment || (Payment = {}));
console.log(Payment.COD.makePayment(231, 655, 1200));
console.log(Payment.Wallet.makePayment(231, 655, 1200, "PayTM"));
//# sourceMappingURL=namespace-example.js.map
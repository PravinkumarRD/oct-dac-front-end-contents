namespace Payment {
    export namespace COD {
        export function makePayment(customerId: number, orderId: number, amount: number): string {
            return `Customer Id ${customerId} needs to pay CASH INR ${amount}/- for an Order Id ${orderId}!`;
        }
    }
    export namespace Wallet {
        export function makePayment(customerId: number, orderId: number, amount: number, walletName: string): string {
            return `Customer Id ${customerId} needs to pay INR ${amount}/- for an Order Id ${orderId} using wallet ${walletName}!`;
        }
    }
}

console.log(Payment.COD.makePayment(231, 655, 1200));
console.log(Payment.Wallet.makePayment(231, 655, 1200,"PayTM"));
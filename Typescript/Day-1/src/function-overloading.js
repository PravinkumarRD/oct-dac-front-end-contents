"use strict";
const ShopProducts = [
    {
        productId: 1255,
        productName: 'Samsung Galaxy',
        companyName: 'Samsung',
        unitPrice: 34000,
        availableQuantity: 45
    },
    {
        productId: 1256,
        productName: 'Samsung Note',
        companyName: 'Samsung',
        unitPrice: 84000,
        availableQuantity: 14
    },
    {
        productId: 1257,
        productName: 'Apple 14',
        companyName: 'Apple',
        unitPrice: 120000,
        availableQuantity: 65
    },
    {
        productId: 1257,
        productName: 'Apple 15 pro',
        companyName: 'Apple',
        unitPrice: 150000,
        availableQuantity: 34
    },
    {
        productId: 1258,
        productName: 'Nokia 7',
        companyName: 'Nikia',
        unitPrice: 220000,
        availableQuantity: 43
    },
];
function searchProducts(value) {
    const availableProducts = [...ShopProducts];
    const Products = [];
    if (typeof (value) === 'string') {
        for (const product of availableProducts) {
            if (product.companyName === value)
                Products.push(product.productName);
        }
    }
    else {
        for (const product of availableProducts) {
            if (product.availableQuantity >= value) {
                Products.push(product.productName);
            }
        }
    }
    return Products;
}
console.log(searchProducts("Samsung"));
console.log(searchProducts(35));
//# sourceMappingURL=function-overloading.js.map
/*function salesNetProfit(cogs: number, expense: number, actualSales: number, gstPercent: number): number {
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}

console.log(`Sales Net Profit is INR ${salesNetProfit(12000,13000,150000,18)}/-`);
*/
//Default parameter
/*
function salesNetProfit(cogs: number, expense: number=15000, actualSales: number, gstPercent: number=0): number {
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(`Sales Net Profit without GST is INR ${salesNetProfit(12000,undefined,150000)}/-`);
console.log(`Sales Net Profit with 18% is INR ${salesNetProfit(12000,13000,150000,18)}/-`);
*/
function salesNetProfit(cogs: number, expense: number = 15000, actualSales: number, gstPercent?: number): number {
    if (!gstPercent) gstPercent = 0;
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(`Sales Net Profit without GST is INR ${salesNetProfit(12000, undefined, 150000)}/-`);
console.log(`Sales Net Profit with 18% is INR ${salesNetProfit(12000, 13000, 150000, 18)}/-`);

function conferenceCities(country: string, ...cities: string[]): void {
    console.log(`In Country ${country}`);
    for (const city of cities) {
        console.log(`Nomination for conference received from city ${city}!`);
    }
}

conferenceCities("India", "Bangalore", "Hyderabad");
console.log('');
conferenceCities("India", "Bangalore", "Hyderabad", "Mumbai");
console.log('');
const Cities: string[] = ["Bangalore", "Hyderabad", "Mumbai", "Pune", "Chennai"];
conferenceCities("India",...Cities);
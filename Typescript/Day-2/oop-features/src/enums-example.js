"use strict";
//Named Constants
var Menu;
(function (Menu) {
    Menu[Menu["AMERICAN"] = 1] = "AMERICAN";
    Menu[Menu["JAPANSES"] = 2] = "JAPANSES";
    Menu[Menu["INDIAN"] = 3] = "INDIAN";
    Menu[Menu["ITALIAN"] = 4] = "ITALIAN";
})(Menu || (Menu = {}));
const customerChoice = Menu.JAPANSES;
switch (+customerChoice) {
    case 1:
        console.log('Customer made American food choice!');
        break;
    case 2:
        console.log('Customer made Japanese food choice!');
        break;
    case 3:
        console.log('Customer made Indian food choice!');
        break;
    case 4:
        console.log('Customer made Italian food choice!');
        break;
    default:
        console.log('We do not serve this food!');
        break;
}
//# sourceMappingURL=enums-example.js.map
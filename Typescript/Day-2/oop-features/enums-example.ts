//Named Constants

enum Menu {
    AMERICAN = 1,
    JAPANSES,
    INDIAN,
    ITALIAN,
}

const customerChoice: Menu = Menu.JAPANSES;

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
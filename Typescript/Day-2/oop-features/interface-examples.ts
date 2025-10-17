interface Physics {
    physicsMessage(): void;
}
interface Chemistry {
    chemistryMessage(): void;
}
interface Biology {
    biologyMessage(): void;
}
interface ScienceHod extends Biology, Chemistry, Physics {

}

class Science implements Biology, Chemistry, Physics {
    biologyMessage(): void {
        throw new Error("Method not implemented.");
    }
    chemistryMessage(): void {
        throw new Error("Method not implemented.");
    }
    physicsMessage(): void {
        throw new Error("Method not implemented.");
    }
}

const physicsHod: Physics = new Science();
const chemistryHod: Chemistry = new Science();
const biologyHod: Biology = new Science();
const scienceHod: ScienceHod = new Science();

interface Product {
    productId: number;
    productName: string;
    unitPrice: number;
    isBlackListed?: boolean;
    isAvailable: boolean;
}

const MeeshoProducts: Product[] = [
    {
        isAvailable: true,
        unitPrice: 3748,
        productId: 3783,
        productName: 'Samsang Oven'
    }
];
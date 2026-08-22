interface Vehicle {
    brand: string;
    drive(): void;
}

class Car implements Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): void {
        console.log(`${this.brand} car is driving.`);
    }
}

class Bike implements Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): void {
        console.log(`${this.brand} bike is driving.`);
    }
}

// Test
const car = new Car("Toyota");
car.drive();

const bike = new Bike("Honda");
bike.drive();
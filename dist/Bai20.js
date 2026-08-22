"use strict";
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} car is driving.`);
    }
}
class Bike {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} bike is driving.`);
    }
}
// Test
const car = new Car("Toyota");
car.drive();
const bike = new Bike("Honda");
bike.drive();

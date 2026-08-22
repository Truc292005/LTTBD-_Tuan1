"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Pig extends Animal {
    bark() {
        console.log(`${this.name} says Ecc!`);
    }
}
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says Meow!`);
    }
}
// Test
const pig = new Pig("Buddy");
pig.bark();
const cat = new Cat("Kitty");
cat.meow();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Animal makes a sound.");
    }
    callSound() {
        this.makeSound();
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog says Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat says Meow!");
    }
}
// Test
const dog = new Dog();
dog.callSound();
const cat = new Cat();
cat.callSound();

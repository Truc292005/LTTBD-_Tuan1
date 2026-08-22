"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Animal makes a sound.");
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
// Polymorphism
const animals = [
    new Dog(),
    new Cat(),
    new Animal()
];
animals.forEach(animal => {
    animal.makeSound();
});

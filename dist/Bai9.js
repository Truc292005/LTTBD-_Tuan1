"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says Woof!`);
    }
}
const dog = new Dog("Buddy");
dog.sound();

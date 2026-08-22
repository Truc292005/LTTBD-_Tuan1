"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`My name is ${this.name}.`);
        console.log(`I am ${this.age} years old.`);
        console.log(`I teach ${this.subject}.`);
    }
}
// Test
const teacher = new Teacher("Nguyen Van Nam", 35, "Mathematics");
teacher.introduce();

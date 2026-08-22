"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Bai1_1 = require("./Bai1");
class Student extends Bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}
exports.Student = Student;
// Test
const student = new Student("Nguyen Thi Lan", 20, 8.5);
student.displayAllInfo();

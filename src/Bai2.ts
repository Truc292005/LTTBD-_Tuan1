import { Person } from "./Bai1";

export class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    displayAllInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

// Test
const student = new Student("Nguyen Thi Lan", 20, 8.5);
student.displayAllInfo();
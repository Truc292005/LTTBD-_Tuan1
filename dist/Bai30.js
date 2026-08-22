"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Student: ${this.name}, Age: ${this.age}`);
    }
}
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("===== STUDENTS =====");
        this.students.forEach(student => {
            student.displayInfo();
        });
        console.log("===== TEACHERS =====");
        this.teachers.forEach(teacher => {
            teacher.displayInfo();
        });
    }
}
// Test
const school = new School();
school.addStudent(new Student("Nguyen Van An", 20));
school.addStudent(new Student("Tran Thi Binh", 21));
school.addTeacher(new Teacher("Nguyen Van Nam", "Mathematics"));
school.addTeacher(new Teacher("Le Thi Hoa", "English"));
school.displayInfo();

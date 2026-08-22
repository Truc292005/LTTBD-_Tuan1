"use strict";
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }
}
class Developer extends Employee {
    writeCode() {
        console.log(`${this.name} is writing code.`);
    }
}
// Test
const manager = new Manager("Alice", 2000);
manager.displayInfo();
manager.manageTeam();
const developer = new Developer("Bob", 1800);
developer.displayInfo();
developer.writeCode();

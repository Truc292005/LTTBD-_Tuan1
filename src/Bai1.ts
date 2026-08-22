export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// Test
const person = new Person("Nguyen Van An", 20);
person.displayInfo();
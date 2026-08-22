class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    subject: string;

    constructor(
        name: string,
        age: number,
        subject: string
    ) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(
            `My name is ${this.name}.`
        );

        console.log(
            `I am ${this.age} years old.`
        );

        console.log(
            `I teach ${this.subject}.`
        );
    }
}

// Test
const teacher = new Teacher(
    "Nguyen Van Nam",
    35,
    "Mathematics"
);

teacher.introduce();
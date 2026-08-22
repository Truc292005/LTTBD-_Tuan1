class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Pig extends Animal {
    bark(): void {
        console.log(`${this.name} says Ecc!`);
    }
}

class Cat extends Animal {
    meow(): void {
        console.log(`${this.name} says Meow!`);
    }
}

// Test
const pig = new Pig("Buddy");
pig.bark();

const cat = new Cat("Kitty");
cat.meow();
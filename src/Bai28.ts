class Animal {
    protected makeSound(): void {
        console.log("Animal makes a sound.");
    }

    public callSound(): void {
        this.makeSound();
    }
}

class Dog extends Animal {
    protected override makeSound(): void {
        console.log("Dog says Woof!");
    }
}

class Cat extends Animal {
    protected override makeSound(): void {
        console.log("Cat says Meow!");
    }
}

// Test
const dog = new Dog();
dog.callSound();

const cat = new Cat();
cat.callSound();
export {};
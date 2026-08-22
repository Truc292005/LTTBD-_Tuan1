export class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

// Test
const user = new User("An");

console.log(user.getName());

user.setName("Binh");

console.log(user.getName());
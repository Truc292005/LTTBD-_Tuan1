export class Account {
    public username: string;
    private password: string;
    readonly accountNumber: string;

    constructor(
        username: string,
        password: string,
        accountNumber: string
    ) {
        this.username = username;
        this.password = password;
        this.accountNumber = accountNumber;
    }

    checkPassword(password: string): boolean {
        return this.password === password;
    }

    displayInfo(): void {
        console.log(`Username: ${this.username}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}

// Test
const account = new Account(
    "admin",
    "123456",
    "ACC001"
);

account.displayInfo();

console.log(account.checkPassword("123456"));
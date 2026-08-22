export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }

        this.balance -= amount;
        console.log(`Withdrawn: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Test
const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }
}
exports.BankAccount = BankAccount;
// Test
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);

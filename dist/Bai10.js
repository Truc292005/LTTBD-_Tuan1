"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password, accountNumber) {
        this.username = username;
        this.password = password;
        this.accountNumber = accountNumber;
    }
    checkPassword(password) {
        return this.password === password;
    }
    displayInfo() {
        console.log(`Username: ${this.username}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}
exports.Account = Account;
// Test
const account = new Account("admin", "123456", "ACC001");
account.displayInfo();
console.log(account.checkPassword("123456"));

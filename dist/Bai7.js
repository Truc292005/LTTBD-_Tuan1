"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
// Test
const user = new User("An");
console.log(user.getName());
user.setName("Binh");
console.log(user.getName());

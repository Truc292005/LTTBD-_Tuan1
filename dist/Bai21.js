"use strict";
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Test
const userRepository = new Repository();
userRepository.add("An");
userRepository.add("Binh");
userRepository.add("Cuong");
console.log(userRepository.getAll());
const numberRepository = new Repository();
numberRepository.add(10);
numberRepository.add(20);
numberRepository.add(30);
console.log(numberRepository.getAll());

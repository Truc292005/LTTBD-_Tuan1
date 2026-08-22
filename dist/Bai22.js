"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
// Test
const stack = new Stack();
console.log("Is empty:", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Top:", stack.peek());
console.log("Is empty:", stack.isEmpty());

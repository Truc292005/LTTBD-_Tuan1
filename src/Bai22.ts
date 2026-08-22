class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Test
const stack = new Stack<number>();

console.log("Is empty:", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top:", stack.peek());

console.log("Pop:", stack.pop());
console.log("Top:", stack.peek());

console.log("Is empty:", stack.isEmpty());
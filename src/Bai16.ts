class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Test
const numberBox = new Box<number>(100);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello TypeScript");
console.log(stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log(booleanBox.getValue());
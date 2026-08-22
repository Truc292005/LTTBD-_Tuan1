"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Test
const numberBox = new Box(100);
console.log(numberBox.getValue());
const stringBox = new Box("Hello TypeScript");
console.log(stringBox.getValue());
const booleanBox = new Box(true);
console.log(booleanBox.getValue());

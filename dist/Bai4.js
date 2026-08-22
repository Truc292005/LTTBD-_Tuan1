"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
// Test
const rectangle = new Rectangle(10, 5);
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter:", rectangle.calculatePerimeter());

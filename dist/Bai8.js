"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
const products = [
    new Product("Laptop", 1200),
    new Product("Mouse", 50),
    new Product("Keyboard", 150),
    new Product("Monitor", 300)
];
const filteredProducts = products.filter(product => product.price > 100);
console.log("Products with price > 100:");
filteredProducts.forEach(product => {
    console.log(`${product.name}: $${product.price}`);
});

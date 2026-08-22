"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order {
    constructor(products) {
        this.products = products;
    }
    calculateTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
    displayOrder() {
        console.log("Order:");
        this.products.forEach(product => {
            console.log(`${product.name}: $${product.price}`);
        });
        console.log(`Total: $${this.calculateTotalPrice()}`);
    }
}
// Test
const products = [
    new Product("Laptop", 1000),
    new Product("Mouse", 50),
    new Product("Keyboard", 100)
];
const order = new Order(products);
order.displayOrder();

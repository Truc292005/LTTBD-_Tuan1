export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 50),
    new Product("Keyboard", 150),
    new Product("Monitor", 300)
];

const filteredProducts = products.filter(
    product => product.price > 100
);

console.log("Products with price > 100:");

filteredProducts.forEach(product => {
    console.log(`${product.name}: $${product.price}`);
});
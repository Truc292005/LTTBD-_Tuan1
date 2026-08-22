class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    calculateTotalPrice(): number {
        return this.products.reduce(
            (total, product) => total + product.price,
            0
        );
    }

    displayOrder(): void {
        console.log("Order:");

        this.products.forEach(product => {
            console.log(
                `${product.name}: $${product.price}`
            );
        });

        console.log(
            `Total: $${this.calculateTotalPrice()}`
        );
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
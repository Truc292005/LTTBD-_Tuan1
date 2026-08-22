class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// Test
const userRepository = new Repository<string>();

userRepository.add("An");
userRepository.add("Binh");
userRepository.add("Cuong");

console.log(userRepository.getAll());

const numberRepository = new Repository<number>();

numberRepository.add(10);
numberRepository.add(20);
numberRepository.add(30);

console.log(numberRepository.getAll());
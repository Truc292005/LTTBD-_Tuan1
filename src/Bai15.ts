class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.title}" added.`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User "${user.name}" added.`);
    }

    displayBooks(): void {
        console.log("Books:");

        this.books.forEach(book => {
            console.log(book.title);
        });
    }

    displayUsers(): void {
        console.log("Users:");

        this.users.forEach(user => {
            console.log(user.name);
        });
    }
}

// Test
const library = new Library();

library.addBook(new Book("JavaScript Basics"));
library.addBook(new Book("TypeScript Handbook"));

library.addUser(new User("An"));
library.addUser(new User("Binh"));

library.displayBooks();
library.displayUsers();
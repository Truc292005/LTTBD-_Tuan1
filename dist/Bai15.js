"use strict";
class Book {
    constructor(title) {
        this.title = title;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" added.`);
    }
    displayBooks() {
        console.log("Books:");
        this.books.forEach(book => {
            console.log(book.title);
        });
    }
    displayUsers() {
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

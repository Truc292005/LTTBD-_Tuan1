"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
    };
    return Person;
}());
exports.Person = Person;
// Test
var person = new Person("Nguyen Van An", 20);
person.displayInfo();

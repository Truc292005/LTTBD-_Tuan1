"use strict";
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
// Test
const logger1 = Logger.getInstance();
logger1.log("Application started.");
const logger2 = Logger.getInstance();
logger2.log("Application is running.");
console.log(logger1 === logger2);

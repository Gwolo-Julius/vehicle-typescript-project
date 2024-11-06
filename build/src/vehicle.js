"use strict";
// Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of Car and call the start method
const myCar = new Car("Toyota", "Camry", 2024);
myCar.start(); // Logs: "Car engine started"

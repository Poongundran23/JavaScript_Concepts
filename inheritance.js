// Inheritance
// multiple inheritance is not allowed in JS i.e., two parents
// multi level inheritance is allowed in JS


// Parent class
class Vehicle{
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    getInfo(){
        console.log(`${this.name} ${this.model} is ${this.price}`);
    }

    getFuel(){
        console.log('Fuel : Diesl');
    }

    getEngine(){
        console.log('Starting Engine...');
    }
}

// child constructor
class Cars extends Vehicle{
    constructor(name, model, price, fuel){
        super(name, model, price);
        this.fuel = fuel;
    }

    driver(){
        console.log(`Driving the car ${this.name} with ${this.fuel}`);
    }
}

// creating object for class Car
const fiatl = new Cars('FLinea', 2015, 750000, 'Petrol');
fiatl.driver();
fiatl.getInfo();
fiatl.getEngine();
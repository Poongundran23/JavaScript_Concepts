// Method overriding is allowed in JS
// The parent class method can be overridden in the child class

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startCar(){
        console.log('Starting the... car');
    }

    stopCar(){
        console.log('Stopping the car..');
    }
}

class Fiat extends Car{
    constructor(make, model, price){
        super(make,model);
        this.price = price;
    }

    startCar(){ // over-ridden method
        console.log('Starting the... Fiat');
    }

    carInfo(){
        console.log(this.make + ' ' + this.model + ' is ' + this.price);
    }
}

const fiat = new Fiat('Fiat', 'Linea', 755500);
fiat.carInfo(); // child class method
fiat.startCar(); // overridden function
fiat.stopCar(); // inherited function
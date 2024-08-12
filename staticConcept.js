// static concept in JS
// We can create a static variables and static methods in JS
// We can't define any keyword for a static variable say var,const or let
// To call a static variable or a method, call it by the Class name not by the object
// You can't override the static variable

class Car{
    static wheels = 4; // static variable

    constructor(name, model, price, wheels){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels = wheels;
    }

    static startCar(){ // static method
        console.log('Car is starting');
    }

    carInfo(){
        console.log(`${this.name} of ${this.model} with ${this.wheels} is Rs.${this.price}`);
    }

    static stopCar(){
        console.log('Car is stop');
    }
}

const fiat = new Car('Fiat', 'Linea', 750000, 24); // here wheels is class level. So JS allows same variable at static and class level
fiat.carInfo();
console.log(Car.wheels); // calling static varaible
console.log(Car.startCar()); // calling static methos
console.log(Car.stopCar());

// Class and constructor
// Duplicate constructor i.e., constructor overloading is not allowed in JS

class Car{
    constructor(brand, variant, model, price){
        this.brand = brand;
        this.variant = variant;
        this.model = model;
        this.price = price;
    }

    refuel(){
        console.log(this.brand + ' Car is refueled');
    }
}

// creating object for the class using new keyword
const fiat = new Car('Fiat', 'Linea', 2015, 850000);
console.log(`${fiat.brand} ${fiat.variant} model ${fiat.model} costs Rs.${fiat.price}`);
console.log(fiat.refuel());


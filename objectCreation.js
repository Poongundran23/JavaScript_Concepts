// Object creation

//1. Object literals
const emp = {
    name: 'Raju',
    age: 34,
    group: 'C sec'
};

console.log(emp.name);
console.log(emp.group);

//2. Constructor function
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const car1 = new Car('Fiat', 'Linea', '780000');
console.log(car1.brand + ' ' + car1.model + ' is ' + car1.price);

//3. Class style
class Product{
    constructor(nam, product, cost){
        this.nam = nam;
        this.product = product;
        this.cost = cost;
    }

    addToCart(){
        console.log(`${this.product} is for ${this.cost} purchased`);
    }
}

const pr1 = new Product('Ram', 'MacBook', 150000);
console.log(pr1.nam);
pr1.addToCart();

//4. Object.create(); with some prototype object.
const employeePrototype = {
    printInfo:function() {
        console.log(`emp name is ${this.name}`);
    }
};

const e1 = Object.create(employeePrototype);
e1.name = 'Tom';
e1.printInfo();

//5. using Factory functions: returns an object:
function department(deptName, hod){
    return {
        deptName: deptName,
        hod: hod,
        getDeptInfo:function(){
            console.log(`My dept is ${this.deptName} and hod is ${this.hod} years old.`);
        }
    }
}

const d1 = new department('ECE', 'Santa');
console.log(d1.deptName);
console.log(d1.hod);
d1.getDeptInfo();

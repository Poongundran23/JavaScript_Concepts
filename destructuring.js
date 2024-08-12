// assigning any array or object to variable is called destructuring

// Eg.1
const nums = [1,2,3];
const [a,b,c] = nums;

console.log(a);
console.log(b);
console.log(c);

// Eg.2
const langs = ['java', 'Js', 'Python', 'Ruby'];
const [m, n, ...ops] = langs;

console.log(m);
console.log(n);
console.log(ops);

// Eg.3 - object
const user = {
    name: 'Name',
    age: 32,
    job: 'IT'
};
const {name, age, job, city = 'TVP'} = user;  // extra variable can also be defined with default value

console.log(name);
console.log(age);
console.log(job);
console.log(city);

// function parameter without destructuring
function userInfo(person){
    console.log(person.firstName + ' ' + person.lastName);
}

const person = {
    firstName: 'Me',
    lastName: 'you'
};

userInfo(person);

// with destructuring
function printInfo({fName, lname}){
    console.log(fName + ' ' + lname);
}

const userI = {
    fName: 'FirstName',
    lname: 'LastName'
};

printInfo(userI);

// Eg.3
function heIs([human, lord]){
    console.log('he is ' + human +'; the lord is ' + lord);
}

const evil = ['Ape', 'Human'];

heIs(evil);
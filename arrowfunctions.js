// Arrow functions

const square = num => num * num;
console.log(square(5));

const printHi = () => 'Hi!'
console.log(printHi());

const add = (a, b) => a + b; //for more than one params, need to pass inside the parantheses
console.log(add(4, 5));

// passing default values
const greet = (uname = 'guest', age = 0) => 'Hello, ${uname}! you are ${age} years old!';
console.log(greet());

// rest parameters
const sum = (...numbers) => numbers.reduce((acc, num) => (acc+num), 0);
console.log(sum(23,34,53,2,5,43));

// const with rest param
const browsers = (brname='chrome', ...details) => {
    console.log('Browser: ${brname}');
    console.log('Details:', details);
};
browsers('firefox', '115.11', 'mozilla', 'headless');

// max number using Math
const max = (a,b,c) => {
    return Math.max(a,b,c);
}
console.log(max(5,7,9));

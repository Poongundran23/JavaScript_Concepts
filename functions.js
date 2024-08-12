// 1. function declaration

function add(a, b){
    return a+b;
}

console.log(add(2,4));

// 2. function expression
const multiply = function(a,b){
    return a * b;
}

const mul = multiply(5,6)
console.log(mul);

// 3. Arrow function
const divide = (n,d) => n/d;

const div = divide(5,6);
console.log(div);

// 4. Function construction
const substraction = new Function('a', 'b', 'return a-b;');
const minus = substraction(5,3);

console.log(minus);

// 5. IIFE (Immediately invoked function expression)
(function(){console.log('server is up');})();

// 6. Generator function - have 'function*' and 'yield' keyword
function* generateNoSequence(){
    yield 1; yield 2; yield 3; yield 4; yield 'five';
}
const seq = generateNoSequence();

console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);

// 7. Annonymous function - no specific name for the function
const sq = [1,2,3,4,5];

// const sqn = sq.map(function(e){
//     return e * e;
// })
//         or

const sqn = sq.map((e) => {
        return e * e;
    })
console.log(sqn);

// 8. Recursive function - use same function internally
function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(4));

// 9. Higher order function -  takes function as an argument
function operate(funcName, a, b){
    console.log(funcName(a, b));
}

operate(add, 4, 5);
operate(multiply, 2, 3);

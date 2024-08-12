
// map function - applies to all elements and return the result

let nos = [1,2,3,4,5];
twice = nos.map((n) => n * 2);
console.log(twice);
// ----------------------------------------------------------------
function convertToFahr(tinc){
    f = (tinc - 32) * (5/9);
    return f;
}

celc = [32, 64, 97, 108];
ctof = celc.map(convertToFahr);
console.log(ctof);


// filter function - to return only true condition elements

let num = [11,12,13,14,15,16];
odd_nos = num.filter((n) => n % 2 != 0);
even_nos = num.filter((n) => n % 2 == 0);
console.log(odd_nos);
console.log(even_nos);
// ----------------------------------------------------------------
let employees = [
    {name:'sara', age:32, gender:'male'},
    {name:'sumi', age:37, gender:'female'},
    {name:'ram', age:22, gender:'male'},
    {name:'sita', age:21, gender:'female'}
]

female_emp = employees.filter((e) => {
    return e.gender == 'female';
})
console.log(female_emp);

emp_more_30_female = employees.filter((e) => {
    return e.age > 30 && e.gender == 'female';
})
console.log(emp_more_30_female);


// reduce function - reduce to one single element
let con = [1,2,3,4,5,6,7,8,9];

count = con.reduce((acc, num) => acc + num, 0);
console.log(count);
// ----------------------------------------------------------------
let top = [23,43,12,54,34,76,45];

max = top.reduce((n1, n2) => {
    if (n1 > n2){
        return n1;
    } else {return n2;}
}, top[0]);
console.log(max);

min = top.reduce((n1,n2) => {
    if(n1 < n2){return n1;}else{return n2;}
}, top[0]);
console.log(min);
// ----------------------------------------------------------------
cart = [
    {name:'shirt', price:800},
    {name:'jeans', price:900},
    {name:'watch', price:1200},
    {name:'hat', price:100}
]

amount = cart.reduce((tot, item) => (tot + item.price), 0);
console.log(amount);

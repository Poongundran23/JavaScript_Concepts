
// var - old way of declaring variable
// can declare locally or functionally or globally
// Re initialization and re-declaration is allowed in the var key
// var is not used much because when its used in conditions the var value will be re initialized


var x = 10; // global variable
function check_var(){
    var y = 20; // functional variable
    console.log(y);
    var x = 30;
}
console.log(x);
check_var();

var same = 'Hi';
var same = 'hello'; // Re-declaration
console.log(same);
same = 'Re Initialized';
console.log(same);

var flag = 'True';
if(true){
    flag = 'False'; // issue with reinitialization
}
console.log(flag);


// let - to use in the conditions
// block scoped
// can be re-initialized but cannot be re-declared

let s1 = 'yes';
if(true){
    let s1 = 'no';
    console.log(s1); // s1 = 'no'
}
console.log(s1); // s2 = 'yes'

function check_let(){
    let me = 'Poongundran';
}
// console.log(me);  // this will raise error - not defined

// scoping var and let
function scoping_let_var(){
    var v = 1;
    if(true){
        let v = 2;
        console.log(v); // print 2
    }
    console.log(v); // print 1
}
scoping_let_var();


// const - can't re-declare or re-initialize once declared

const days = 7;
console.log(days);

// typeof - to find the type of variables
let nm = 'name';
console.log(typeof nm);

d = 123;
console.log(typeof d);

f = {name: 'sara', 'age': 30};
console.log(typeof f);

g = true;
console.log(typeof g);

j = [1,2,3,4,5];
console.log(typeof j);

function print(){
    console.log('')
}
console.log(typeof print);

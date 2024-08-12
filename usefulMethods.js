// remove the duplicate element
// 1. using the Set

const dArr = [1,2,1,3,5,2,3,6,7,5,4];
const uArr = [...new Set(dArr)];
console.log(uArr);

// 2. int to str
const num = 23;
console.log(typeof num);
const numStr = 23 + '';
console.log(numStr);
console.log(typeof numStr);
// or
const n = 5;
console.log(typeof n);
const ns = String(n);
console.log(typeof ns);


// 3. float to int
const f = 3.45;
const i = parseInt(f);
console.log(i);

// 4. Check if is a number
const no = 23;
if(typeof no === 'number' && !isNaN(no)){
    console.log(no + 'is a number');
}

// 5. Swap two numbers
let a = 5; let b = 9;
[a, b] = [b, a];
console.log(a);
console.log(b);

// 6. to check if object has a property or not
const emp = {
    name : 'name',
    age : 23
}
if(emp.hasOwnProperty('name')){
    console.log('ye the property is there');
}

// 7. Remove the falsy values: 0, 'False', '', NaN, null, undefined
const vals = [0,1,'', false, 's', null, undefined, 4.5];
const tvals = vals.filter(Boolean);
console.log(tvals);

// 8. Convert cases
const st = 'Hi Man!';
const lost = st.toLowerCase();
console.log(lost);
const upst = st.toUpperCase();
console.log(upst);

// 9. Check if array contains a specific value
const lang = ['java', 'python', 'JS', 'ruby'];
if(lang.includes('JS')){
    console.log('found');
}

// 10. to check an is array is empty
const fruit = ['apple', 'orange'];
if (fruit.length != 0){ console.log('the basket is not empty'); }

// 11. To generate a random number
const max = 2; const min = 100;
const randomNumber = Math.floor(Math.random() * max -min + 1)+ min;
console.log(randomNumber);

// 12. String to number
const strNum = '59';
const numb = parseFloat(strNum);
console.log(numb);

// 13. join the array elements into a string
const words = ['hi', 'mr', 'Poongundran'];
const sentence = words.join(' ');
console.log(sentence);

// 14. get object property
const prof = {
    name : 'name',
    age : 32,
    job : 'QA'
};

console.log(prof['name']);
console.log(prof.age);

// 15. Clone array of an object
const marks = [90, 91, 92, 93, 94];
const marksCopy = [...marks];
console.log(marksCopy);
console.log({ ...prof });

// 16. convert object to array
const stu = {
    name : 'name',
    age : 32,
    job : 'QA'
};

const keyArr = Object.keys(stu);
console.log(keyArr);
const valArr = Object.values(stu);
console.log(valArr);
const keyValArr = Object.entries(stu);
console.log(keyValArr);

// 17. get current date time
const currentDate = new Date;
console.log(currentDate.toLocaleString());
console.log(currentDate.toLocaleTimeString());

// 18. truncate an array
const fews = [0,1,2,3,4,5];
fews.length = 3;
console.log(fews);

// 19. Last element in the array
const nos = [0,1,2,3,4,5];
const lastno = nos.slice(-1);
console.log(lastno);

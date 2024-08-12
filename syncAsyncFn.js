// sync functions execute codes one by one and the order of the execution is followed

//Eg.1
console.log('Start');
for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log('--End--');

//Eg.2

console.log('Sync read start');
const fs = require('fs');
const data = fs.readFileSync('TestFile.txt', 'utf-8');  // sync function
console.log(data);
console.log('Sync Read Done');


// in Async functions the order of execution is not followed

// Eg.1
console.log('Start');
setTimeout(() => {  // setTimeout is an Async function
    console.log('Time out is done');
}, 2000);
console.log('--end--');

// Eg.2
console.log('Async read start');
fs.readFile('TestFile.txt', 'utf-8', (error, data)=> {  // async function
    console.log(data);
})
console.log('async read done');


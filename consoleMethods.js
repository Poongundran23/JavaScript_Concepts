// some console log methods

console.clear();

console.log('hello');
console.error('ERROR!!');
console.warn('Warning!');
console.info('Info.');

const user = {
    name : 'Name',
    age : 32
};

console.log(user);
console.table(user);

const user1 = {
    name : 'Name2',
    age: 37
};

console.table({user, user1});

console.group('Login Group');
console.log('group log');
console.groupEnd();

console.time('Printing 1 to N');
for(let i = 1; i < 6; i++) {
    console.log(i);
}
console.timeEnd('Printing 1 to N');

console.count('count me');  // counts no. repetitions of a particular method

console.assert(10 === 20, 'This assertion failed');

function traceMe(){
    console.trace();
}
traceMe();

console.log("%c I love coding", "color: green; background-color:red; border:solid");
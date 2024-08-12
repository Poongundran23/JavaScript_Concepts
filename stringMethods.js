// length()

console.log('MyLength'.length);

// index position

console.log('PositionAtFifth'[5]);
console.log('CharecterAt5th'.charAt(5));

// indexOf() and lastIndexOf()
console.log('Poongundran'.indexOf('a'));
console.log('Poongundran'.lastIndexOf('n'));

// lower - upper conversion

console.log('ConvertAllLower'.toLowerCase());
console.log('ConvertAllUpper'.toUpperCase());

// slice

console.log('SliceMe'.slice(2, -3));  // -5 is 5th element from left(last is -1) and won't print the last index number

// subString

console.log('SliceMe'.substring(2,5));  // include the last element 

// concatenation
console.log('Poongundran'.concat(' Prabavathi'));

// split - returns an array
const langs = 'Java_JS_Python';
const lArr = langs.split('_');
console.log(lArr[0]);
console.log(lArr[1]);
console.log(lArr[2]);

// includes - returns Boolean
console.log('JavaScript'.includes('Java'));
console.log('JavaScript'.includes('hello'));

// replace and replaceAll
console.log('Dev Environment'.replace('Dev', 'QA'));
console.log('23-10-1992'.replaceAll('-', '/'));

// trim(), trimStart(), trimEnd()
console.log('  Hi I m Fat  '.trim());

// startsWith() and endsWith() - returns Boolean
console.log('JavaScript'.endsWith('pt'));


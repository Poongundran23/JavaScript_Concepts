// arrays
let e_array = [];
let lang = ['java', 'python', 'js'];

// push - to add at last
lang.push('ruby');
console.log(lang);
lang.push('selenium');
console.log(lang);

// pop - to remove last
lang.pop();
console.log(lang);

// shift - to remove and return the first element
lang.shift();
console.log(lang);

// unshift - to add an element in the first index
lang.unshift('java');
console.log(lang);

// splice - to remove the no. of elements from the mentioned index position and add new elements there
// and returns removed elements
let animals = ['dog', 'cat', 'cow', 'buffalo'];
animals.splice(1,2,'lion');
console.log(animals);

// slice - to cut from start index to end index and returns new array
let fruits = ['banana', 'apple', 'fig', 'jamun'];
fav_fruits = fruits.slice(1,3); // won't consider the end index element
console.log(fruits);
console.log(fav_fruits);

// concat - add two arrays and store in a new array
animal_fruits = animals.concat(fruits);
console.log(animal_fruits);

// indefOf - return the first index of the element & if the element not available then will return -1
banana_index = fruits.indexOf('banana');
console.log(banana_index);
guava_index = fruits.indexOf('guava');
console.log(guava_index);

// to get nth element's index of same elements
let colors = ['red', 'green', 'blue', 'red'];
secondRedIndex = colors.indexOf('red', 1) // consider first occurence as 0th
console.log(secondRedIndex);

// includes - to check an element is available or not, return bool
isGreen = colors.includes('green');
console.log(isGreen);

// forEach - callback function to iterate over the array
let nos = [1,2,3,4];
twice = nos.forEach((n) => {
    console.log(n * 2);
} )

// every function - boo
let letn = [1,2,3,4,5];
console.log(letn.every((e) => e < 10));
console.log(letn.every((e) => e < 5));

// some function - bool
let mod = [1,3,4,6,9];
console.log(mod.some((e) => e % 2 == 0));

// find function - finds first satisfying element
let fn = [1,3,4,6,8];
console.log(fn.find((e) => e % 2 == 0));

// reverse() - reverse the array
let frts = ['apple', 'banana', 'cherry', 'durian'];
console.log(frts.reverse());

// sort() - to sort alpha-numeric, numeric first, capital preceds
let products = ['camera', 123, 'Tshirt', 'watch'];
console.log(products.sort());


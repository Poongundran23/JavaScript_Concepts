// Ex.1: Remove duplicate - using the Set constructor

const numbers = [1,2,2,4,3,4,5,6,7];
const names = ['hi', 'he', 'is' , 'hi', 'hey', 'is'];

const uniqueNos = [... new Set(numbers)];
const uniqueName = [... new Set(names)];

console.log(uniqueNos);
console.log(uniqueName);

// Ex.2 Reverse a number
function reverseNumber(num){
    if(num >= 0 && num <= 9){
        return num;
    }

    let reverse = 0;
    while(num != 0){
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return reverse;
}

console.log(reverseNumber(34313));
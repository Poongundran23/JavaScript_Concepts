// Async-Await - modern way of handling the async calls
// used along with promises
// async keyword - used before particular function name
// await keyword -  used for the async steps
// async function(){
//    it will return a promise - mandatory - resolved/rejected
//    sync - no need to wait
//    async - time - await - 5 sec
//    async
// }
// function() {  -  function without async keyword
//    await can't be used
// }
// we can use async without await but not vice versa
// if there is no promise used in async function - it will wrap the result either as a resolved or rejected

// Eg.1 - async function without await
async function f1(){
    return 42;          // async function will always return promise - 42 wrapped as a resolve
}

f1().then(result => {
    console.log(result); 
});

// Eg.2 - async function with returning error
async function f2() {
    throw new Error('This is error from async function');
}

f2().catch(error => {
    console.log(`Error catched ${error}`);
});

// Eg.3 - async with resolve and reject
function getRandomNumber(){
    return new Promise((resolve, reject) => {
        ranNu = Math.random();
        console.log('Random no. '+ ranNu);
        setTimeout(()=>{
            if(ranNu < 0.5){
                resolve('The number is less than 0.5');
            } else {
                reject('The number is large');
            }
        }, 2000);
    });
}

// async function which gets function getRandomNumber
async function getNumberInfo(){
    try {
        const result = await getRandomNumber();
        console.log(result);
    } catch(error) {
        console.log('Error', error);
    }
}

getNumberInfo();  // calling the function
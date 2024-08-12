// In JS, the promises are a way to hande the asynchronous operations in an organised and readable manner
// Promises provide a structure for managing and chaining the asynchronous tasks
// Promises provide syntax for dealing with the asynchronous code compared to traditional callback functions
// Promises are mostly used for operations like making network calls and read/write operations which don't block
// the main thread
// A Promise represents a value that maynot be available yet but will be resolved at some point in future

//Eg.1
const randomNum = new Promise((resolve, reject) => {
    // defining an asyn operation
    setTimeout(() => {
        const randomValue = Math.random();
        if(randomValue > 0.5){
            resolve(randomValue);
        } else {
            reject('Random value is too small');
        }
    }, 2000);
});

randomNum
    .then(result => {  // handler for resolve
        console.log('The promise value fulfilled with value: ', result);
        })
    .catch(error => {  // handler for reject
        console.log('The Promise is rejected with error', error);
    });

// Promise chaining
function getEvenNumber(value, delay){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value % 2 == 0){
                resolve(value);
            } else {
                reject(new Error("Value is not a even number"));
            }
        }, delay);
    })
}

// promise chain
getEvenNumber(4, 1000)
        .then(result => {
            console.log('This is even number: ', result);
            return getEvenNumber(3, 1000);
        })
        .then(result => {
            console.log('This is even number:', result);
        })
        .catch(error => {
            console.error('Promise chain error:', error.message);
        })


// Promise.all() - promise.all() will return the value only if all the functions are resolved.
// if even any one function is rejected with error then .all() will return only error

const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1,2,3,4];
            resolve(data);
        }, 1000);
    });
};

const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [5,6,7,8];
            resolve(data);
        }, 1000);
    });
};

const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [9,10];
            resolve(data);
        }, 1000);
    });
};

Promise.all([
    function1(), function2(), function3()
])
.then(dataArray => {
    console.log('All data: ', dataArray);
})
.catch(error => {
    console.error('Error in promise:', error)
});


// Promise.allSettled()
// It returns a single promise that is fulfilled with an array of result objects, one for each promise
// Each result object contains - a status(either resolved or rejected), a value (fulfilled value) or reason(rejected)
// Use case:
// --* When we want to process all the promises, whether they are succeed or failed
// and you want to gather the outcome of the each promise

//Eg.

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from getData');
        }, 1000);
    });
}

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error from getError');
        }, 1000);
    });
}

Promise.allSettled([   // if it is Promise.all() - it will return only the error
    getData(), getError()
])
.then(results => {
    results.forEach(result => {
        if(result.status === 'fulfilled'){
            console.log('Value: ', result.value);
        } else {
            console.log('Error: ', result.reason);
        }
    });
});


// Promise.race() - .race() function will return the result of the first completing promise
// say for 2 promises if resolve takes short time then the result will be resolved or vice versa

// Eg.1

const resolvePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolve result');
        }, 500); // this is racing first
    });
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Reject result');
        }, 1000);
    });
}

Promise.race([
    resolvePromise(), rejectPromise()  // resolve will give the first outcome
])
.then(result => {
    console.log('Outcome: ', result);
})
.catch(error => {
    console.log('Outcome: ', error);
});


// Promise.any() - used for handling multiple promise values but will return first fulfilled or resolved value
// if all the promise are rejected then it will return combined reject result
// else it will wait until first resolve result

// eg.1

const api1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('API1 result');
        });
    }, 1100);
}

const api2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('API2 result');
        });
    }, 600);  // it is shortest but rejected
}

const api3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('API3 result');
        });
    }, 700);
}

Promise.any([
    api1(), api2(), api3()
])
.then(result => {
    console.log('Any Output: ', result);
})
.catch(error => {
    console.log('Any Error: ', error);
})

// Callback function - a function passed to another function as an arguement
// asyn call/task - after this the callback function will be called

// Basic Example
function greet(name, callback){
    console.log('hi ' + name);
    callback();
}

function welcome(){
    console.log(' Welcome!!!');
}

greet('Sara', welcome);

// callback function with async function
function printInfo(name, callback){
    // async function
    setTimeout(function(){
        console.log('Printing Info of.. ' + name);
        callback('this is called back');
    }, 2000);  // called after 2 sec
}

function displayMsg(msg){
    console.log(msg);
}

printInfo('Sumi', displayMsg);

// ex2
function fetchUserData(userId, callback){
    const users = {
        1 : { id: 1, name : 'Sara' },
        2 : { id: 2, name : 'Poo' }
    }

    const user = users[userId];

    if(user){
        callback(user, null);
    } else {
        callback(null, 'User not found')
    }
}

function dataHandler(user, error){
    if(user){
        console.log('User : ', user);
    } else {
        console.log('Error : ', error);
    }
}

fetchUserData(3, dataHandler);
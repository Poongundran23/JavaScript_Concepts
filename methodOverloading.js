// method overloading is absolutely not possible in JS as method overloading is a compile time feature and 
// JS is a runtime interpreted language

// the latest function will be run by the JS if same name

function print(){
    console.log('.');
}

function print(name){
    console.log(name);
}

function print(name, age){
    console.log(name + age);
}

print('sara', 32);

// to deal with overloading in some cases we can use a logic like this

function browserDetails(name, ver, remote){
    if(typeof ver === 'number' && typeof remote === 'boolean'){
        console.log(`Browser is ${name} v${ver} remote = ${remote}`);
    }
    else if(typeof ver === 'number'){
        console.log(`Browser is ${name} v${ver}`);
    } else {
        console.log(`Browser is ${name}`);
    }
}

browserDetails('chrome', 112.7, true);
browserDetails('firefox', 59);
browserDetails('edge');

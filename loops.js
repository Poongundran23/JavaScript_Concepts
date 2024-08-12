// for loop

const ar = [1,3,5,7,9]
for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}


// for ..of loop

const arr = [1,2,3,4,5];
for (const e of arr){
    console.log(e);
}

// for in loop
arraye = ['hi', 23, 'hello'] // any
for(i in arraye){
    console.log(arraye[i]);
}

// while loop

let p = 0;
while(p < 100){
    console.log(p);
    p = p + 2;
}

// do-whie loop

let h = 0;
do{
    if(h % 2 == 0){
        console.log(h);
    }
    h = h + 1;
}
while (h < 100);

// break
let m = 0;
while(m <= 10){
    if(m == 5){
        console.log('Hey Poongundran');
        break;
    } else {
        console.log(m);
    }
    m = m + 1;
}

// *** for in loop in object
const user = {
    name : 'Poongundran',
    age : 32,
    Job : 'Playing'
}
for(const key in user) {
    console.log(key + ' : ' + user[key]);
}


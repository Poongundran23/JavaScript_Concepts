// Coffee machine with promise chaining

// Prepare the coffe machine
// Grind codde beans
// Boil the water
// Pour boiled water in the cup
// Add ground coffee to the cup
// Stir the coffee
// Enjoy the coffee

function startTheCoffeeMachine(){
    return new Promise((resolve) => {
        console.log('Preparing the coffee machine');
        setTimeout(()=> {
            resolve('Coffee machine is ready..');
        }, 2000);
    }); 
}

function grindCoffeBeans(){
    return new Promise((resolve) => {
        console.log('Grinding coffee beans');
        setTimeout(()=> {
            resolve('Coffee beans grounded..');
        }, 1000);
    });
}

function boilTheWater(){
    return new Promise((resolve) => {
        console.log('Boiling the water');
        setTimeout(()=> {
            resolve('Water boiled..');
        }, 1500);
    });
}

function addBoiledWaterToTheCup(){
    return new Promise((resolve) => {
        console.log('Adding boiled water')
        setTimeout(()=>{
            resolve('Boiled water added to cup..')
        }, 1000);
    });
}

function addGroundCoffee(){
    return new Promise((resolve) => {
        console.log('Adding ground coffe');
        setTimeout(() => {
            resolve('Ground coffe added..');
        }, 500);
    });
}

function stirCoffee(){
    return new Promise((resolve) => {
        console.log('Stirring coffee');
        setTimeout(() => {
            resolve('Coffee being stirred..');
        }, 500);
    });
}

function enjoyCoffee(){
   console.log('Enjoy the coffee!!')
}

// Callback Hell - each function having the callback as parameter
// startTheCoffeeMachine(function (coffeMachineStatus){
//     grindCoffeBeans(function (grindBeansStatus){
//         boilTheWater(function (boilWaterStatus){
//             addBoiledWaterToTheCup(function (boilwaterInCup){
//                 addGroundCoffee(function (groundCoffeeInCup){
//                     stirCoffee(function (enjoyCoffee){
//                         enjoyCoffee(finalCoffe);
//                     })
//                 })
//             })
//         })
//     })
// })

// Callback Hell with arrow function
// startTheCoffeeMachine((coffeMachineStatus) => {
//     grindCoffeBeans((grindBeansStatus) => {
//         boilTheWater((boilWaterStatus) => {
//             addBoiledWaterToTheCup((boilwaterInCup) => {
//                 addGroundCoffee((groundCoffeeInCup) => {
//                     stirCoffee((enjoyCoffee) => {
//                         enjoyCoffee(finalCoffe);
//                     })
//                 })
//             })
//         })
//     })
// })


// Promise Chaining
startTheCoffeeMachine((coffemachineStatus) => {
    console.log(coffemachineStatus);
    return grindCoffeBeans();

})
.then((groundCoffeStatus) => {
    console.log(groundCoffeStatus);
    return boilTheWater();
})
.then((boiledWaterStatus) => {
    console.log(boiledWaterStatus);
    return addBoiledWaterToTheCup();
})
.then((boiledWaterInCup) => {
    console.log(boiledWaterInCup);
    return addGroundCoffee();
})
.then((groundCoffeeInCup) => {
    console.log(groundCoffeeInCup);
    return stirCoffee();
})
.then((coffeeStirStatus) => {
    console.log(coffeeStirStatus);
    return enjoyCoffee();
})
.catch(error => {
    console.log('Error: ', error);
})


// Using Node to find cityData.js
let cities = require(`./cityData.js`);

// console.log(cities);
cities.list.forEach(function(element){
    console.log(element.name);
});

// Returns value of the first element in the array
cities.list.find(function(obj){});


for(let i = 0; i < 10; i++){
    if(i === 5){
        // break is used to terminate the loop early
        continue;
    }
   // console.log(i);  
}

// Default Param If nothing is passed to it
function sum_numbers(a,b=5){
    return a+b;
}
console.log(sum_numbers(1));




function run(callback, num1, num2){
    const x = callback(num1, num2);
    return x;
}

console.log(run(subtract, 2, 5));
console.log(run(add, 2 , 5));


function subtract(a,b){
    return a-b;
}

function add(a,b){
    return a+b;
}
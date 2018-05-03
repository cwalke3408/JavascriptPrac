
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


// Arrays and Functions are just Objects but special
const arr = [];
console.log(typeof(arr));
const obj = {};

const func = function(){
    console.log("Test");
}
console.log(typeof(func));

// Objects are a combination of properties (keys) and values
// Sort of key:value pair 
const objSyntax = {
    property: "value2"
}

// Adding property and Array to the Object
objSyntax.property;
objSyntax.table2 = [`Toby`, `Noelle`];
console.log(objSyntax);

const student = {
    name: `Amos`,
    profession: `Developer`,
    languages: [
        `Java`,
        `JavaScript`
    ], 
    sayHello: function(){
        console.log("Habari");
        return "Hello"
    }
}
console.log(student.sayHello());

// Bracket Notation vs Dot Notation
console.log(student.name);
console.log(student[`name`]);
//console.log(student[name]);  ERROR


console.log("HELLo There everyone");

// VARIABLES
// Same as is inevery other langauge.  A var is a place to stash something
// (a number, string, an array, object, boolean, etc).  that you 
// wrtie yourself everytime, but a var is faster
/*
    Data SVGUnitTypes
    1. String 
    2. Number (float, double) or (int)
    3. Boolean (true, false)
    4. Array 
    5. object
    6. Symbol
*/

// JS variables are made dynamically like Python, Ruby, Php. 
// That means you don't have to de3clare the type. 
// It's interptor job

// 3 ways to declare a variable in JS.
var x = 9;
console.log(x);

// Let will make the variable a block level variable
// for(var i = 0; i < 10; i++){
//     console.log(i);    
// }
// console.log("value after loop: " , i);
// i = 12;

// for(let i=0; i < 10; i++){
//     console.log(i);
// }
// console.log("value of i after the loop: ", i);

var s;
console.log(s);
s = 3;

/* LET: is more strict */
let t;
console.log(t);
t = 3;

let firstName = "Christian";
let lastName = "Walker";
const awesomeGuy = `${firstName} ${lastName}`;
console.log(awesomeGuy);



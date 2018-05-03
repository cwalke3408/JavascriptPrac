
// Using Node to find cityData.js
let cities = require(`./cityData.js`);

// console.log(cities);
cities.list.forEach(function(element){
    //console.log(element.name);
});


// Returns value of the first element in the array
let cityName = "Kanth";
let foundCity = cities.list.find(function(obj){
    return obj.name == cityName;
});
console.log(`City is ${foundCity}\n`);
console.log(`Todays Temp ${foundCity.main.temp}\n`);



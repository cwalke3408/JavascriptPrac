let city = require(`./cities.js`);

//console.log(city); 

// The file cities.js has the top 39 US cities by population as of the 2015 population estimate. It includes a variety of other infromation.

// 1. Sort them by the 2010 census (lastCensus)
// 2. Separate out the "latLon" field into two fields, lat and lon
// 3. What was the average population change in %?
// 4. If you find both the "land area" rank and the "change" rank and take the average of both, what city has the highest rank? 

function compare2010Census(a, b){
    // console.log(a.city);
    // console.log(b.city);
    //return (a > b) ? a : b;
    return (a.city.city > b.city.city) ? a.city.city : b.city.city;
}

// console.log(compare2010Census('a4','b3'));

console.log(city.sort(compare2010Census));

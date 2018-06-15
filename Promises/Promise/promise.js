// Promises... 

// * JavaScript is async.  (non blocking)
// * Can never do more than one thing at a time
// * Will run any line that can run right now

/*
console.log("1");
setTimeout(() => {console.log("2")}, 0);

console.log('3');

for(let i = 0; i < 10000000; i++){
    // looping...
}
console.log("Loop Done");
*/

// Intial request to get list of movie
// With that list of movies, comes all their id's. 
// Take the id's and get specific info
// With EACH movie data, we want to get the cast list

// $.getJSON(movieURL, (movieData) => {
//     $.getJSON(specificMovieUrl, (thisMovie) => {
//         $.getJSON(specificMovieCastUrl, (castData) => {
//             //finally, we can do something with:
//             // 1. movieData
//             // 2. this Movie
//             // 3. castData
//         })
//     })
// })


// JS libraries to fake promises 
//  - BlueBird
//  - Q 

// What is a Promise
//  - All promise is, is a JS contructor (close) that gives you a few methods 
//  - Hopefully these methods make your code easier to read 
//   Methods:
//     - then 
//     - all 
//     - race 
//     - resolve 
//     - reject 

let myFirstPromise = new Promise();
console.log(myFirstPromise);

//  myFirstPromise.
// myFirstPromise.then(onfullfilled, onrejected)
    // onfullfilled : 
        //  -- A Callback
        // Exacute when Promise is resolved

    // onrejected : 
        //  -- A Callback
        // Exacute when Promise rejected
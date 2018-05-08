
const x = () => {
    console.log(x);
}


// JavaScript will ALWAYS run the next line that can RIGHT NOW.
setTimeout(() => {
    console.log("I am first")
}, 0);

console.log("I am 2nd");
setTimeout(() =>{
    console.log("I am third");
}, 100);

for(let i = 0; i < 100001; i++){
    if(i === 100000){
        console.log("I am forth");
        
    }
}
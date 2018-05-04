// console.log(document);
// console.dir(window);

// When you are in the BhxBrowser.apply.apply. EVERYTHING belongs to the 
// document is just ONE GIANT OBJECT
const dragon = document.getElementById('dragon');
console.log(dragon);
// dragon.innerHTML = `<h1>JavaScript was Here!</h1>`;

// Asnyc Call (Dont't know when the user will click this button)
// Running the code out of order
function rollDice(){
    let rand1 = Math.ceil(Math.random() * 6);
    let rand2 = Math.ceil(Math.random() * 6);

    let dice = document.getElementById('dice');
    dice.children[0].src = `./dragon-assets/d${rand1}.gif`;
    dice.children[1].src = `./dragon-assets/d${rand2}.gif`;
    // console.dir(dice);

    if(rand1 + rand2 > 8){
        document.getElementById('dragon').children[0].src = "./dragon-assets/dragon1.png";
        document.getElementById('dragon').children[0].style.height = "100px";
        document.getElementById('message').innerHTML = "<h1>You have defeated the dragon</h1>"
    }
    
}
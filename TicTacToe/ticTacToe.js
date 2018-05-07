const squares = document.getElementsByClassName('space');

for(let i=0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
        markSquare(squares[i].id);
    });
}

function markSquare(squareID){
    console.log(squareID);
    document.getElementById(squareID).
}

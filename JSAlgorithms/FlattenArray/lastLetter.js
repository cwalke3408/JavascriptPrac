
function lastLetter(str){
    var splited = str.split(' ').map(function(word){
        let lastletter = word.split('')
        lastletter[word.length-1] = word.charAt(word.length-1).toUpperCase();
        return lastletter.join('');  
    });
    return splited.join(' ');
}

let result = lastLetter("today is friday");
console.log(result);

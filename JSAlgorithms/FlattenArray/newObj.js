function frequencyWord (string) {
 var count = {};
 string.split(' ').forEach(function(i) {
    count[i] ? count[i]++ : count[i] = 1;
 });
 return count;
}

console.log(frequencyWord("it is is sunny in in philly"))
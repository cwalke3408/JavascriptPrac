function splitObj(inputString){
    let obj = {};
    let splitedString = inputString.split(" ");
    splitedString.forEach(element => {
        if(element in obj){
            obj[element]++;
        } else {
            obj[ element ] = 1
        }
    });
    console.log(obj)
}

splitObj("the day is sunny the the the sunny is is")

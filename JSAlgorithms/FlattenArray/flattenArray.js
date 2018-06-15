
let z =0;
console.log(flattenArray([1,[2],[3,[[5]]]]).forEach((element)=>{z += element}));
console.log(flattenArray([1,[2],[3,[[4]]]]));
console.log(`z = ${z}`);

function flattenArray(unflattenArray){

    let arr = [];
    unflattenArray.forEach(element => {
        isFinite(element + "") ? arr.push(parseInt(element+"")) : flattenArray(element).forEach((num)=>{
            arr.push(num);
        });
    });

    return arr;
}

        // if(isFinite(element + "")){
        //     arr.push(parseInt(element+""));
        // } else {
        //     flattenArray(element).forEach((num)=>{
        //         arr.push(num);
        //     });
        // }  
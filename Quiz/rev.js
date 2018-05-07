// Check Github Contributions

function reverse(str){
    let reverseArr = [];

    // Split array loop through each char.
    str.split('').forEach(element => {
        //Insert letter to the front of reverseArr
        reverseArr.splice(0, 0, element);
    });;

    return reverseArr.join('');

}

console.log(reverse("It is Friday"));

let colors = [
    {
        colorName: 'red',
        r: 255,
        b: 0,
        g: 0
    },
    {
        colorName: 'pink',
        r: 255,
        b: 182,
        g: 192
    },
    {
        colorName: 'brown',
        r: 210,
        b: 105,
        g: 30
    },
    {
        colorName: 'cyan',
        r: 0,
        b: 255,
        g: 255
    },
]

// let ans = colors.filter(function(elem){
//     return (elem.b > 100 && elem.g > 100);
// });

let ans = colors.filter(elem =>
    (elem.b > 100 && elem.g > 100)
);
console.log(ans);


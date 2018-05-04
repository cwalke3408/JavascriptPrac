
class doMath{
    static add(x,y){
        return x+y;
    }
    static substract(x,y){
        return x-y;
    }
    static double(x){
        return x*x;
    }
}

console.log(doMath.add(2,3));
 

module.exports = doMath;
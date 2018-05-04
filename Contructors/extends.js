class Car{
    constructor(make, model, mpg, topSpeed){
        this.make = make;
        this. model = model;
        this. mpg = mpg;
        this.topSpeed = topSpeed;
    }

    start(){
        console.log("Vroom Vroom");
    }
}

class ElectricCar extends Car{

    constructor(make, model, maxDistance, topSpeed){
        super(make, model, null, topSpeed);
        this.maxDistance = maxDistance;
    }
}

const tobysCar = new ElectricCar(`Tesla`, `Model S `, `200 miles`, `180 mph`);
console.log(tobysCar);
tobysCar.start();

const Vehicle = class{
    constructor(name, wheel){
        this.name = name,
        this.wheel = wheel
    }

    introduceYourself = function(){
        console.log(`This is: ${this.name}, has ${this.wheel} wheel`);
    }
}

let aVehicle = new Vehicle("Mitsubishi Evo Lancer", 4);
aVehicle.introduceYourself();


const SemiVehicle = class extends Vehicle{
    constructor(){
        super("Something", 7);
    }
}

let aSemiVehicle = new SemiVehicle();
aSemiVehicle.introduceYourself();


//Note this: aSemiVehicle.name = "asdasd";
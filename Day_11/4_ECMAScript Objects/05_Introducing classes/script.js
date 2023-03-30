const chair = class{
    constructor(description, wheels){
        this.description = description,
        this.wheels = wheels
    }

    Introduce = function() {
        console.log(`Description: ${this.description} wheels: ${this.wheels}`)
    }
}


let aChair = new chair("exdescription", 4);
console.log(aChair);
aChair.Introduce();
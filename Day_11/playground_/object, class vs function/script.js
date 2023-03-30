const abc = function(){
    console.log("asda");
}


abc();



const eeee = {
    name: "something",
    length: 120,
    gg: function(){
        console.log("GGasdas" + this.length);
    }
}

eeee.gg();



const def = function(name, length){
this.name = name,
this.length = length
this.introduce = function(){
    console.log("Name is:" + this.name);
}
this.aassdd = function(){
    console.log("Something");
}
}

let x = new def(name = "aabbcc", 12);
x.introduce();
x.aassdd();




const fed = class{
    constructor(name, length){
        this.name = name,
        this.length = length
    }

    introduce = function(){
        console.log("Name is:" + this.name);
    }
}


let y = new fed(name = "ccbbaaa", 21);
y.introduce();
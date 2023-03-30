//repat(times)

let Glr = "Gloria";
console.log(Glr.repeat(10));

const ex = {
    say(times){
        console.log("Say".repeat(times))
    },
    hello: function(times){
        console.log("Hello ".repeat(times))
    }
}

ex.say(20);
ex.hello(10);



const Glitter = class{
    constructor(name, times){
        this.name = name,
        this.times = times
    }

    greet(){
        console.log(this.name.repeat(this.times));
    }
}


let gold = new Glitter("IDK", 22);
gold.greet();



let Cat = {
    meow(times){
        console.log("Meow! ".repeat(times));
    },
    purr(times){
        console.log("Purr! ".repeat(times));
    },
    snore(times){
        console.log("snore..zzz ".repeat(times));
    }
}

Cat.snore(5);
Cat.purr(10);
Cat.meow(15);


let Dog = {
    a: [],
    bark(times){
        for(let f = 0; f < 2; f++){
            this.a.push("bark");
        }
    }
}

Dog.bark(2);
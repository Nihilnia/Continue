const person = {
    name: "Gloria",
    hobbies: ["a", "b", "c"],
    daHobbies: function(){
        let _this = this; //have to use it
        this.hobbies.forEach(function(f){
            let result = `${_this.name} likes to do: ${f}`;
            console.log(result);
        })
    }
}

//Vanilla has not


person.daHobbies();

//Arrow functions has the 'this' keyword


const person_2 = {
    name: "Gloria",
    hobbies: ["a", "b", "c"],
    daHobbies: function(){
        this.hobbies.forEach((f) => {
            let result = `${this.name} likes to do: ${f}`;
            console.log(result);
        })
    }
}

person_2.daHobbies();



const person_3 = {
    name: "AAAAA",
    hobbies: ["a", "b", "c"],
    daHobbies: function(){
        this.hobbies.forEach(f => console.log(`${this.name} likes to do: ${f}`));
    }
}

person_3.daHobbies();
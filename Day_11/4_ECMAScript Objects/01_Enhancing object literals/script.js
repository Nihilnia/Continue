function IDK(name = "defName"){
    return{
        name,
        yell: function(){
            console.log(`${name.toUpperCase()}!!`);
        }
    }
}

console.log(IDK('smt').name);
IDK("hotelUgly").yell();
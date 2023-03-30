let addF = function(x = 1, y = 2, z = 3){
    let result = x + y + z;
    return result;
}

console.log(addF());
console.log(addF(2, 3, 56));

//You dont have to pass all the paremeter/ s
console.log(addF(x = 1, y = 1));


let sayHello = function(name = "defName", age = 29){
    console.log(`Hi it' s ${name}, at age ${age}`);
}

sayHello("Nihil");
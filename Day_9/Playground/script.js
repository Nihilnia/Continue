//Functions that waits the arguments

const exFunc = function(event, incominObj){
    console.log("Preventing def behavior");
    event.preventDefault();
    console.log(event);
    console.log(incominObj.name);
}


const bioMachine = function(name, age){
    this.name = name,
    this.age = age,

    introduceYourself = function(){
        console.log(`This is: ${this.name}, age: ${this.age}`);
    }
}

let bioM_01 = new bioMachine("Idk", 12);


let exBtn = document.querySelector("#exButton");

exBtn.addEventListener('click', function(e){
    exFunc(e, bioM_01);
})

console.log("With querySelectoAll, (turns nodeList so we can use foreach)")
let elementzLi = document.querySelectorAll("li");
elementzLi.forEach((f, x) => {
    console.log(`${x}.Li: ${f.innerText}`);
})


console.log("With className")
let elementzLi_2 = document.getElementsByClassName("abc");
elementzLi_2.forEach((f, x) => {
    console.log(`${x}.Li: ${f.innerText}`);
})

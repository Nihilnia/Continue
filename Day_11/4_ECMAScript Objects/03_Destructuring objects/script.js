const computer = {
    name: "A computer",
    Cpu: "intel",
    Gpu: "Nvidia"
}


console.log(computer);
console.log(computer.name);
console.log(computer.Cpu);
console.log(computer.Gpu);



//Destructuring

const {name, Cpu, Gpu} = {
    name: "A computer",
    Cpu: "intel",
    Gpu: "Nvidia"
}

console.log(name);


//Expand the knowledge

const vacation = {
    destination: "Estonia",
    travelers: 2,
    activity: "IDK",
    cost: "too expensive"
}


function encourage({destination, activity}){
    return `Cmon, you can go to ${destination} for ${activity}`;
}

console.log(encourage(vacation));


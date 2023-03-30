let person = {
    _list: [],
    set addPerson(name){
        this._list.push(name);
    },
    get personList(){
        return this._list.join(", ");
    }
}

person.addPerson = "Gloria_1";
person.addPerson = "Gloria_2";
person.addPerson = "Gloria_3";
person.addPerson = "Gloria_4";
console.log(person.personList);



//Without setter and getter
let bioMachine = {
    _list: [],
    addPerson(name){
        this._list.push(name);
    },
    getbioMachines(){
        return this._list.join(", ");
    }
}


bioMachine.addPerson("bM_01");
bioMachine.addPerson("bM_02");
bioMachine.addPerson("bM_03");
bioMachine.addPerson("bM_04");

console.log(bioMachine.getbioMachines());


//AT Classes


const Hike = class{
    constructor(distance, pace){
        this.distance = distance,
        this.pace = pace
    }

    get lengthInHours(){
        return `${this.calculateLength()} hours`
    }

    calculateLength(){
        return this.distance / this.pace;
    }
}


let f = new Hike(10, 2);
console.log(f.lengthInHours);
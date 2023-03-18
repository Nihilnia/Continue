/*
JavaScript is prototype based oop.

*/

const person = {
  name: "Default",
  age: -1,
  purpose: false,
  bornAt: -1,
  something: {
    a: "aaa",
    b: "bbb",
    somethingMore: function () {
      console.log("a: ", this.a, "b: ", this.b);
    },
  },

  greetItself() {
    console.log(
      `%cHi, it' s ${this.name}, age: ${this.age} and the purpose: ${
        this.purpose == true ? "Known" : "Unknown"
      },`,
      "color: orange"
    );
  },

  /* There is two way to declare a function in an object:
  1- functionName(){
    things.
  };

  2- functionName: function(){
    things.
  };


  Mostly, objects creating by using 'const',
  simply because we wouldn' t wanna change the object itself.
  We just wanna change the properties etc.


  */

  changeItself(nName, nAge, nPurpose) {
    (this.name = nName), (this.age = nAge), (this.purpose = nPurpose);
  },

  backToDefault() {
    (this.name = "Default"), (this.age = -1), (this.purpose = false);
  },

  calculateTheAge: function (whenBorn) {
    var xDate = new Date();
    this.age = xDate.getFullYear() - whenBorn;
  },
};

console.log(person.something.a);
console.log(person.something.b);

person.something.somethingMore();

// ########################
console.log("########################");
var queries = ["name", "age", "purpose", "bornAt"];

queries.forEach((f) => {
  console.log(f, person[f]);
});

console.log("Name with dot: ", person.name);

var query = "name";
console.log("Name with square brackets: ", person[query]);

person.greetItself();

console.log("After the change:");

person.changeItself("Gloria", 0, true);
person.greetItself();

console.log("backToDefault:");
person.backToDefault();
person.greetItself();

console.log("Calculate the age");
person.calculateTheAge(2018);
person.greetItself();

// var people = [
//   { name: "Gloria", surname: "noneee", age: 3 },
//   { name: "Nihil", surname: "Nia", age: 27 },
//   { name: "IDK", surname: "KDI", age: 0 },
// ];

// for (let f = 0; f <= people.length; f++) {
//   console.log(people[f].name);
// }

// Constructor

function daMachine(mName = "defName", mPurpose = false, mAge = -2) {
  this.name = mName;
  this.purpose = mPurpose;
  this.age = mAge;

  this.introduceYourself = function () {
    console.log(
      `Hi, it's ${this.name}, purpose ${this.purpose}, age ${this.age}, `
    );
  };
}

//Arrayz of the machinez
var allOfEm = [
  new daMachine(),
  new daMachine((mName = "machine_02"), (mPurpose = false), (mAge = 20)),
  new daMachine((mName = "machine_03"), (mPurpose = true), (mAge = 30)),
  new daMachine((mName = "machine_04"), (mPurpose = false), (mAge = 40)),
  new daMachine((mName = "machine_05"), (mPurpose = true), (mAge = 50)),
];

allOfEm.forEach((f) => {
  f.introduceYourself();
});

const example = {
  name: "something",
  nestedObject: {
    nestedName: "nestedSomething",
    nestedFunction: () => {
      console.log(this.nestedName);
    },
  },
};

example.nestedObject.nestedFunction();

example.prototype.sayHi = function () {
  console.log("Hello mfs.");
};

const example_2 = {
  idk: "idk",
};

// example_2.prototype = Object.create(example.prototype);
// example_2.prototype.constructor = example_2;

// example_2.sayHi();

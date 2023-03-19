const person = {
  name: "Idk",
  changeTheName: function (newName = "notGiven") {
    this.name = newName;
  },

  introduceYourself: function () {
    console.log(`Hi, it' s ${this.name}`);
  },
};

console.log("Name function not used yet: ");
console.log(person.name);

console.log();
console.log("Name function used:");
person.changeTheName("New name");
console.log(person.name);

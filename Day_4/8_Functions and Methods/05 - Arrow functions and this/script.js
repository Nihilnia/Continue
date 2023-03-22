window.something = 100;

const pack = {
  name: "Da Pack",
  something: 20,

  newSomething: function (nS) {
    console.log("this.something inside the object: ", this.something);
    this.something = nS;
    console.log("this.something after the update: ", this.something);
    (function () {
      console.log(
        "this.something with nested (without arrow) function: ",
        this.something
      );
    })();

    (() => {
      console.log(
        "this.something with nested (with arrow) function: ",
        this.something
      );
    })();
  },
};

//'Basically' arrow function take the nearest one,
//Oldschool functions takes the global

pack.newSomething(4);
pack.newSomething(7);

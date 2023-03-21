/*
1 Pass value to a function inside the parenthesis.
2 Refer to the current object as "this".


*/

const song = {
  name: "i_$uss",
  length: 3.38,

  changeTheSong: function (newName = "unknown", newLength = 0.0) {
    (this.name = newName), (this.length = newLength);
  },
};

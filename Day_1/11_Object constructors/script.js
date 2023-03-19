const playlist = function (name = "defName", length = "defLength") {
  (this.name = name), (this.length = length);

  this.introduce = function () {
    console.log(`Name: ${this.name}, length: ${this.length}`);
  };
};

export default playlist;

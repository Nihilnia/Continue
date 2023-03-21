const playlist = class {
  constructor(name = "defName", length = "defLenght") {
    (this.name = name), (this.length = length);
  }

  introduce() {
    console.log(`Name: ${this.name}, length: ${this.length}`);
  }
};

export default playlist;

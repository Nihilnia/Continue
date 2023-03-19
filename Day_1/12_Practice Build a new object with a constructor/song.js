const Song = class {
  constructor(
    name = "Unknown name",
    genre = "Unknown genre",
    lenght = 0.0,
    artist = "Unknown Artist",
    isBand = false
  ) {
    (this.name = name), (this.genre = genre), (this.lenght = lenght);
    (this.artist = artist), (this.isBand = isBand);
  }

  showTheData = function () {
    console.log(`- - - - -
    Name: ${this.name},
    Genre: ${this.genre},
    Length: ${this.lenght},
    Artist: ${this.artist},
    Name: ${this.name},
    Is it a band?: ${
      this.isBand == true ? "Yes it's a band." : "No it's not a band."
    }
- - - - -`);
  };

  changeTheData = function (
    newName = this.name,
    newGenre = this.genre,
    newLength = this.lenght,
    newArtist = this.artist,
    newIsBand = this.isBand
  ) {
    (this.name = newName),
      (this.genre = newGenre),
      (this.lenght = newLength),
      (this.artist = newArtist),
      (this.isBand = newIsBand);
  };
};

export default Song;

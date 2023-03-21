var dDate = new Date();

const Song = class {
  constructor(
    name = "Unknown name",
    genre = "Unknown genre",
    lenght = 0.0,
    artist = "Unknown Artist",
    isBand = false,
    dateOfCreation
  ) {
    (this.name = name), (this.genre = genre), (this.lenght = lenght);
    (this.artist = artist),
      (this.isBand = isBand),
      (this.dateOfCreation = dateOfCreation);
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
    (This song added to the library at: ${this.dateOfCreation})
- - - - -`);
  };

  changeTheData = function (
    newName = this.name,
    newGenre = this.genre,
    newLength = this.lenght,
    newArtist = this.artist,
    newIsBand = this.isBand,
    newDateOfCreation = this.dateOfCreation
  ) {
    (this.name = newName),
      (this.genre = newGenre),
      (this.lenght = newLength),
      (this.artist = newArtist),
      (this.isBand = newIsBand);
    this.dateOfCreation = newDateOfCreation;
  };

  calculateTheAge = function () {
    var dDate = new Date();
    var createdAt = new Date(this.dateOfCreation);
    var elapsed = createdAt - dDate;
    var result = Math.floor(elapsed / (1000 * 3600 * 24)) / 365;
    return result;
  };
};

export default Song;

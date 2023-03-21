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
      (this.dateOfCreation = `${dDate.getMonth()}/${dDate.getDay()}/${dDate.getFullYear()} - ${dDate.getTime()}`);
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
    newDate
  ) {
    (this.name = newName),
      (this.genre = newGenre),
      (this.lenght = newLength),
      (this.artist = newArtist),
      (this.isBand = newIsBand);
    this.dateOfCreation = newDate;
  };
};

export default Song;

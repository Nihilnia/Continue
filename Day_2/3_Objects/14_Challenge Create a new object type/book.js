/*

•
Create new object type named "Book"
Use Class, object constructor function, or individual objects
Add properties and methods
Add at least five book objects


*/

const Book = class {
  constructor(
    Name = "Default Name",
    Author = "Default Author",
    PublishDate = 0,
    Genre = "Default Genre"
  ) {
    (this.Name = Name),
      (this.Author = Author),
      (this.PublishDate = PublishDate),
      (this.Genre = Genre);
  }

  showTheData = function () {
    return `
    - - - - -
    The Book
    Name: ${this.Name},
    Author: ${this.Author},
    Publish Date: ${this.PublishDate},
    Genre: ${this.Genre},
    - - - - -
    `;
  };

  calculateTheAge = function () {
    var dDate = new Date();
    var currentYear = dDate.getFullYear();
    var result = currentYear - this.PublishDate;
    return result;
  };

  changeTheData = function (newName, newAuthor, newPublishDate, newGenre) {
    (this.Name = newName),
      (this.Author = newAuthor),
      (this.PublishDate = newPublishDate),
      (this.Genre = newGenre);

    console.log("Dataz of the book has been changed.");
  };

  beRandom = function () {
    var randomChars = "ABCXYZ";
    var query = ["Name", "Author", "Publish Date", "Genre"];
    query.forEach((f) => {
      for (let x = 0; x <= 3; x++) {
        this[f] += randomChars[Math.floor(Math.random() * 6)];
      }
    });

    PublishDate += 9;
  };
};

export default Book;

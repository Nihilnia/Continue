import playlist from "./script.js"; //put the extension everytime

//Creating without the arguments
var aPlaylist = new playlist();
console.log(aPlaylist);
console.log(aPlaylist.name);
console.log(aPlaylist.length);

//Creating the object using by the class
var maPlaylist = new playlist("Electro Swing", "12h18min23sec");
console.log(maPlaylist.name);
console.log(maPlaylist.length);

//Using the method of the class
aPlaylist.introduce();

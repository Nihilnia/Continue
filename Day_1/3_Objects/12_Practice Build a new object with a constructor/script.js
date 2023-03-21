import Song from "./song.js";

console.log("Creating a song object without any parameter.");
var xSong = new Song();

xSong.showTheData();

console.log("\nCreating a song with parameters.");
var ySong = new Song("Russian Paradise", "rap I guess", 5.19, "Ak-47", true);
ySong.showTheData();

console.log("\nChanging the information of the song created");
ySong.changeTheData("asd", "asda", 7.77, "asdas", false);
ySong.showTheData();

import Song from "./song.js";

const xSong = new Song();
xSong.showTheData();

const ySong = new Song("Clint Eastwood", "IDK", 5.4, "Gorillaz", true);
ySong.showTheData();
ySong.dateOfCreation = "asdasd";
ySong.showTheData();

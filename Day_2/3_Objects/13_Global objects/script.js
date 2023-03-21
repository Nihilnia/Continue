import Song from "./song.js";

var daSong = new Song(
  "Arre Caesar",
  "No idea",
  3.19,
  "Molotov",
  true,
  "August 6, 2017 14:00:00 PST"
);

daSong.showTheData();
console.log(daSong.calculateTheAge());

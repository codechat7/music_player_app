// FileName: data.js

import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Big Dawgs",
      cover:
"	https://i1.sndcdn.com/artworks-Nczg9foZfZMz4oLz-viJpFA-t500x500.jpg",
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Pushpa Pushpa",
      cover:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004210806/DemotivationalPosterfull936506.jpg",
      artist: "Beatmaster B",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chuttamalle",
      cover:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004210619/3408428b23c516b1687c748cb7de7be7.webp",
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
  
    {
      name: "Popular",
      cover:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004210806/DemotivationalPosterfull936506.jpg",
      artist: "Smooth Sax Serenade",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kuruchi Madapethi",
      cover:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004210619/3408428b23c516b1687c748cb7de7be7.webp",
      artist: "Island Rhythms",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
let arr = [
  {
    songName: "Tum Ho",
      url: "/Tum_Ho.mp3",
      songImg: "/Tum Ho.png",
      artist: "Mohit Chauhan ",
      time: "5:21"
  },
  
  
  {
    songName: "Tu Hai Kahaan.",
    url: "/Tu Hai Kahan.mp3",
    songImg: "/Tu-hai-kaha.jpg",
    artist: "aur",
    time: "4:32"
  },
  {
    songName: "ASHIQ TERA",
    url: "/Aashiq_Tera.mp3",
    songImg: "/ASHIQTER.jpg",
    artist: "unknown",
    time: "2:26"
  },
  {
    songName: "Aaoge Tum Kabhi",
    url: "/The_Local_Train_-_Aaoge_Tum_Kabhi__.mp3",
    songImg: "/Aaoge Tum Kabhi.jpg",
    artist: "Local_Train_",
    time: "3:54"
  },


  {
    songName: "Shikayt",
    url: "/AUR_-_SHIKAYAT.mp3",
    songImg: "/Shikayat.png",
    artist: "aur",
    time: "4:25"
  },
  
  {
    songName: "Pahle Bhi Main",
      url: "/Pehle_Bhi_Main.mp3",
      songImg: "/Pahle Bhi Mai.png",
      artist: "Vishal Mishra",
      time: "4:33"
  },
  {
  
    songName: "Ektarfa",
      url: "/Ek_Tarfa.mp3",
      songImg: "/Ektarfa.png",
      artist: "Darshan Raval",
      time: "5:53"
  },
  
  {
    songName: "Mehrma",
      url: "/Mehrama.mp3",
      songImg: "/Mehrama.png",
      artist: "Darshan Raval",
      time: "4:04"
  }
  
];

let val = "";
let song = document.querySelector(".Songs");
let audio = new Audio();
let play = document.querySelector(".play");
flag = 0;
let songIdx = 0;
let nextSong = document.querySelector(".rightarrow");
let pastSong = document.querySelector(".leftarrow")


function SONG() {
  arr.forEach((e, idx) => {
    val += `<div class="song1" id="${idx}">
                          <img src="${e.songImg}" alt="">
                          <h3>${e.songName}</h3>
                          <p>${e.artist}</p>
                          <span>${e.time}</span>
                        </div>`;
  })


  // Tab to edit
}

SONG();
song.innerHTML = val;

function playsong(idx) {
  audio.src = arr[idx].url;
  audio.play();
  // Tab to edit
}

function Nextsong() {
  songIdx = (songIdx + 1) % arr.length;
  audio.play()
  playsong(songIdx)
  // Tab to edit
}

function Pastsong() {
  songIdx = (songIdx - 1 + arr.length) % arr.length;
  audio.play();
  playsong(songIdx);
  // Tab to edit
}


song.addEventListener("click", (data) => {
  let songEl = data.target.closest(".song1");
  if (songEl) {

    let songId = songEl.id;
    audio.src = arr[songId].url;
    audio.play()
    play.innerHTML = `<h3 class="play" > <img src="/pause_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""> </h3>`
    songIdx = parseInt(songId, 10);
    playsong(songIdx);

  }
})

play.addEventListener("click", () => {

  if (flag == 0) {
    play.innerHTML = `<h3 class="play" > <img src="/pause_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""> </h3>`
    flag = 1
    audio.play()
  } else {
    play.innerHTML = `<h3 class="play" > <img src="/play_arrow_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""> </h3>`
    flag = 0
    audio.pause()
  }
})

nextSong.addEventListener("click", () => {
  Nextsong();
})


pastSong.addEventListener("click", () => {
  Pastsong();
})
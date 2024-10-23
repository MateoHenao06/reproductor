const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const playerArtist = document.getElementById('player__artist');
const playerSong = document.getElementById('player__song');
const albumImage = document.getElementById('albumImage');

let currentSongIndex = 0;

const playList = [
  {
    title: 'Chao Lola',
    artist: "Juan Fernando Velazco",
    img: "./images/chaoLola.jpg",
    song: './music/ChaoLola.mp3'
  },
  {
    title: 'Esta noche quiero brandy',
    artist: "Dyango",
    img: './images/estaNocheQuieroBrandy.jpg',
    song: './music/Estanochequierobrandy.mp3'
  },
  {
    title: 'Lamento Boliviano',
    artist: "Los enanitos verdes",
    img: './images/lamentoBoliviano.jpg',
    song: './music/LAMENTOBOLIVIANO.mp3'
  },
  {
    title: 'Mi historia entre tus dedos',
    artist: "Gian Luca Grignani",
    img: './images/miHistoriaEntreTusDedos.jpg',
    song: './music/GianlucaGrignani.mp3'
  },
  {
    title: 'Parecemos Tontos',
    artist: "Enrique Bunbury",
    img: './images/parecemosTontos.jpg',
    song: './music/parecemosTontos.mp3'
  },
  {
    title: 'Sí',
    artist: "Enrique Bunbury",
    img: './images/si.jpg',
    song: './music/Si.mp3'
  },
  {
    title: 'Y al final',
    artist: "Enrique Bunbury",
    img: './images/yAlFinal.jpg',
    song: './music/yalfinal.mp3'
  }
];

function loadSong(songIndex) {
  const song = playList[songIndex];
  audio.src = song.song;
  playerArtist.textContent = song.artist;
  playerSong.textContent = song.title;
  albumImage.src = song.img;
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
  
}

function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}

loadSong(currentSongIndex);

play.addEventListener('click', playSong);
pause.addEventListener('click', pauseSong);
stop.addEventListener('click', stopSong);
forward.addEventListener('click', nextSong);
rewind.addEventListener('click', previousSong);
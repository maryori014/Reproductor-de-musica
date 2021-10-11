const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let cover = document.getElementById("cover");
let controls = document.querySelector(".controls");
 
play_btn.addEventListener("click", () => {
cancion.play();
cover.style.animationPlayState = "running";
controls.style.animationPlayState = "running";
});
 
pause_btn.addEventListener("click", () => {
  cancion.pause();
  cover.style.animationPlayState = "paused";
  controls.style.animationPlayState = "paused";
});

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
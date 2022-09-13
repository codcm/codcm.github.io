const mute = document.createElement("img");
mute.src = "./images/volume-up.png";
mute.classList.add("mute");
document.body.appendChild(mute);

const unmute = document.createElement("img");
unmute.src = "./images/mute.png";
unmute.classList.add("unmute");
document.body.appendChild(unmute);

let smoothAudio = new Audio("./audio/smoothmusic.mp3");
smoothAudio.muted = true;
smoothAudio.loop = true;
smoothAudio.volume = 0.5;

mute.onclick = () => {
  mute.style.display = "none";
  smoothAudio.muted = true;
  smoothAudio.pause();
  unmute.style.display = "block";
};

unmute.onclick = () => {
  unmute.style.display = "none";
  smoothAudio.muted = false;
  smoothAudio.play();
  mute.style.display = "block";
};

const hamBtn = document.querySelector(".ham-btn");
const linkHolder = document.querySelector(".link-holder");
const nav = document.querySelector(".nav");
let clicked = false;

hamBtn.onclick = () => {
  if (clicked == false) {
    clicked = true;
    nav.classList.add("nav-added");
    linkHolder.classList.add("link-holder-added");
  } else {
    clicked = false;
    nav.classList.remove("nav-added");
    linkHolder.classList.remove("link-holder-added");
  }
};

const mute = document.createElement("img");
mute.src = "./images/volume-up.png";
mute.classList.add("mute");
document.body.appendChild(mute);

const unmute = document.createElement("img");
unmute.src = "./images/mute.png";
unmute.classList.add("unmute");
document.body.appendChild(unmute);

gsap.registerPlugin(ScrollTrigger);

let audio = new Audio("./audio/voice.wav");
let smoothAudio = new Audio("./audio/smoothmusic.mp3");
smoothAudio.muted = true;
smoothAudio.loop = true;
smoothAudio.volume = 0.5;

mute.onclick = () => {
  mute.style.display = "none";
  audio.muted = true;
  smoothAudio.muted = true;
  smoothAudio.pause();
  unmute.style.display = "block";
};

unmute.onclick = () => {
  unmute.style.display = "none";
  audio.muted = false;
  smoothAudio.muted = false;
  smoothAudio.play();
  mute.style.display = "block";
};

gsap.from(".learn", {
  duration: 1,
  ease: "power4.out",
  opacity: 0,
  x: "-10%",
  scrollTrigger: {
    trigger: ".learn",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".use", {
  duration: 1,
  ease: "power4.out",
  opacity: 0,
  x: "-10%",
  delay: 0.1,
  scrollTrigger: {
    trigger: ".use",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".be-chosen", {
  duration: 2,
  ease: "power4.out",
  opacity: 0,
  x: "-3%",
  delay: 0.25,
  scrollTrigger: {
    trigger: ".be-chosen",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".level-up", {
  duration: 2,
  ease: "power4.out",
  opacity: 0,
  y: "10%",
  delay: 0.5,
  scrollTrigger: {
    trigger: ".level-up",
    toggleActions: "restart none restart none",
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".quote",
  },
});

tl.to(".quote", {
  x: 0,
  duration: 0.001,
});
tl.call(typewriter);
tl.call(typewritersound);

//typewriter sound
function typewriter() {
  var typed = new Typed(".quote", {
    strings: ["A journey of a thousand miles begins with one step. Lao Tzu"],
    typeSpeed: 25,
    backSpeed: 25,
  });
}

function typewritersound() {
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 2000);
}

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

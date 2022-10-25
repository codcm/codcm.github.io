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

let subContentHolder = document.querySelector(".sub-content-holder");
let subContentHolder2 = document.querySelector(".sub-content-holder2");
let linkHolder = document.querySelector(".link-holder");
let html = document.querySelector("#html");
let css = document.querySelector("#css");
let value = true;
let value2 = true;
let image1 = document.querySelectorAll(".img1");
let image2 = document.querySelectorAll(".img2");
let image3 = document.querySelectorAll(".img3");
let body = document.querySelector("body");
let links = document.querySelectorAll(".links");

let caret1 = document.createElement("img");
caret1.src = "./images/caret-down.svg";
caret1.classList.add("carets");
html.appendChild(caret1);

let caret2 = document.createElement("img");
caret2.src = "./images/caret-down.svg";
caret2.classList.add("carets");
css.appendChild(caret2);

const carets = document.querySelectorAll(".carets");

links[0].setAttribute("href", "homepage.html");
links[1].setAttribute("href", "about.html");
image1.forEach((img) => {
  img.onclick = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    body.appendChild(newDiv);

    let newImg = document.createElement("img");
    newImg.classList.add("newImg");
    newDiv.appendChild(newImg);
    newImg.src = img.src;

    let cancel = document.createElement("div");
    cancel.classList.add("cancel");
    newDiv.appendChild(cancel);
    cancel.innerText = "Close";

    cancel.onclick = () => {
      newDiv.style.display = "none";
    };
  };
});

image2.forEach((img) => {
  img.onclick = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    body.appendChild(newDiv);

    let newImg = document.createElement("img");
    newImg.classList.add("newImg");
    newDiv.appendChild(newImg);
    newImg.src = img.src;

    let cancel = document.createElement("div");
    cancel.classList.add("cancel");
    newDiv.appendChild(cancel);
    cancel.innerText = "Close";

    cancel.onclick = () => {
      newDiv.style.display = "none";
    };
  };
});

image3.forEach((img) => {
  img.onclick = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    body.appendChild(newDiv);

    let newImg = document.createElement("img");
    newImg.classList.add("newImg");
    newDiv.appendChild(newImg);
    newImg.src = img.src;

    let cancel = document.createElement("div");
    cancel.classList.add("cancel");
    newDiv.appendChild(cancel);
    cancel.innerText = "Close";

    cancel.onclick = () => {
      newDiv.style.display = "none";
    };
  };
});

html.onclick = () => {
  if (value == true) {
    subContentHolder.style.display = "inherit";
    carets[0].src = "./images/caret-up.svg";
    value = false;
  } else if (value == false) {
    carets[0].src = "./images/caret-down.svg";
    subContentHolder.style.display = "none";
    value = true;
  }
};

css.onclick = () => {
  if (value2 == true) {
    subContentHolder2.style.display = "inherit";
    carets[1].src = "./images/caret-up.svg";
    value2 = false;
  } else if (value2 == false) {
    carets[1].src = "./images/caret-down.svg";
    subContentHolder2.style.display = "none";
    value2 = true;
  }
};

let contactPageLink = document.createElement("a");
contactPageLink.innerText = "Contact Us";
contactPageLink.classList.add("links");
contactPageLink.setAttribute("href", "contact.html");
linkHolder.appendChild(contactPageLink);
links = document.querySelectorAll(".links");
let allLinks = document.querySelectorAll("a");

let projectPageLink = document.createElement("a");
projectPageLink.innerText = "Project Page";
projectPageLink.classList.add("links");
projectPageLink.setAttribute("href", "https://t.me/learnwithcodecom");
linkHolder.appendChild(projectPageLink);
links = document.querySelectorAll(".links");

const nav = document.querySelector(".nav");

const hamBtn = document.createElement("img");
hamBtn.classList.add("ham-btn");
hamBtn.src = "./images/hamburger.png";
nav.appendChild(hamBtn);
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

const wholeHolder = document.querySelector(".whole-holder");
const openCurriculum = document.createElement("img");
const curriculum = document.querySelector(".curriculum");
openCurriculum.src = "./images/arrow-right.png";
openCurriculum.classList.add("open-cur");
document.body.appendChild(openCurriculum);
let clicked2 = false;
let mustScrolled = false;

openCurriculum.onclick = () => {
  if (clicked2 == false) {
    clicked2 = true;
    clearInterval(time);
    mustScrolled = true;
    mute.classList.remove("mute-added");
    unmute.classList.remove("mute-added");
    openCurriculum.classList.remove("open-cur-added2");
    curriculum.classList.add("cur-added");
    openCurriculum.classList.add("open-cur-added");
    wholeHolder.classList.add("whole-holder-added");
    document.body.style.overflow = "hidden";
  } else {
    clicked2 = false;
    mustScrolled = false;
    curriculum.classList.remove("cur-added");
    document.body.style.overflow = "auto";
    openCurriculum.classList.remove("open-cur-added");
    wholeHolder.classList.remove("whole-holder-added");
  }
};
let time;
time = setTimeout(() => {
  mute.classList.add("mute-added");
  unmute.classList.add("mute-added");
  openCurriculum.classList.add("open-cur-added2");
}, 2000);

window.addEventListener("scroll", () => {
  if (mustScrolled == false) {
    clearInterval(time);
    mute.classList.remove("mute-added");
    unmute.classList.remove("mute-added");
    openCurriculum.classList.remove("open-cur-added2");

    time = setTimeout(() => {
      mute.classList.add("mute-added");
      unmute.classList.add("mute-added");
      openCurriculum.classList.add("open-cur-added2");
    }, 2000);
  }
});

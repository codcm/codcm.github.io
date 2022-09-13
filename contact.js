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

let send = document.querySelector(".send");
let email = document.querySelector(".email");
let invalidEmail = document.querySelector(".invalid");
let nameUser = document.querySelector(".name");
let message = document.querySelector(".message");

let info = [nameUser, email, message];

const closeBtn = document.querySelector(".close-btn");
const emailSentHolder = document.querySelector(".email-sent-holder");
const opacityDiv = document.querySelector(".opacity-div");

let sendMail = () => {
  if (nameUser.value != "" && email.value != "" && message.value != "") {
    if (
      email.value.includes(".com") &&
      email.value.includes("@") &&
      email.value.indexOf(".com") > email.value.indexOf("@")
    ) {
      var params = {
        from_name: nameUser.value,
        from_id: email.value,
        message: message.value,
      };
      emailjs
        .send("service_jwb2juj", "template_tagp8x2", params)
        .then(function (res) {});

      info.forEach((eachInfo) => {
        eachInfo.classList.remove("green");
        eachInfo.classList.remove("red");
        eachInfo.classList.add("green");
      });
      invalidEmail.style.display = "none";
      emailSentHolder.style.display = "flex";
      opacityDiv.style.display = "block";
      closeBtn.addEventListener("click", function () {
        emailSentHolder.style.display = "none";
        opacityDiv.style.display = "none";
      });
    } else {
      info.forEach((eachInfo) => {
        eachInfo.classList.remove("green");
        eachInfo.classList.remove("red");
        eachInfo.classList.add("green");
      });
      invalidEmail.style.display = "block";
      invalidEmail.classList.add("invalidClass");
      email.classList.add("red");
      invalidEmail.addEventListener("animationend", function () {
        invalidEmail.classList.remove("invalidClass");
      });

      eachInfo.addEventListener("input", () => {
        eachInfo.classList.remove("green");
        eachInfo.classList.remove("red");
        if (
          eachInfo.value != "" &&
          email.value.includes(".com") &&
          email.value.includes("@") &&
          email.value.indexOf(".com") > email.value.indexOf("@")
        ) {
          eachInfo.classList.add("green");
        } else {
          eachInfo.classList.add("red");
        }
      });
    }
  } else if (nameUser.value == "" || email.value == "" || message.value == "") {
    info.forEach((eachInfo) => {
      eachInfo.classList.remove("green");
      eachInfo.classList.remove("red");
      if (eachInfo.value != "") {
        eachInfo.classList.add("green");
      } else if (eachInfo.value == "") {
        eachInfo.classList.add("red");
      }

      eachInfo.addEventListener("input", () => {
        eachInfo.classList.remove("green");
        eachInfo.classList.remove("red");
        if (eachInfo.value != "") {
          eachInfo.classList.add("green");
        } else if (eachInfo.value == "") {
          eachInfo.classList.add("red");
        }
      });
    });
  }
};

send.onclick = () => {
  sendMail();
};

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    sendMail();
  }
});

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

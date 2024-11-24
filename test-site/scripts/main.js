const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/PortraitF.jpg") {
    myImage.setAttribute("src", "images/PortraitM.jpeg");
  } else {
    myImage.setAttribute("src", "images/PortraitF.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Hello! Your Name Is:");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello～(∠・ω&< )⌒★, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello～(∠・ω< )⌒★, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
}
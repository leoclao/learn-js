const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "./images/team_demo.jpg") {
    myImage.setAttribute("src", "./images/trade_1.jpg")
    console.log(mySrc)
  } else {
    myImage.setAttribute("src", "./images/team_demo.jpg")
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  
  if(!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
}

myButton.onclick = () => {
  setUserName();
}
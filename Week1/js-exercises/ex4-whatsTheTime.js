'use strict';

/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file**
  2. in the HTML file Include a script tag and link the JavaScript file**
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

document.body.style.backgroundColor = "#2d3436";
document.body.style.color = "#ffffff";
document.body.style.fontFamily = "sans-serif";
document.body.style.fontSize = "5rem";
document.body.style.width = "60%";
document.body.style.margin = "auto";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignContent = "center";

const timeInterval = setInterval(displayCurrentTime, 1000);

function displayCurrentTime() {
  var date = new Date();
  var localTime = date.toLocaleTimeString();//gets current time
  document.getElementById("clock").innerHTML = localTime; //display clock on page
}

displayCurrentTime();

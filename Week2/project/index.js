'use strict'

/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */


//increase or decrease the session length with up and down

//find and store the elements we want to manipulate
const buttonDown = document.getElementById("decrease");
const buttonUp = document.getElementById("increase");
const countdownEl = document.getElementById("countdown");
const inputTime = document.getElementById("input-time");

let initValue = parseInt(25);
console.log(typeof initValue);

countdownEl.innerHTML = `${initValue}:00`;
inputTime.innerHTML = initValue;

let startingMinutes = initValue;
let running = false;

function setCountDownTimer() {
  
  let time = startingMinutes * 60; 

  function updateCountdown() {
    let minutes = Math.floor(time/60);
    console.log(minutes+'minutes');
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time !== 0 ? time-- : time;

    if (time === 0) {
      countdownEl.innerHTML = "Time's up";
    } 

    if (time !== 0){
      running = true;
      console.log(running);
    } else {
      running = false;
      console.log(running);
      //how do I stop the interval from here without clicking on pause
    }

  }

  console.log(running + ' general');
  
  let startInterval;
  let stopInterval;

  //play
  playButton.addEventListener("click", function() {
    startInterval = setInterval(updateCountdown, 1000);
    running = true;
    console.log(running + ' play')
  },  /*{once : true}*/);


  //pause
  pauseButton.addEventListener("click", function() {
  stopInterval = clearInterval(startInterval);
  running = false;
  console.log(running + ' pause');
  });
  
}

//decrease the input value every time the down button is clicked

buttonDown.addEventListener('click', event => {
  let countdown = initValue - 1;
  initValue = countdown;
  inputTime.innerHTML = countdown;

  //same as countdownEl 
  startingMinutes = startingMinutes - 1; //how do I access to this updated value globally?
  console.log(startingMinutes);
  countdownEl.innerHTML = `${startingMinutes}:00`;


  //stop the counting when value gets to zero
  if (countdown <= 0) {
    initValue == 0;
    inputTime.innerHTML = '0';
  }
  if (startingMinutes <= 0) {
    startingMinutes == 0;
    countdownEl.innerHTML = "0:00";
  }

  setCountDownTimer();
  
  return;
});

//increase the input value every time the up button is clicked
buttonUp.addEventListener('click', event => {
  let countUp = initValue + 1;
  initValue = countUp;
  inputTime.innerHTML = countUp;

  //same as countdownEl 

  function square(number) {
    return number * number;
  }
  startingMinutes = startingMinutes + 1;
  countdownEl.innerHTML = `${startingMinutes}:00`;

 setCountDownTimer();

  return;
});

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

setCountDownTimer();

//re start count
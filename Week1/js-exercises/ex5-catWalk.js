'use strict'

/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/


//1. Create variable to store image
let catEl = document.querySelector("img");

//image left = "0px";
catEl.style.left = "0px";

//start time in milliseconds before the function is called
let startTime = new Date().getTime();

//function that moves the cat 10pxs to the right
let catWalk = function() {
    catEl.style.left = "10px";
    let currTime = new Date().getTime(); //store current time
    let secondsElapsed = ((currTime - startTime)/1000);
    let newLeft = secondsElapsed * 50;

    catEl.style.left = newLeft + "px";
    window.requestAnimationFrame(catWalk);

    //when the gat gets to the right end of the screen, restart position
    if (newLeft > window.innerWidth) {
        { startTime = currTime};
    } 
   
    //change image at the middle of the screen
    if (newLeft > (window.innerWidth - catEl.width) / 2 && newLeft < ((window.innerWidth - catEl.width)/2) + 5) {

        // repeat with the interval of 2 seconds
        let timerId = setInterval(() => 
        catEl.src="https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424", 2000);

        // stop after 5 seconds and replace image with the original
        setTimeout(() => { clearInterval(timerId); 
        catEl.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"; }, 5000);
        
    } 

}

catWalk();
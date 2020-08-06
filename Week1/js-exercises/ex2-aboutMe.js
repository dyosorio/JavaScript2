/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 
 //Change body font style
 document.body.style.backgroundColor = "#227093";
 document.body.style.fontFamily = "Arial, sans-serif";
 document.body.style.width = "70%";
 document.body.style.margin = "auto";
 document.body.style.display = "flex";
 document.body.style.justifyContent = "center";
 document.body.style.alignItems = "center";
 document.body.style.padding = "5rem";
 

 //replace spans
 let myNickname = document.getElementById("nickname");
 myNickname.innerText = "Danny";
 let myFavFood = document.getElementById("fav-food");
 myFavFood.innerText = "Spare Ribs";
 let myHomeTown = document.getElementById("hometown");
 myHomeTown.innerText = "Deventer";

//iterate trough each li and add class
let infoList = document.getElementsByTagName("li");
for (i = 0; i < infoList.length; i++) {
    infoList[i].className = "list-item";
    infoList[i].style.margin = "2rem";
    infoList[i].style.fontSize = "1.5rem";
}
//Add a style tag that sets a rule for .list-item to change color.
let newColorList = document.getElementsByClassName("list-item");
for (i = 0; i < newColorList.length; i++) {
    newColorList[i].style.color = "#f7f1e3";
}

//create picture of me and append it to the page
const myPicture = document.createElement("img");
myPicture.src = "https://i.imgur.com/1AAqvGH.jpg";
myPicture.style.width = "200px";
myPicture.style.border = "10px solid #ffffff";
myPicture.style.borderBottom = "45px solid #ffffff";
myPicture.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.3)";
document.body.appendChild(myPicture);

//style h1
document.querySelector("h1").style.color = "#f7f1e3";
document.querySelector("h1").style.textTransform = "uppercase";
document.querySelector("h1").style.letterSpacing = "2px";


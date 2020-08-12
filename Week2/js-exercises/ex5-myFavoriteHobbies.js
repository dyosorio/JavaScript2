'use strict';

/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

 //Problem: output myHobbies into an HTML file and showcase in a webpage
 //2. use map/forEach to put each hobby list into a list item
 //3. Put the list items in an unordered list

function addMyHobbiesIntoHTML(myHobbies) {
  
  //create <ul>
  const unorderedHobbiesList = document.createElement("ul");
  //add <ul> to the DOM
  document.body.appendChild(unorderedHobbiesList);

  //create a <li> and append it to <ul>
  function addHobbyToListItem(hobby) {
    //create <li>
    const listItemHobbies = document.createElement("li");
    //manipulate the content of <li> to be a hobby
    listItemHobbies.innerHTML = hobby;
    //append <li> to <ul>
    unorderedHobbiesList.appendChild(listItemHobbies);
    return;
  };

  //iterate through the array
  myHobbies.map(addHobbyToListItem);
  return;

};

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

console.log(addMyHobbiesIntoHTML(myHobbies));


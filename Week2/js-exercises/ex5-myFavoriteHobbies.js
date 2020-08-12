/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */



function createHTMLList(arr) {
  
  arr.forEach(function (item){
    const li = document.createElement('li');
    ul.appendChild(li);

    return li.innerHTML = item;

  });
  
}

ul = document.createElement('ul');
document.body.appendChild(ul);



const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

console.log(createHTMLList(myHobbies));

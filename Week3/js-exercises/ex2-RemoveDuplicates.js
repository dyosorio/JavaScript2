'use strict';

/*
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. 
This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

The  function should remove duplicate elements.So the result should be:
*/


// WRITE YOUR FUNCTION HERE

function removeDuplicates(array) {
  //Use the set object to store the unique values within the array. All duplicates will be removed.
  const setOfUniqueValues = new Set(array);

  //Use array.from() to create an array from the set object
  const arrayFromSetOfUniqueValues = Array.from(new Set(setOfUniqueValues))
  
  return arrayFromSetOfUniqueValues;
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

//a const declaration can't be re-assigned so we need to store removeDuplicate(letters) into a new variable
let uniqueLetters = removeDuplicates(letters);

//To compare the elements of two arrays, we need to convert the arrays to string
if (JSON.stringify(uniqueLetters) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']))
  console.log("Hooray!");



/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let's get started!

  Write a function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 //problem 1: The  function should first generate an array containing values from start value to end value(inclusive).

 //problem2: Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 //problem3: The function should call the second callback
 if the array value is divisible by 5.

 //problem 4: sBoth functions should be called
 if the array value is divisible by both 3 and 5.
*/

//problem 2: divisible by 3
function threeCallback(number) {
  return 'is divisible by three';
}

//problem3: divisible by 5
function fiveCallback(number) {
  return 'is divisible by five';
}


function createListOfNumbersAndCheckIfDivisibleByThreeOrFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  // make an empty array 
  const arrayOfNumbers = [];
  //iterate between the start and stop value, adding 1 to the start value on every iteration
  while(startIndex <= stopIndex) {
  arrayOfNumbers.push(startIndex++);
  }

  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  arrayOfNumbers.forEach(i => {
    //problem 4: call two callbacks on one condition. This condition must be check before the other ones
    if(i % 3 === 0 && i % 5 === 0){
      console.log(`${i} ${threeCallback(i)} and ${fiveCallback(i)}`);
    } 
    //if index is divisible by 3, call threeCallback
    else if (i % 3 === 0) {
      console.log(`${i} ${threeCallback(i)}`);
    } 
    //if index is divisible by 5, call fiveCallback
    else if(i % 5 === 0) {
      console.log(`${i} ${fiveCallback(i)}`);
    }
    
  });

}

threeFive = createListOfNumbersAndCheckIfDivisibleByThreeOrFive;

threeFive(10, 15, threeCallback, fiveCallback);

'use strict';
 
//** Exercise 1: Add Six **
 
//Declare a function called `createBase`.
//The function takes a number as a parameter and
//return a closure, that adds a number to the base number argument.

//Call the function three times. The return values should be:
//15, 24,  33;

function createBase(number) {
  // baseNumber is 9
  let baseNumber = 9;

  //add the baseNumber to the number parameter
  function addBaseNumber() {
    return number = number + baseNumber;
  }
  
  //repeat the addBaseNumber operation every time createBase is invoke
  return addBaseNumber;

}

const addSix = createBase(6);

// Put here your function calls...
console.log(addSix());
console.log(addSix());
console.log(addSix());


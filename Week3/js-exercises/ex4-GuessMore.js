
/* Exercise 4: Guess more **
guess the output
*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);

//Output is 9 because the method log() is called in the global scope, where x = 9
console.log(x);

const y = {
  x: 9
};

console.log(y); //see x value before the function

function f2(val) {
  val.x = val.x + 1;
  return val; //returns 10
}

f2(y); 

//Outputs the object 'y'. As a property of 'y', the value of x will be 10 because it was modify inside the function f2. 

console.log(y); //see x value after the function
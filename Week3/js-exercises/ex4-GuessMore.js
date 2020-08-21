
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

function f2(val) {
  val.x = val.x + 1;
  return val; //returns 10
}

f2(y);

//Outputs the value of y in the global scope. The value of 'y' was modify inside the function local scope only.
console.log(y);
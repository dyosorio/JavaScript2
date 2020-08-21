/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

//Output is 12 because of the Scope Chain. The Javascript engine will first search for the value of 'a' within the function's own scope, It won't find 'a' so the engine will look for 'a' in the next most outer scope where a = 12.

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();


'use strict';

/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

function collectiveAge(people) {
  //map to get the individual ages and reduce to sum it all up
  const totalAge = people.map(people => people.age).reduce((a, b) => a + b, 0);
  return totalAge;
}

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

//is this what you meant by "It should contain a function that takes a callback"?s
const collectiveMembers = collectiveAge;

console.log("The collective age of the HYF team is: " + collectiveMembers(hackYourFutureMembers));
'use strict';

/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

function getCollectiveAge(members) {
  //get the age of each member
  const memberAge = members.map(members => members.age);
  //add all ages together
  const addAllAges = memberAge.reduce((a, b) => a + b, 0);
  
  return addAllAges;
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


console.log("The collective age of the HYF team is: " + getCollectiveAge(hackYourFutureMembers));
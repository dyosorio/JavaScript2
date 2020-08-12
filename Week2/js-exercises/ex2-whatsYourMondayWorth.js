'use strict';
/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */

function dayWorth(tasks, hourlyRate) {
  //convert minutes to hours 
  const minsToHoursConverter = tasks.map(task => task.duration /60);
  //sum all hours 
  const sumAllHours = minsToHoursConverter.reduce((a, b) => a + b, 0);
  //multiply total hours by hourly rate
  const totalPayPerDay =  (sumAllHours * hourlyRate);
  //format totalPay as a currency amount with rounded cents
  return (new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(totalPayPerDay));
  
}

const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

//make sure the function takes other arrays
const tuesdayTasks = [{
  name: 'task 1',
  duration: 120, // specified in minutes
},
{
  name: 'task 2',
  duration: 80,
},
{
  name: 'task 3',
  duration: 240,
},
{
  name: 'task 4',
  duration: 60,
},
];

console.log(dayWorth(mondayTasks, 25));
console.log(dayWorth(mondayTasks, 13.37));
console.log(dayWorth(tuesdayTasks, 13.37));
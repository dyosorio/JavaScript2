'use strict';

//document.querySelector("#app").innerText = "Tip Calculator";


//Find and store the element we want to listen to events on: calculate button.
let calculateButton = document.getElementById('calculate');
let amountOfBill = document.getElementById('currency').value;
let qualityOfService = document.getElementById('qualityOfService').value;
let numberOfPeople = document.getElementById('shareBill').value;

console.log(amountOfBill);



//Define a function that will respond to the event
//we need: the amount of the bill, quality of service converted to percentage, number of people that will pay the bill
function calculateTip(amountOfBill, qualityOfService, numberOfPeople) {

    let totalBill = parseFloat(document.getElementById('currency').value);
    let serviceQuality = parseFloat(document.getElementById('qualityOfService').value);
    let people = parseFloat(document.getElementById('shareBill').value);

    //Get tip: percentage from total amount of bill
    let tip = (totalBill/100) * serviceQuality;
    
    //divide tip between number of people paying
    let sharedTip = tip / people;

    //return calculation with message showing the results of the calculation
    console.log(sharedTip);
    
}

//Add the Event Listener for the Element and the function
//Event: when the button is clicked a calculation is made and the user can read the tip amount underneath.
calculateButton.addEventListener('click', calculateTip);




/*
In this week's project you'll be making a Tip Calculator! A user can fill in 3 things:
The amount of the bill
How good the service was
How many people will share the bill

When the button is clicked a calculation is made and the user can read the tip amount underneath.
Use a form, that has 3 input fields (the first and last can only take numbers) - done
If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
If any of the input fields are empty when the button is clicked, call an alert that says: "You need to fill in all the fields!"
See it in action here.

*/
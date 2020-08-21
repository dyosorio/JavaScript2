'use strict';

//Find and store the element we want to listen to events on: calculate button.
let calculateButton = document.getElementById('calculate');


//Define a function that will calculate the tip
//the function needs the amount of the bill, quality of service, number of people that will pay the bill
function calculateTip(amountOfBill, qualityOfService, numberOfPeople) {

    //find and store the elements we need to manipulate
    let totalBill = parseFloat(document.getElementById('currency').value);
    let serviceQuality = parseFloat(document.getElementById('qualityOfService').value);
    console.log(serviceQuality);
    let people = parseFloat(document.getElementById('shareBill').value);

    if (totalBill ==""  || serviceQuality =="" || people == "") {
        alert('You need to fill in all the fields!');
    }

    function getTipInEuros(totalBill, serviceQuality, people) {
        //Get tip: percentage from total amount of bill
        let tip = (totalBill/100) * serviceQuality;
    
        //divide tip between number of people paying
        let sharedTip = tip / people; 
    
        //format tip to amount in Euros
        let tipEuros = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(sharedTip)
        console.log(sharedTip);

        return tipEuros;
    
    }

    if (people === 1) {
        return getTipInEuros(totalBill, serviceQuality, people);
    } if(people > 1){
        return `${getTipInEuros(totalBill, serviceQuality, people)} each`
    }

    return;

}


//Define a function that will respond to the event
//function that prints a message showing the results of the calculation
function printCalculationOnScreen() {

    let calculatorContainer = document.getElementById('calculator');

    //create DOM elements
    let divElement = document.createElement("div");
    let messageElement = document.createElement("p");

    divElement.style.backgroundColor = '#05c46b';
    divElement.style.width = '100%';
    divElement.style.bottom = '0';
    divElement.style.marginTop = '1rem';
    divElement.style.padding = '.5rem 1.5rem';
    messageElement.style.fontSize = '2rem';
    messageElement.style.textAlign = 'center';;
    
    messageElement.innerHTML = `Tip amount ${calculateTip()}`;

    if (calculateTip() === undefined) {
        messageElement.innerHTML = 'You need to fill in all the fields!';
    }

    divElement.appendChild(messageElement);
    calculatorContainer.appendChild(divElement);

}


//Add the Event Listener for the Element and the function
//Event: when the button is clicked a calculation is made and the user can read the tip amount underneath.
calculateButton.addEventListener('click', printCalculationOnScreen, { once: true });




/*
In this week's project you'll be making a Tip Calculator! A user can fill in 3 things:
The amount of the bill
How good the service was
How many people will share the bill

When the button is clicked a calculation is made and the user can read the tip amount underneath.
Use a form, that has 3 input fields (the first and last can only take numbers) 
If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
If any of the input fields are empty when the button is clicked, call an alert that says:
"You need to fill in all the fields!"

*/
'use strict';

/*
1. Include at least 1 JavaScript, CSS and HTML file
2. The design should look similar to the one in the picture above
3. No CSS frameworks allowed
4. Each time the button is clicked it should show a random quote
5. Create a function that fires after the button click
6. Collect 6 of your favorite quotes (quote and author) and store them in the right data structure
Good luck!*/

//create array of objects 
const quotes = [
    {
        quote: "A word after a word after a word is power.",
        author: "— Margaret Atwood"
    },
    {
        quote: "The best time for planning a book is while you're doing the dishes",
        author: "— Agatha Christie"
    },
    {
        quote: "Write what should not be forgotten.",
        author: "— Isabel Allende"
    },
    {
        quote: "I write for those women who do not speak, for those who do not have a voice",
        author: "— Audre Lorde"
    },
    {
        quote: "Life's a bitch. You've got to go out and kick ass.",
        author: "— Maya Angelou"
    },
    {
        quote: "Beware: for I am fearless, and therefore powerful",
        author: "— Mary Wollstonecraft Shelley"
    }
]

//Finding the DOM elements
const quoteButton = document.getElementById("quote-button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

//add event listener
quoteButton.addEventListener("click", (e) =>  {
    //get random number to generate a position in the array of quotes
    //multiply random number by array.length and round to nearest number
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
    e.preventDefault();
})



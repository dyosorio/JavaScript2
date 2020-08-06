'use strict';

/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  
  //iterate through the array of books
  for(let i = 0; i < books.length; i++){
    let bookTitle = books[i].title;
    let bookAuthor = books[i].author;
    let bookRead = books[i].alreadyRead;
    
    //create p
    let pElement = document.createElement("p");
    pElement.innerHTML = bookTitle + " by " + bookAuthor;
    
    //add images
    let bookCoverElement = document.createElement("img");
    if (bookTitle === 'The Design of Everyday Things') {
			bookCoverElement.src = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
		} 
		else if (bookTitle === 'The Most Human Human') {
			bookCoverElement.src = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
		}
		else if (bookTitle === 'The Pragmatic Programmer') {
			bookCoverElement.src = "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg";
		}
		bookCoverElement.height = 200;
    bookCoverElement.title = bookTitle;

    //create ul
    let ulElement = document.createElement("ul"); 
    ulElement.style.display = "flex";
    ulElement.style.border = "solid 2px #dfe6e9";
    ulElement.style.width = "45%"
    ulElement.style.justifyContent = "center";
    ulElement.style.alignItems = "center";
    ulElement.style.margin =".5rem";
    ulElement.style.padding =".5rem";
    ulElement.style.overflow = "hidden";

    //create li
    let liElement = document.createElement("li"); 
    liElement.style.display = "flex";
    liElement.style.justifyContent = "center";
    liElement.style.alignItems = "center";
    liElement.style.padding = ".5rem";
    liElement.style.margin = ".5rem";
    liElement.style.width= "100%";
    liElement.style.overflow = "hidden";
    liElement.style.listStyle = "none";
    if (bookRead === true) { //change color depending if read or not
      liElement.style.backgroundColor = "#27ae60";
    } else {
      liElement.style.backgroundColor = "#e15f41";
    }
    
    //create div
    let divElement = document.createElement("div"); 
    divElement.style.display = "flex";
    divElement.style.flexWrap = "wrap";
    divElement.style.padding = "2rem";
    divElement.style.justifyContent = "center";
    divElement.style.alignContent = "center";

    let containerElement = document.querySelector("#bookList");
    containerElement.style.display = "flex";
    containerElement.style.flexWrap = "wrap";
    containerElement.style.justifyContent = "space-around"
    containerElement.style.flexFlow = "row wrap";
    containerElement.style.flexDirection = "row";
    containerElement.style.margin = "auto";
    containerElement.style.width = "70%";

    //append
    divElement.appendChild(pElement);
    divElement.appendChild(bookCoverElement);
    liElement.appendChild(divElement);
    ulElement.appendChild(liElement); 
    containerElement.appendChild(ulElement);
    document.body.appendChild(containerElement); 
  }
  
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

let ulElement = createBookList(books);
document.querySelector("#bookList").appendChild(ulElement);


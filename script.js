//Library array to store books
const myLibrary = [];

//Book constructor
function Book(title, author, pages, isRead){
  if(!new.target){
    throw Error ("You must use the 'new' operator to call the constructor");
  }
  
  this.id = crypto.randomUUID();
  this.title = title;
  this.author =  author;
  this.pages = pages;
  this.isRead = isRead; 
}

//function to add a new book to the library array
function addBookToLibrary(title, author, pages, isRead){
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

//DOM selector to target the ul tag on html page
const listBooks = document.querySelector("ul");


//Manually adding books to the library
addBookToLibrary("Harry Potter I", "R.J Rowling", 466, false)
addBookToLibrary("Harry Potter II", "R.J Rowling", 525, true)
addBookToLibrary("Harry Potter III", "R.J Rowling", 451, false)

myLibrary.forEach((book, index) => {
  //set a variable to be the li tag to append to the ul later
  const bookLi = document.createElement("li");
  
  //alter the text on the li tag to display on the web page
  bookLi.textContent = `${book.title}`;

  //append the book onto ul.
  listBooks.appendChild(bookLi);

});
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
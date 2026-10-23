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

Book.prototype.hasRead = function () {
  if (!this.isRead){
    return "have not read";
  } else{
    return "have read";
  }
}

//function to add a new book to the library array
function addBookToLibrary(title, author, pages, isRead){
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

//DOM selector to target the ul tag on html page
const listBooks = document.querySelector("ul");

//to clear the list of books when adding/removing books
function clearBooks(){
    listBooks.innerHTML =''
  }


//Manually adding books to the library
addBookToLibrary("Harry Potter I", "R.J Rowling", 466, false)
addBookToLibrary("Harry Potter II", "R.J Rowling", 525, true)
addBookToLibrary("Harry Potter III", "R.J Rowling", 451, false)

function refreshMyLibrary(myLibrary) {
    myLibrary.forEach((book, index) => {
    //set a variable to be the li tag to append to the ul later
    const bookLi = document.createElement("li");
    const removeBtn = document.createElement('button');
    const readToggleBtn = document.createElement('button');
    const readStatus = document.createElement ('p');

    readStatus.textContent = (`Read Status: ${book.hasRead()}`);
    bookLi.classList = "book-card";
    readToggleBtn.classList = "readToggleBtn";
    readToggleBtn.textContent = "Read/Not Read";
    
    //alter the text on the li tag to display on the web page
    bookLi.textContent = `${book.title}`;
    removeBtn.textContent = "Remove";
    removeBtn.id = book.id;

    removeBtn.addEventListener('click', (event) => {
      const index = myLibrary.findIndex(book => book.id === removeBtn.id)
      myLibrary.splice(index, 1);
      clearBooks()
      refreshMyLibrary(myLibrary);
    })

    readToggleBtn.addEventListener('click', () => {
      if (book.isRead){
        book.isRead = false;
        readStatus.textContent = (`Read Status: ${book.hasRead()}`);
      } else{
        book.isRead = true;
        readStatus.textContent = (`Read Status: ${book.hasRead()}`);
      }
    })


    //append the book onto ul.
    listBooks.appendChild(bookLi);
    bookLi.appendChild(readStatus);
    bookLi.appendChild(readToggleBtn);
    bookLi.appendChild(removeBtn);

  });
}

refreshMyLibrary(myLibrary);

//DOM selector for the new book button and the form
const newBookBtn = document.querySelector ('.new-book-btn');
const bookForm = document.querySelector("#book-form");

//event listener for the new book button to toggle the form to be hidden/show
newBookBtn.addEventListener('click', () =>{
  bookForm.classList.toggle('hidden');
})

//DOM selector to select the submit button for the new book form
const submitBook = document.querySelector('.new-book-submit-btn')

//event listener to see if user click to add a new book
submitBook.addEventListener('click', (event) =>{
  
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const isRead = document.querySelector('#isRead');

  addBookToLibrary(title.value, author.value, pages.value, isRead.checked);

  //To Clear form after submitting new book
  title.value = '';
  author.value = '';
  pages.value = '';
  isRead.checked = false;
  
  //Clear the old list 
  clearBooks();

  refreshMyLibrary (myLibrary);
  
  //to prevent the defualt form submission to a server
  event.preventDefault();
})
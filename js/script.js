const myLibrary = [];

const addBookBtn = document.getElementById('add-book-btn')
const bookShelf = document.getElementById('book-shelf')

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
};

function addBookToLibrary() {
  // take input add to library
  // variable to call book function
  // take new varialbe and add to mylibrary constant
};

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 355, true)
const book2 = new Book('Spam Nation', 'Brian Krebs', 250, false)

myLibrary.push(book1)
myLibrary.push(book2)

myLibrary.forEach((book) => {
  let list = document.createElement('ul');
  bookShelf.appendChild(list);

  let title = document.createElement('li');
  title.innerText = `Title: ${book.title}`;
  list.appendChild(title);

  let author = document.createElement('li');
  author.innerText = `Author: ${book.author}`;
  list.appendChild(author);

  let pageCount = document.createElement('li');
  pageCount.innerText = `${book.pages} pages`
  list.appendChild(pageCount);

  let read = document.createElement('li');
  read.innerHTML = `Read book? ${book.haveRead}`;
  list.appendChild(read);


});

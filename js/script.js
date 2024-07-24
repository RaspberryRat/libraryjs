const myLibrary = [];
let libraryIndex = 0

const addBookBtn = document.getElementById('add-book-btn')
const newBookBtn = document.getElementById('new-book-btn')
const bookShelf = document.getElementById('book-shelf')
const formContainer = document.getElementById('form-container')

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
};

function addBookToLibrary(event) {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('page-count').value;
  let haveRead = document.getElementById('have-read').checked;
  event.preventDefault();

  let newBook = new Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
  printBooks()
};

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 355, true)
const book2 = new Book('Spam Nation', 'Brian Krebs', 250, false)

myLibrary.push(book1)
myLibrary.push(book2)

function printBooks() {
  for (; libraryIndex < myLibrary.length; libraryIndex++) {
    let book = myLibrary[libraryIndex];

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
  };
};
newBookBtn.addEventListener('click', () => {
  formContainer.classList.toggle('hidden')
});

addBookBtn.addEventListener('click', addBookToLibrary, false);

printBooks();

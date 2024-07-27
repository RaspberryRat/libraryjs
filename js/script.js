const myLibrary = [];
let libraryIndex = 0

const addBookBtn = document.getElementById('add-book-btn');
const newBookBtn = document.getElementById('new-book-btn');
const bookShelf = document.getElementById('book-shelf');
const formContainer = document.getElementById('form-container');

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
};

function addBookToLibrary(event) {
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('page-count');
  let haveRead = document.getElementById('have-read');
  event.preventDefault();

  let newBook = new Book(title.value, author.value, pages.value, haveRead.checked);
  myLibrary.push(newBook);
  printBooks()
  clearForm(title, author, pages, haveRead);
};

function clearForm(text1, text2, num, checkBox) {
  text1.value = '';
  text2.value = '';
  num.value = '';
  checkBox.checked = false;
};

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 355, true)
const book2 = new Book('Spam Nation', 'Brian Krebs', 250, false)

myLibrary.push(book1)
myLibrary.push(book2)

function printBooks() {
  for (; libraryIndex < myLibrary.length; libraryIndex++) {
    let book = myLibrary[libraryIndex];

    let list = document.createElement('ul');
    list.className = `book-${libraryIndex}`
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

    let delBtn = document.createElement('button')
    delBtn.innerHTML = "Remove Book"
    list.appendChild(delBtn);
  };
};

newBookBtn.addEventListener('click', () => {
  formContainer.classList.toggle('hidden')
});

addBookBtn.addEventListener('click', addBookToLibrary, false);

printBooks();

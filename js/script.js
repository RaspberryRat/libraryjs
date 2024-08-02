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

    let div = document.createElement('div');
    div.className = `book-${libraryIndex} book`;
    bookShelf.appendChild(div);

    let list = document.createElement('ul');
    div.appendChild(list);

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

    let btns = document.createElement('div');
    btns.className = 'book-btns'
    div.appendChild(btns);

    let delBtn = document.createElement('button');
    delBtn.innerHTML = "Remove Book";
    delBtn.className = 'del-book-btn';
    btns.appendChild(delBtn);

    let readBtn = document.createElement('button');
    readBtn.innerHTML = 'Read Book?';
    readBtn.className = 'read-book-btn';
    btns.appendChild(readBtn);
  };
  loadDelBtns();
};

newBookBtn.addEventListener('click', () => {
  formContainer.classList.toggle('hidden')
});

addBookBtn.addEventListener('click', addBookToLibrary, false);

printBooks();

function deleteBook(event) {
  let button = event.target;
  let book = button.closest('.book');
  if (book) {
    book.remove()
  }
};

function toggleReadStatus(event) {
  let button = event.target;
  let book = button.closest('.book');
  let bookClass = Array.from(book.classList).find(element => element.startsWith('book-'));
  let bookIndex = bookClass.charAt(bookClass.length - 1);
  console.log(myLibrary[bookIndex].haveRead);
  if (myLibrary[bookIndex].haveRead === true) {
    myLibrary[bookIndex].haveRead = false;
  } else {
    myLibrary[bookIndex].haveRead = true;
  }
  console.log(myLibrary[bookIndex].haveRead);
  reprintBooks();
};

function reprintBooks() {
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  };
  libraryIndex = 0;
  printBooks();

};

function loadDelBtns() {
  let delBookBtns = document.querySelectorAll('.del-book-btn');
  let readBookBtns = document.querySelectorAll('.read-book-btn');

  delBookBtns.forEach(btn => {
    btn.addEventListener('click', deleteBook);
  });

  readBookBtns.forEach(btn => {
    btn.addEventListener('click', toggleReadStatus);
  });
};

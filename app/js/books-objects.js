// Variables and cons declaration
const booksUl = document.querySelector('#books-list-ul');
const addBookFrm = document.querySelector('#add-book-frm');

// Books array of objects book
let books = [
  {
    id: 1,
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    id: 2,
    title: 'Second book',
    author: 'Testeroo Testyy',
  },
];

// --------------------FUNCTIONS-------------------------------//

// Function to generate an li element for book ul list
const generateBooksLi = (book) => {
  // Create elements
  const bookLi = document.createElement('li');
  const divBook = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const btnRemove = document.createElement('button');
  const hrDeco = document.createElement('hr');

  // Add text to elements
  pTitle.textContent = `${book.title}`;
  pAuthor.textContent = `${book.author}`;
  btnRemove.textContent = 'Remove';
  // Add atributes
  btnRemove.setAttribute('id', `${book.id}`);

  // Build li
  divBook.appendChild(pTitle);
  divBook.appendChild(pAuthor);
  divBook.appendChild(btnRemove);
  divBook.appendChild(hrDeco);
  bookLi.appendChild(divBook);

  return bookLi;
};

// Function to create booksUl
const createBooksUl = () => {
  // Clean bookUl
  booksUl.textContent = ' ';
  // Generate ul
  books.forEach((book) => {
    booksUl.appendChild(generateBooksLi(book));
  });
};

// Function to remove a book from the array books
const removeBook = (i) => {
  books = books.filter((book) => Number(book.id) !== Number(i));
  createBooksUl();
};

// Function to add a new book to the array books
const addNewBook = () => {
  // Calculate book id
  const id = books.length + 1;
  // Get book's information from the add-book-frm form
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  // Create new book object
  const newBook = {};
  newBook.id = id;
  newBook.title = title;
  newBook.author = author;
  // Add the new book object to the books array
  books.push(newBook);
  createBooksUl();
};

// --------------------------EVENTS--------------------------------------//
addBookFrm.addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Call function to add a book
  addNewBook();
});

// Add eventListener to btnRemove
booksUl.addEventListener('click', (e) => {
  const { id } = e.target;
  removeBook(id);
});

window.addEventListener('load', () => {
  createBooksUl();
});

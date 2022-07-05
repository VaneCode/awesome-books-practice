/* eslint-disable max-classes-per-file */

// ---------------------VARIABLES DECLARATION-----------------//
const booksUl = document.querySelector('#books-list-ul');
const addBookFrm = document.querySelector('#add-book-frm');

// --------------------CLASSES--------------------------------//
class BookClass {
  // Method to create a new book
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class BooksDataClass {
  // Method to create an array that will contains the books
  constructor() {
    return [];
  }
}

let books = new BooksDataClass();
const book1 = new BookClass(1, 'Lorem ipsum', 'Testeroo Testyy');
books.push(book1);
const book2 = new BookClass(2, 'Second book', 'Testeroo Testyy');
books.push(book2);

class InterfaceClass {
    // Method to generate an li element for book ul list
    static generateBooksLi = (book) => {
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
    }

    // Method to create booksUl
    static createBooksUl = () => {
      // Clean bookUl
      booksUl.textContent = ' ';
      // Generate ul
      books.forEach((book) => {
        booksUl.appendChild(InterfaceClass.generateBooksLi(book));
      });
    }

    // Method to remove a book from the array books
   static removeBook = (i) => {
     books = books.filter((book) => Number(book.id) !== Number(i));
     // Local storage
     localStorage.setItem('books', JSON.stringify(books));
     InterfaceClass.createBooksUl();
   }

    // Method to add a new book to the array books
    static addNewBook = () => {
      // Calculate book id
      const lastBook = books[books.length - 1];
      const id = lastBook.id + 1;
      // Get book's information from the add-book-frm form
      const title = document.querySelector('#book-title').value;
      const author = document.querySelector('#book-author').value;
      // Create new book object
      const newBook = new BookClass(id, title, author);
      // Add the new book object to the books array
      books.push(newBook);
      // Local storage
      localStorage.setItem('books', JSON.stringify(books));
      InterfaceClass.createBooksUl();
    }
}

// -------------------EVENTS-----------------------------------//
addBookFrm.addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Call function to add a book
  InterfaceClass.addNewBook();
});

// Add eventListener to btnRemove
booksUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target;
    InterfaceClass.removeBook(id);
  }
});

window.addEventListener('load', () => {
  console.log(books);
  // Create booksUl
  InterfaceClass.createBooksUl();
});
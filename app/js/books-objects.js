//Variables and cons declaration
const booksUl = document.querySelector('#books-list-ul');
const addBookFrm = document.querySelector('#add-book-frm');


// Books array of objects book
const books = [
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy'
    },
    {
        title: 'Second book',
        author: 'Testeroo Testyy'
    }
];

//--------------------FUNCTIONS-------------------------------//

//Function to generate an li element for book ul list
const generateBooksLi = (book) => 
{   
    const bookLi = document.createElement('li');
    const htmlLi = `<li>
          <div>
              <p id="title">${book.title}</h3>
              <p id="author">${book.author}</h4>
              <button id="delete-book-btn" type="button">Remove</button>
              <hr>
          </div>
      </li>`;
    bookLi.innerHTML = htmlLi
    return bookLi;  
}


//Function to add a new book to the array books
const addNewBook = ()=>{
    //Get book's information from the add-book-frm form
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    //Create new book object
    var newBook = new Object();
    newBook.title = title;
    newBook.author = author;
    //Add the new book object to the books array
    books.push(newBook);
    booksUl.appendChild(generateBooksLi(newBook));
}

//Function to remove a book from the array books


//--------------------------EVENTS--------------------------------------//
addBookFrm.addEventListener('submit',(e)=>{
    //Prevent actual submit
    e.preventDefault();

    //Call function to add a book
    addNewBook();
    console.log(books);
    
    

});

window.addEventListener('load', ()=>{
    books.forEach((book)=>{
        booksUl.appendChild(generateBooksLi(book));
       })
});


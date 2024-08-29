const myLibrary = [];



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = false;

    
}

Book.prototype.readBook = function() {
    this.read = !this.read;
}

myLibrary.push(new Book('Tony', 'Tony', 111));
myLibrary.push(new Book('Song of Ice and Fire', 'George R. R. Martin', 444));

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    myLibrary.forEach((book,index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.id = index;

        const bookTitle = document.createElement('h3');
        bookTitle.innerText = book.title;
        bookCard.append(bookTitle);

        const bookAuthor = document.createElement('div');
        bookAuthor.innerText = "Author: " + book.author;
        bookCard.append(bookAuthor);

        const bookPages = document.createElement('div');
        bookPages.innerText = "Pages: " + book.pages;
        bookCard.append(bookPages);

        const read = document.createElement('div');
        if (book.read) {
            read.innerText = 'Read';
        } else {
            read.innerText = 'Unread';
        }
        bookCard.append(read);

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        bookCard.append(buttons);

        

        const readButton = document.createElement('button');
        readButton.innerText = "Read Book"
        buttons.append(readButton);
        readButton.addEventListener('click', () => {
            book.readBook();
            displayBooks();
        })

        const removeButton = document.createElement('button');
        removeButton.innerText = "Remove Book";
        buttons.append(removeButton);
        removeButton.addEventListener('click', () => {
            myLibrary.splice(bookCard.id, 1);
            displayBooks();
        })

        container.append(bookCard);
    });
}

const newBookForm = document.querySelector('.newBookForm');
const showButton = document.querySelector('.show');
const closeButton = document.querySelector('.close');

showButton.addEventListener('click', () => {
    newBookForm.showModal();
});

closeButton.addEventListener('click', () => {
    newBookForm.close();
});

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const dialogForm = document.querySelector('dialog form');
    const formData = new FormData(dialogForm)

    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');

    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);
    displayBooks();
    dialogForm.reset();
    newBookForm.close();
});

displayBooks();
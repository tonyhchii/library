const myLibrary = [
    {
        title: 'Tony\'s book',
        author: 'Tony',
        pages: 1
    },
    {
        title: 'Game Of Thrones',
        author: 'George R R Martin',
        pages: 333
    }

];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    myLibrary.forEach((book,index) => {
        const bookCard = document.createElement('div');
        bookCard.textContent = book.title;
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
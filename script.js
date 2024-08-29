const myLibrary = [
    {
        title: 'Tony\'s book',
        author: 'Tony'
    },
    {
        title: 'Game Of Thrones',
        author: 'George R R Martin'
    }

];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.container');
    myLibrary.forEach((book,index) => {
        const bookCard = document.createElement('div');
        bookCard.textContent = book.title;
        container.append(bookCard)
    });
}

displayBooks();
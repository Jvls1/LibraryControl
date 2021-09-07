const Modal = {
    toggleNewBook() {
        document.querySelector('.modal-overlay.new-book').classList.toggle('active')
    },
    toggleBorrowBook() {
        document.querySelector('.modal-overlay.borrow-book').classList.toggle('active')
    },
    toggleNewClient() {
        document.querySelector('.modal-overlay.new-client').classList.toggle('active')
    },
    toggleNewBook() {
        document.querySelector('.modal-overlay.new-book').classList.toggle('active')
    }
}

const book = {
    id: 001,
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    gender: 'Fantasy',
    status: 'Free',
}

const DOM = {
    booksContainer: document.querySelector('#data-table tbody'),

    addBook(book, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLBook(book)
        tr.dataset.index = index

        DOM.booksContainer.appendChild(tr)
    },
    innerHTMLBook(book, index) {
        const html = `
        <td class="id">${book.id}</td>
        <td class="name">${book.name}</td>
        <td class="author">${book.author}</td>
        <td class="gender">${book.gender}</td>
        <td class="status">${book.status}</td>
        <td><img src="./assets/edit.svg" alt="edit book"></td>
        `
    }
}

const Form = {
    name: document.querySelector('input#name'),
    author: document.querySelector('input#author'),
    gender: document.querySelector('input#gender'),

    getValues () {
        return {
            name: Form.name.value,
            author: Form.author.value,
            gender: Form.gender.value
        }
    }
}
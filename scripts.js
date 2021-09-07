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

const btn = document.querySelector(".send")

btn.addEventListener('click', function (e) {

    e.preventDefault()

    const book = document.querySelector('#new-book')

    const value = book.value

    console.log(value)
})
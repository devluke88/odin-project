let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary() {
  let book = prompt("What is your favourite book?");
  myLibrary.push(book);
}

// TODO-3: Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
function displayBook() {
    for(let lib in myLibrary) {
        console.log(lib);
    }
}

function openModal() {
    modal.style.display = "block";
};

function closeModal() {
    modal.style.display = "none";
};

//TODO-4: Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
const modal = document.querySelector(".modal");
const addNewBook = document.querySelector(".add-new-book");
addNewBook.addEventListener("click", openModal)
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);
// const submitBtn = document.querySelector(".submit");
// submitBtn.addEventListener("click", alert("Test"));

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
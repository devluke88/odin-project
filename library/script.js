let myLibrary = [];

// Book constructor
function Book(name, author, pages, read) {
  this.name = name,
  this.author = author,
  this.pages = pages,
  this.read = read
}

// Add Book to Library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Reset Form once submitted
function resetForm() {
    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
    modalCheckbox.checked = false;
}

// Function to display all the Books from the Library
function displayBook() {
    cardsDiv.innerHTML = ""
    for(let lib in myLibrary) {
        let readButton = ""
        if (myLibrary[lib].read == "Read") {
            readButton = `<div class="btn read" data-index-number="${lib}">${myLibrary[lib].read}</div>`;
        }
        else {
            readButton = `<div class="btn not-read" data-index-number="${lib}">${myLibrary[lib].read}</div>`
        }
        let text = `<div class="card" data-card-index-number="${lib}"><div class="title">${myLibrary[lib].name}</div><div class="author">${myLibrary[lib].author}</div><div class="pages">${myLibrary[lib].pages}</div>${readButton}<div class="btn remove-btn" data-index-number="${lib}">Remove</div></div>`;
        cardsDiv.innerHTML += text;
    }
}

// Remove Book from Library and card
function removeBook(e) {
    let idxNo = e.target.dataset.indexNumber;
    myLibrary.splice(idxNo,1);
    displayBook();
}

// Change the read status
function changeReadStatus(e) {
    let idxNo = e.target.dataset.indexNumber;
    if (myLibrary[idxNo]["read"] == "Read") {
        myLibrary[idxNo]["read"] = "Not read yet";
    }
    else {
        myLibrary[idxNo]["read"] = "Read";
    }
    displayBook();
};

// Open Form to Add the Book
function openModal() {
    modal.style.display = "block";
};

// Close Form when adding the Book
function closeModal() {
    modal.style.display = "none";
};

// Submit Form with the Book
function onSubmit(e) {
    let title = modalTitle.value;
    let author = modalAuthor.value;
    let pages = modalPages.value;
    let checkbox = "";
    if (modalCheckbox.checked != false) {
        checkbox = "Read";
    } else {
        checkbox = "Not read yet";
    }
    let book = new Book(title, author, pages, checkbox);
    e.preventDefault();
    addBookToLibrary(book);
    resetForm();
    closeModal();
    displayBook(); 
}

// Start Project - get basic variables
const modal = document.querySelector(".modal");
const addNewBook = document.querySelector(".add-new-book");
addNewBook.addEventListener("click", openModal)
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", onSubmit);

// Form part
let modalTitle = document.querySelector(".modal-title");
let modalAuthor = document.querySelector(".modal-author");
let modalPages = document.querySelector(".modal-pages");
let modalCheckbox = document.querySelector(".modal-checkbox");

// Cards part
let cardsDiv = document.querySelector(".cards"); 

// Remove Button
let removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener("click", removeBook);
});

// Listen for clicks on remove or book read status button
document.addEventListener('click',function(e){
    if (e.target && e.target.classList[1] == 'remove-btn'){
        removeBook(e);
     }
    else if (e.target && e.target.classList[1] == 'read' || e.target && e.target.classList[1] == 'not-read') {
        changeReadStatus(e);
    }
 });

// Close Modal when clicked on the background
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

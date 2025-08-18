class Book {
  #isbn;
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
  }
  getInfo() {
    return `${this.title} by ${this.author} (ISBN: ${this.#isbn})`;
  }
  getISBN() {
    return this.#isbn;
  }
}

class Library {
  #books = [];

  addBook(book) {
    if (book instanceof Book) {
      this.#books.push(book);
    } else {
      console.error("Invalid object. Expected instance of Book.");
    }
  }
  listAllBooks() {
    this.#books.forEach((book) => {
      console.log("list all books: ", book.getInfo());
    });
  }
  findBookByISBN(isbn) {
    return this.#books.find((book) => book.getISBN() === isbn);
  }
  removeBookByISBN(isbn) {
    const bookIndex = this.#books.find((book) => book.getISBN() === isbn);
    if (bookIndex !== -1) {
      this.#books.splice(bookIndex, 1);
    }
  }
}

const myLibrary = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0-345-33968-3");
const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4");
const book3 = new Book("Dune", "Frank Herbert", "978-0-441-01359-3");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook({ title: "Invalid Book", author: "Nobody" }); // Should log an error

// List all books
console.log("--- All books in the library:");
myLibrary.listAllBooks();

// Find a specific book
console.log("\n--- Finding a book:");
const foundBook = myLibrary.findBookByISBN("978-0-452-28423-4");
console.log(foundBook.getInfo()); // 1984 by George Orwell...

// Remove a book
console.log("\n--- Removing a book...");
myLibrary.removeBookByISBN("978-0-452-28423-4");

// List books again
console.log("\n--- All books after removal:");
myLibrary.listAllBooks();


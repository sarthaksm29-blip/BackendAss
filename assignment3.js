/*
  Assignment 3
  Library Management System
*/

// library object to manage books
let library = {
  books: [],

  // 1. Add new books to the library
  addBook: function (title, author, isbn) {
    let newBook = {
      title: title,
      author: author,
      isbn: isbn,
      isAvailable: true
    };
    this.books.push(newBook);
    console.log("Book added: " + title);
  },

  // 2. Borrow a book (set isAvailable to false)
  borrowBook: function (isbn) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isbn === isbn) {
        if (this.books[i].isAvailable === true) {
          this.books[i].isAvailable = false;
          console.log("You have borrowed: " + this.books[i].title);
        } else {
          console.log("Sorry, " + this.books[i].title + " is already borrowed.");
        }
        return;
      }
    }
    console.log("Book with ISBN " + isbn + " not found.");
  },

  // 3. Return a book (set isAvailable to true)
  returnBook: function (isbn) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isbn === isbn) {
        if (this.books[i].isAvailable === false) {
          this.books[i].isAvailable = true;
          console.log("You have returned: " + this.books[i].title);
        } else {
          console.log(this.books[i].title + " was not borrowed.");
        }
        return;
      }
    }
    console.log("Book with ISBN " + isbn + " not found.");
  },

  // 4. Display the list of books with their availability
  displayBooks: function () {
    console.log("\n--- List of Books ---");
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      let status = book.isAvailable ? "Available" : "Not Available";
      console.log(book.title + " by " + book.author + " (ISBN: " + book.isbn + ") - " + status);
    }
    console.log("---------------------\n");
  }
};

// sample testing
library.addBook("The Alchemist", "Paulo Coelho", "101");
library.addBook("Atomic Habits", "James Clear", "102");
library.addBook("Harry Potter", "J.K. Rowling", "103");

// display initial list of books
library.displayBooks();

// borrow a book
library.borrowBook("101");

// try borrowing the same book again
library.borrowBook("101");

// display list to see updated status
library.displayBooks();

// return the book
library.returnBook("101");

// display list after returning
library.displayBooks();

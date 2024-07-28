// Implementing Object Destructuring
// The Destructuring is a JavaScript expression that makes it possible to unpack values from properties from objects, into distinct variables.
// If you can't give the variable name it can automatically give previous key name.

const book = {
    name : "Harry Potter",
    page : 300,
    publication : {
        pub_name : "J. K. Rowling",
        year : 1992
    }
}

// Old way to access
book.name; 

// New way to access
const {name : bookName} = book;
console.log(bookName); // Harry Potter

// Nested Object Destructuring
const {publication : {pub_name : authorName}} = book;
console.log(authorName); // J. K. Rowling

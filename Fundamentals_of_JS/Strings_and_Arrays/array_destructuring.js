// Here implementing Array Destructuring

const book = ["Harry Potter", , 10, 200, 140, ["Hogwart's", 1997]];

// Old way
// const bookName = book[0];
// const authorName = book[1] = "J. K. Rowling";
// const page = book[2];
// const price = book[3];
// console.log(authorName); // J. K. Rowling

// New way
// Nested array destructuring
const [bookName, author_name = "J. K. Rowling", min_page, max_page, price, [publication, year]] = book;
console.log(bookName); // Harry Potter
console.log(author_name); // J. K. Rowling
console.log(publication, year); // Hogwart's 1997

// Array destructuring in function
function arr() {
    return ["Harry Potter", "J.K. Rowling", 400];
}
const [BookName, authorName, page] = arr();
console.log(BookName); // Harry Potter
console.log(page); // 400

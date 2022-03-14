const books = require('./books');

const longestNamedBook = (array) => {
  return array.reduce((acc, book) => acc.name.length > book.name.length ? acc : book);
}
console.log(longestNamedBook(books));
const books = require('./books');

const oldBooks = (array) => {
  const year = new Date().getFullYear();
  return array.filter((book) => ((year - book.releaseYear) >= 60)).map((book) => book.name);
}
console.log(oldBooks(books));
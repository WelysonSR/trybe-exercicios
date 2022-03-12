const books = require('./books');

const oldBooksOrdered = (array) => {
  const year = new Date().getFullYear();
  return array.filter((book) => (year - book.releaseYear) >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear)
}
console.log(oldBooksOrdered(books));
const books = require('./books.js');

const fantasyOrScienceFiction = (array, genre1, genre2) => {
  return array.filter((book) =>  book.genre === genre1 || book.genre === genre2);
}
console.log(fantasyOrScienceFiction(books, 'Fantasia', 'Ficção Científica'));
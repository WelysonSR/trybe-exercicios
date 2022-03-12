const books = require('./books');

const fantasyOrScienceFictionAuthors = (array, genre1, genre2) => {
  const selectedGenres = [genre1, genre2]
  return array.filter((book) => selectedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors(books, 'Fantasia', 'Ficção Científica'));
const books = require('./books')
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = (array) => {
  const result = array.reduce((acc, book) => {
    const age = book.releaseYear - book.author.birthYear;
    return acc + age;
  }, 0);
  return result / array.length;
}
console.log(averageAge(books));
const books = require('./books.js');

const nameAndAge = (array) => {
  return array.map((book) => (
    {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  )).sort((a, b) => a.age - b.age)
}
console.log(nameAndAge(books));
const books = require('./books');

const authorWith3DotsOnName = (array) => {
  return array.find((book) => book.author.name.match(/^.\. .\. .\./ )).name
}
console.log(authorWith3DotsOnName(books));
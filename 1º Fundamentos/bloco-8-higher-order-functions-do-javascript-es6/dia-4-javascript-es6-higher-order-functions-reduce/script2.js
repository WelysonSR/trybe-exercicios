const books = require('./books');

const reduceNames = (array) => {
  return array.reduce((acc, book) => {    
    return `${acc}, ${book.author.name}`;
  }, '');
}
console.log(reduceNames(books));
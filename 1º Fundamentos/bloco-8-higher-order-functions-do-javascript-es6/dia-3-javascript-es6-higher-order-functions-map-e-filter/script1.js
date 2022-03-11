const books = require('./books.js');

const formatedBookNames = (array) => {
return array.map((book)=>`${book.name} - ${book.genre} - ${book.author.name}`);
}
console.log(formatedBookNames(books));
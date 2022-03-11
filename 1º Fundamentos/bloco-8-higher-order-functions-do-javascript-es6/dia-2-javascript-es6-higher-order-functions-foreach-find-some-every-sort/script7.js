const books = require('./books.js');

const authorUnique = (livros) => {

  // const livros2 = livros;
  // for (let i = 0; i < livros.length; i += 1) {
  //   for (let c = 0; c < livros2.length; c += 1) {
  //     console.log((livros2[c].author.birthYear === livros[i].author.birthYear
  //       && livros2[c].author.name !== livros[i].author.name));
  //   }
  // }
  // console.log('**********');

  return livros.every((livro) =>
    !livros.some((livroSome) =>
      (livroSome.author.birthYear === livro.author.birthYear)
      && (livroSome.author.name !== livro.author.name)));
}

console.log(authorUnique(books));
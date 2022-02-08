let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem-vindo, ${info.personagem}!`);

console.log("***********");

info.recorrente = "Sim";

console.log(info);

console.log("***********");

for (const key in info) {
    console.log(key);
}

console.log("***********");

for (const key in info) {
    console.log(info[key]);
}

console.log("***********");

// info.personagem += " e Tio Patinhas";
// info.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
// info.nota += " e O último MacPatinhas";

// for (const key in info) {
//     console.log(info[key]);
// }

let info1 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (const key in info) {
    if(info[key] === info1[key]){
        console.log(info.recorrente = "Ambos são recorrentes");
    }else{
        console.log(`${info[key]} e ${info1[key]}`);
    }
}

console.log("***********");

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log(`O livro de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

console.log("***********");

let novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

leitor.livrosFavoritos.push(novoLivro);

console.log(leitor.livrosFavoritos);

console.log("***********");

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);
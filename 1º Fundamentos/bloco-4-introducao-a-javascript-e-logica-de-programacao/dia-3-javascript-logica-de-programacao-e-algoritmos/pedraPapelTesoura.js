let jogador1 = Math.floor(Math.random() * 3) + 1;
let jogador2 = Math.floor(Math.random() * 3) + 1;

switch (jogador1) {
    case 1:
        jogador1 = "Pedra";
        break;
    case 2:
        jogador1 = "Papel";
        break;
    case 3:
        jogador1 = "Tesoura";
        break;

}

switch (jogador2) {
    case 1:
        jogador2 = "Pedra";
        break;
    case 2:
        jogador2 = "Papel";
        break;
    case 3:
        jogador2 = "Tesoura";
        break;

}


if (jogador1 === jogador2) {
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Empate`);
}

if(jogador1 === "Pedra" && jogador2 === "Tesoura"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador1 venceu`);
}else if(jogador1 === "Tesoura" && jogador2 === "Papel"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador1 venceu`);
}else if(jogador1 === "Papel" && jogador2 === "Pedra"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador1 venceu`);
}

if(jogador2 === "Pedra" && jogador1 === "Tesoura"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador2 venceu`);
}else if(jogador2 === "Tesoura" && jogador1 === "Papel"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador2 venceu`);
}else if(jogador2 === "Papel" && jogador1 === "Pedra"){
    console.log(`Jogador1: ${jogador1};`);
    console.log(`Jogador2: ${jogador2};`);
    console.log(`Jogador2 venceu`);
}
function descrição() {
    document.getElementById("conteudo").innerText = "Estarei trabalando em uma estituição finaceira na aria de TI";
}

function mudarCorMaior() {
    document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
}

function mudarCorMenor() {
    document.getElementsByTagName("section")[0].style.backgroundColor = 'white';
}

function corrigirH1() {
    document.getElementsByClassName("title")[0].innerText = 'JavaScript';
}

let upCase = document.getElementsByTagName("p");

function upTagP(upCase){
    for (let i = 0; i < upCase.length; i += 1) {
        upCase[i].innerHTML = upCase[i].innerText.toUpperCase();
    }
}

function consoleText(upCase){
    for (let i = 0; i < upCase.length; i += 1) {
        console.log(upCase[i].innerHTML);
    }
}

descrição()
mudarCorMaior()
mudarCorMenor()
corrigirH1()
upTagP(upCase)
consoleText(upCase)
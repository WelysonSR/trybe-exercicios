function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let mesDay = document.querySelector("#days");
let buttons = document.querySelector(".buttons-container");

function createElementTag(element, tagContent, classe) {
    let tagElement = document.createElement(element);
    tagElement.innerText = tagContent;
    tagElement.className = classe;
    return tagElement;
}

function addElement(parent, element) {
    parent.appendChild(element)
}

for (const day of dezDaysList) {
    if (day === 25) {
        let tag = createElementTag("li", day, "day holiday friday");
        addElement(mesDay, tag);
    } else if (day === 24 || day === 31) {
        let tag = createElementTag("li", day, "day holiday");
        addElement(mesDay, tag);
    } else if (day === 4 || day === 11 || day === 18) {
        let tag = createElementTag("li", day, "day friday");
        addElement(mesDay, tag);
    } else {
        let tag = createElementTag("li", day, "day");
        addElement(mesDay, tag);
    }
}

function holiday(buttonName) {
    let button = document.createElement('button');
    button.innerText = buttonName;
    button.id = "btn-holiday";
    buttons.appendChild(button);
}
holiday("Feriado");

let click1 = document.querySelector("#btn-holiday");
click1.addEventListener("click", backgroundColo);
let itens = document.querySelectorAll(".holiday");
let holidayColor1 = "white";
let holidayColor2 = "rgb(238,238,238)";

function backgroundColo() {
    for (let i = 0; i < itens.length; i += 1) {
        if (itens[i].style.backgroundColor === holidayColor1) {
            itens[i].style.backgroundColor = holidayColor2;
        } else {
            itens[i].style.backgroundColor = holidayColor1;
        }
    }
}

function fridays(day) {
    let button = document.createElement("button");
    button.innerText = day;
    button.id = "btn-friday";
    buttons.appendChild(button);
}
fridays("Sexta-feira");

let click2 = document.querySelector("#btn-friday");
click2.addEventListener("click", fridayDay);
let daysFriday = document.querySelectorAll(".friday");
let friday1 = "Sextou!";
let friday2 = [];

function fridayDay() {
    for (let i = 0; i < daysFriday.length; i += 1) {
        if (daysFriday[i].innerText !== friday1) {
            friday2.push(daysFriday[i].innerText);
            daysFriday[i].innerText = friday1;
        } else {
            daysFriday[i].innerText = friday2[i];
        }
    }
}

function pisitionLi() {
    let liPositio = document.querySelectorAll(".day");
    let positin = [];
    for (let i = 0; i < liPositio.length; i += 1) {
        positin = liPositio[i].addEventListener("mouseover", zoomPositive);
        positin = liPositio[i].addEventListener("mouseout", zoomNegative);
    }
    return positin;
}

pisitionLi()
function zoomPositive(event) {
    event.target = event.target.style.fontSize = "30px";
}

function zoomNegative(event) {
    event.target = event.target.style.fontSize = "20px";
}

let myTasks = document.querySelector(".my-tasks");

function customTrick(trick) {
    let span = document.createElement("span")
    span.innerText = trick;
    myTasks.appendChild(span);
}
customTrick("cozinhar")

function subtitleColor(color) {
    let div = document.createElement("div");
    div.className = "task";
    div.style.backgroundColor = color;
    myTasks.appendChild(div);
}
subtitleColor("blue");

let divClasse = document.querySelector(".task");
divClasse.addEventListener("click", swapClasse);

function swapClasse() {
    if (divClasse.className === "task") {
        divClasse.className = "task selected";
        console.log(divClasse.className);
    }else{
        divClasse.className = "task";
        console.log(divClasse.className);
    }
}
swapClasse()
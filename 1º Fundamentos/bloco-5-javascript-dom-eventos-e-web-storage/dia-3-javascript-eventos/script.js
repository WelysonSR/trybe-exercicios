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



function createElementTag(element, tagContent, classe) {
    let tagElement = document.createElement(element);
    tagElement.innerText = tagContent;
    tagElement.className = classe;
    return tagElement;
}

function addElement(parent, element) {
    parent.appendChild(element)
}
// holiday
for (const day of dezDaysList) {
    if (day === 24 || day === 25 || day === 31) {
        let tag = createElementTag("li", day, "day holiday");
        addElement(mesDay, tag);
    } else if(day === 4 || day === 11 || day === 18 || day === 25) {
        let tag = createElementTag("li", day, "day friday");
        addElement(mesDay, tag);
    }else{
        let tag = createElementTag("li", day, "day");
        addElement(mesDay, tag);
    }

}


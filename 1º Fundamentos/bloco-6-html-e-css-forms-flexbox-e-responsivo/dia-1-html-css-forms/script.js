const btn = document.getElementById('btn');




function forms(event) {
    event.preventDefault();

}


window.onload = () => {
    btn.addEventListener('click', forms);
}
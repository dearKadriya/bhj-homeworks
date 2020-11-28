function showLoader(event) {
let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function () {
    let progress = document.getElementById('progress');
    if (xhr.readyState === 0) {
        progress.value = 0;
    } else if (xhr.readyState === 1){
        progress.value = 0.25;
    } else if (xhr.readyState === 2) {
        progress.value = 0.5;
    } else if (xhr.readyState === 3) {
        progress.value = 0.75;
    } else if (xhr.readyState === 4) {
        progress.value = 1;
    }

}
event.preventDefault()};

let button = document.getElementById('send');

button.addEventListener('click', showLoader);
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const responseJson = JSON.parse(xhr.responseText);
        let title = document.getElementById('poll__title');
        title.innerHTML = responseJson.data.title;
        responseJson.data.answers.forEach(elem => createAnswers(elem));
        let answersButton = Array.from(document.getElementsByClassName('poll__answer'));
        answersButton.forEach(elem => elem.addEventListener('click', sendAnswer));

    }
};

function createAnswers(elem) {
    let pollAnswers = document.getElementById('poll__answers');
    let answer = document.createElement('button');
    answer.classList.add('poll__answer');
    answer.innerHTML = elem;
    pollAnswers.appendChild(answer);
}





function sendAnswer() {
    alert('Спасибо, ваш голос засчитан!')
}



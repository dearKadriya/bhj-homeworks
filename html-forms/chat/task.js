const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );



addEventListener('click', activateWidget);

function activateWidget() {
    chatWidget.classList.add('chat-widget_active');
}


addEventListener('keyup', sendMessage);

function sendMessage(event) {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const form = document.getElementById('chat-widget__input');
    let formText = form.value;
    if (String(event.key) === 'Enter' && formText!=='') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">` + hours + `:` + minutes + `</div>
            <div class="message__text">` + formText + `</div>
        </div>`
        document.getElementById('chat-widget__input').value = '';
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">` + hours + `:` + minutes + `</div>
            <div class="message__text">` + getRandomMessage() + `</div>
        </div>
        `
    } else {

    }
}

function getRandomMessage() {
   let arrMessage = ['Что?', 'Руконожность', 'Ничто?', 'Нет', 'Да', 'Нет технической возможности!'];
   return arrMessage[Math.floor(Math.random() * arrMessage.length)];

}
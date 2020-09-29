let timer = document.getElementById("timer");
const changeTime = function () {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        timer.textContent = 10;
        return alert("ВЫ ВЫЙГРАЛИ ВЫЙГРЫШ");

    }
}
setInterval(changeTime, 1000);
const cookie = document.getElementById("cookie" );
let counter = document.getElementById("clicker__counter");
cookie.onclick = function () {
    cookie.width+=10;
    cookie.height+=10;
    counter.textContent = Number(counter.textContent) + 1;
}
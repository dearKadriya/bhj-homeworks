const linkedMenu = document.querySelectorAll('.menu__link');
let arrayLink = Array.from(linkedMenu);
for (let i = 0; i < arrayLink.length; i++){
        arrayLink[i].onclick = function () {
            const test = arrayLink[i].closest(".menu__item").querySelector('.menu_sub');
            if (test.classList.contains('menu_active')) {
                test.classList.remove('menu_active');
                } else {
                test.classList.add('menu_active');
            } return false;
            }
}

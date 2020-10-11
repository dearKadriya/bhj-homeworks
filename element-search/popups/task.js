const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');
modalMain.classList.add('modal_active');
const ModalClose = document.getElementsByClassName('modal__close_times');

function closingModals () {
    let arrayModals = Array.from(ModalClose);
    for (let i = 0; i < arrayModals.length; i ++) {

        arrayModals[i].onclick = function () {
            arrayModals[i].closest('.modal').classList.remove('modal_active');
        }
    }
}
function showSecondModals() {
    let arrayGood = Array.from(showSuccess);
    for (let i = 0; i < arrayGood.length; i ++) {
        console.log(arrayGood);
        arrayGood[i].onclick = function () {
            modalSuccess.classList.add('modal_active');
            modalMain.classList.remove('modal_active');
        }
    }
}
showSecondModals();
closingModals();


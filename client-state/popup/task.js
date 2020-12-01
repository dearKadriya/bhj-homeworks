const modalMain = document.getElementById('subscribe-modal');
let modalClose = modalMain.querySelector('.modal__close_times');

modalClose.addEventListener('click', closingModal);
function closingModal() {
    modalClose.closest('.modal').classList.remove('modal_active');
    document.cookie = 'subscription_form=closed';
    console.log(getCookie('subscription_form'));

}
const getCookie = (name)=> {
    const value= "; "+ document.cookie;
    let parts= value.split("; "+ name+ "=");
    if (parts.length=== 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}
if (getCookie('subscription_form') !== 'closed'){
    modalMain.classList.add('modal_active');
}
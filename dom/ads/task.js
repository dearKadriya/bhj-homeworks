
function rotate() {
const activeRotateElem = Array.from(document.getElementsByClassName('rotator__case_active'));
    activeRotateElem.forEach(rotateElem => {
        const parentElem = rotateElem.parentElement;
        let firstElem =  parentElem.children[0];
        rotateElem.classList.remove('rotator__case_active');
        if (rotateElem === parentElem.lastElementChild) {
            firstElem.classList.add('rotator__case_active')
        } else {
            rotateElem.nextElementSibling.classList.add('rotator__case_active');
        }

    })
}
setInterval(rotate, 100);
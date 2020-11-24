elementsWithTips = Array.from(document.getElementsByClassName('has-tooltip'));

elementsWithTips.forEach(elem => elem.addEventListener('click', controller));
let previousElem;

function controller(event) {
    let activeTips = Array.from((document.getElementsByClassName('tooltip_active')));
    if (activeTips.length === 0) {
        showTips(this);
    } else if (this !== previousElem) {
        activeTips.forEach(elem => elem.classList.remove('tooltip_active'));
        showTips(this);
    } else if (this === previousElem) {
        activeTips.forEach(elem => elem.classList.remove('tooltip_active'));
    }
    event.preventDefault()

}

function showTips(elem) {
    let tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.classList.add('tooltip_active');
    let top = (Number(elem.getBoundingClientRect().top) + 20);
    let left = elem.getBoundingClientRect().left;
    tip.setAttribute("style", `left: ${left}px; top: ${top}px`);
    tip.innerText = elem.title;
    elem.appendChild(tip);
    previousElem = elem;

}
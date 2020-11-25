const check = Array.from(document.getElementsByClassName('interest__check'));

check.forEach( elem => elem.addEventListener('click', () => {
    let parent = elem.closest('.interest');
    let goodArray = Array.from(parent.querySelectorAll('.interest__check'));
    if (elem.checked) {
        goodArray.forEach(elem => elem.checked = true);
    } else {
        goodArray.forEach(elem => elem.checked = false);
    }
})
);









































const theme = Array.from(document.querySelectorAll('.interest'));
theme.forEach( elem => elem.addEventListener('change', () => {
    let check = Array.from(elem.querySelectorAll('.interest__check'));
    if (check[0].checked) {
        for (let i = 0; i < check.length; i++) {
            check[i].checked = true;
        }
    } else {
        for (let i = 0; i < check.length; i++) {
            check[i].checked = false;
        }
    }

}));

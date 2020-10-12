const tabs = Array.from(document.getElementsByClassName('tab'));
const content = Array.from(document.getElementsByClassName('tab__content'));

const chooseTab = function(event) {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] !== this) {
            tabs[i].classList.remove('tab_active');
            content[i].classList.remove('tab__content_active');
            this.classList.add('tab_active');
            content[tabs.indexOf(this)].classList.add('tab__content_active');
            event.preventDefault();
        }
    }
};

tabs.forEach(elem => elem.addEventListener('click', chooseTab));
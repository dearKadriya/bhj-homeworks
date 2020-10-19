const revealBlocks = Array.from(document.getElementsByClassName('reveal'));
function isInViewport() {
    revealBlocks.forEach(revealElem => {
        if (revealElem.getBoundingClientRect().top < window.innerHeight) {
            revealElem.classList.add('reveal_active');
        }
    })
}

window.addEventListener('scroll', isInViewport);


function arrowsListener() {
    const allArrows = Array.from(document.getElementsByClassName('slider__arrow'));
    for (let i = 0; i < allArrows.length; i++) {
        if (allArrows[i].classList.contains('slider__arrow_prev')) {
            allArrows[i].onclick = function () {
                slideControl('previous');
            }
        } else {
            allArrows[i].onclick = function(){
                slideControl('next');
            };
        }
    }
};


function slideControl(direction) {
    const allSliders = Array.from(document.getElementsByClassName('slider__item'));
    for(let i = 0; i < allSliders.length; i++) {
        if (allSliders[i].classList.contains('slider__item_active')) {
            allSliders[i].classList.remove('slider__item_active');
            if (direction === 'previous') {
                if (i === 0) {
                    allSliders[allSliders.length - 1].classList.add('slider__item_active');
                    return false;
                } else {
                    allSliders[i - 1].classList.add('slider__item_active');
                    return false;
                }
            } else {
                if (i === (allSliders.length - 1)) {
                    allSliders[0].classList.add('slider__item_active');
                    return false;
                } else {
                    allSliders[i + 1].classList.add('slider__item_active');
                    return false;
                }
            }
        }
    }
};

arrowsListener();
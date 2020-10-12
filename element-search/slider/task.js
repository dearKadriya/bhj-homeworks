
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
        const activeSlider = allSliders.findIndex(element => element.classList.contains('slider__item_active'));
        if (activeSlider >= 0) {
            allSliders[activeSlider].classList.remove('slider__item_active');
            if (direction === 'previous') {
                if (activeSlider === 0) {
                    allSliders[allSliders.length - 1].classList.add('slider__item_active');
                    return false;
                } else {
                    allSliders[activeSlider - 1].classList.add('slider__item_active');
                    return false;
                }
            } else {
                if (activeSlider === (allSliders.length - 1)) {
                    allSliders[0].classList.add('slider__item_active');
                    return false;
                } else {
                    allSliders[activeSlider + 1].classList.add('slider__item_active');
                    return false;
                }
            }
        }

};

arrowsListener();
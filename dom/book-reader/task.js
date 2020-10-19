const fontSize = Array.from(document.getElementsByClassName('font-size'));
const bookText = document.getElementById('book');
const changeSize = function(event){
    for (let i = 0; i< fontSize.length; i++){
        if (fontSize[i] !== this){
            fontSize[i].classList.remove('font-size_active');
            this.classList.add('font-size_active');
        }
        if (this.classList.contains('font-size_small')){
            bookText.classList.remove('book_fs-big');
            bookText.classList.add('book_fs-small');
        } else if (this.classList.contains('font-size_big')) {
            bookText.classList.remove('book_fs-small');
            bookText.classList.add('book_fs-big');
        } else  bookText.classList.remove('book_fs-small', 'book_fs-big' );
    }
    event.preventDefault();
}
fontSize.forEach(elem => elem.addEventListener('click', changeSize));

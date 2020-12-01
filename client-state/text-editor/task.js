let editor = document.getElementById('editor');
let clear = document.getElementById('clear__btn');
editor.addEventListener('input', recordingText);
clear.addEventListener('click', clearStorageText);
editor.value = localStorage.text;
function recordingText() {
    localStorage.setItem('text', '');
    localStorage['text'] = editor.value;
}
function clearStorageText() {
    localStorage.removeItem('text');
    editor.value = '';
}

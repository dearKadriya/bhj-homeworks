form = document.getElementById('task__input');
button = document.getElementById('tasks__add');
tasksList = document.getElementById('tasks__list');


button.addEventListener("click", sendToList);

function sendToList(event) {

    let tasksText = form.value;
    if (tasksText !=='') {
    let elem = document.createElement('div');
    elem.classList.add('task');
    elem.innerHTML = `<div class="task__title">` + tasksText +
            `</div>
        <a href="#" class="task__remove">&times;</a>`
    tasksList.appendChild(elem);
    form.value = '';
    }
    const removeButton = Array.from(document.getElementsByClassName('task__remove'));
    removeButton.forEach(elem => elem.addEventListener('click', removeTask));
    event.preventDefault();
}
function removeTask() {
 this.closest('.task').remove();
}
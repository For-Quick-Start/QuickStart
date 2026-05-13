const form = document.querySelector('.js-form');
const nameField = form.querySelector('[name=todo-name');
const deadlineField = form.querySelector('[name=todo-deadline');
const todosContainer = document.querySelector('.js-container');
const errorContainer = document.querySelector('.js-error-container');
const todoItems = [];

function renderToDos() {
    let html = '<ul>';
    for (let item of todoItems) {
        html += `<li>${item.todoName} ${item.todoDate}</li>`;
    }
    html += '</ul>';
    todosContainer.innerHTML = html;
}

function formSubmitted(event) {
    event.preventDefault();

    const todoName = nameField.value;
    const todoDate = deadlineField.value;

    if (todoName.length === 0 || todoDate.length === 0) {
        errorContainer.innerHTML = ('ERROR: Name and or Date is/are empty');
        return;
    } else {
        errorContainer.innerHTML = '';
    }

    todoItems.push({
        todoName: nameField.value,
        todoDate: deadlineField.value
    });

    nameField.value = '';
    deadlineField.value = '';
    renderToDos();
}

form.addEventListener('submit', formSubmitted);



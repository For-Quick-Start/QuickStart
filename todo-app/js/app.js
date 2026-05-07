// --- State ---
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// --- DOM References ---
const form = document.getElementById('todo-form'); 
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// --- Functions ---

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = ''; // Clear the list

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => {
      toggleTodo(todo.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTodo(text) {
  const todo = {
    id: Date.now(), // Simple unique ID using timestamp
    text: text,
    completed: false
  };
  todos.push(todo);
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

// --- Event Listeners ---

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    addTodo(input.value);
    input.value = '';
  }
});

// --- Init ---
renderTodos();
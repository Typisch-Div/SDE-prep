        // const todoInput = document.getElementById('todoInput');
        // const addBtn = document.getElementById('addBtn');
        // const todoList = document.getElementById('todoList');
        // let todos = [];

        // const { createElement } = require("react");

        // // Load todos from localStorage
        // function loadTodos() {
        //     const saved = localStorage.getItem('todos');
        //     if (saved) {
        //         todos = JSON.parse(saved);
        //         renderTodos();
        //     }
        // }

        // // Save todos to localStorage
        // function saveTodos() {
        //     localStorage.setItem('todos', JSON.stringify(todos));
        // }

        // // Add new todo
        // function addTodo() {
        //     const text = todoInput.value.trim();
            
        //     if (text === '') {
        //         alert('Please enter a task!');
        //         return;
        //     }

        //     const todo = {
        //         id: Date.now(),
        //         text: text,
        //         completed: false
        //     };

        //     todos.push(todo);
        //     saveTodos();
        //     renderTodos();
        //     todoInput.value = '';
        //     todoInput.focus();
        // }

        // // Delete todo
        // function deleteTodo(id) {
        //     todos = todos.filter(todo => todo.id !== id);
        //     saveTodos();
        //     renderTodos();
        // }

        // // Toggle todo completion
        // function toggleTodo(id) {
        //     todos = todos.map(todo => 
        //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
        //     );
        //     saveTodos();
        //     renderTodos();
        // }

        // // Render todos to DOM
        // function renderTodos() {
        //     if (todos.length === 0) {
        //         todoList.innerHTML = '<div class="empty-message">No tasks yet. Add one!</div>';
        //         return;
        //     }

        //     todoList.innerHTML = todos.map(todo => `
        //         <li class="todo-item ${todo.completed ? 'completed' : ''}">
        //             <span class="todo-text" onclick="toggleTodo(${todo.id})">
        //                 ${todo.text}
        //             </span>
        //             <button class="delete-btn" onclick="deleteTodo(${todo.id})">
        //                 Delete
        //             </button>
        //         </li>
        //     `).join('');
        // }

        // // Event listeners
        // addBtn.addEventListener('click', addTodo);
        // todoInput.addEventListener('keypress', (e) => {
        //     if (e.key === 'Enter') {
        //         addTodo();
        //     }
        // });

        // // Load todos on page load
        // loadTodos();

let input=document.getElementById('todoInput');
let button=document.getElementById('addBtn');
let ul=document.getElementById('todoList');

button.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    delbtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);

    input.value = "";
});

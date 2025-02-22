document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Load todos from Local Storage on page load
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Function to render todos
    function renderTodos() {
        todoList.innerHTML = ''; // Clear the list

        // Ternary Operator: Display message based on the number of tasks
        const message = todos.length > 0 ? "You have tasks to do!" : "No tasks yet.";
        console.log(message);

        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;

            // Add delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete-btn"></i>';
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1); // Remove todo from array
                saveToLocalStorage(); // Save updated todos to Local Storage
                renderTodos(); // Re-render the list
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    // Function to save todos to Local Storage
    function saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Add event listener to "Add Task" button
    addTodoButton.addEventListener('click', () => {
        const task = todoInput.value.trim();

        // Use === to check if the task is not empty
        if (task === '') {
            alert('Please enter a task!');
            return;
        }

        // Use == to check if the task already exists in the list
        if (todos.some(existingTask => existingTask.toLowerCase() == task.toLowerCase())) {
            alert('This task already exists!');
            return;
        }

        todos.push(task); // Add new task to array
        saveToLocalStorage(); // Save to Local Storage
        renderTodos(); // Re-render the list
        todoInput.value = ''; // Clear input field
    });

    // Render todos on page load
    renderTodos();
});
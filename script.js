document.addEventListener('DOMContentLoaded', function() {
    // Handle checkbox changes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const todoItem = this.closest('.todo');
            const textBox = todoItem.querySelector('.text-box');
            
            if (this.checked) {
                todoItem.style.backgroundColor = 'green'; // Change background to green
                textBox.style.textDecoration = 'none'; // Ensure no line-through
            } else {
                todoItem.style.backgroundColor = '#252424'; // Revert to original color
            }
        });
    });

    // Handle delete buttons
    const deleteButtons = document.querySelectorAll('.todo-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const todoItem = event.target.closest('.todo');
            todoItem.remove(); // Remove the closest '.todo' container
        });
    });

    // Handle input display as a new todo item
    const todoInput = document.querySelector('.input-form');
    const todoList = document.querySelector('.todolist');
    const addButton = document.querySelector('.buttons');

    // Add the typed value to the to-do list when clicking the "ADD" button
    addButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim(); // Get the value of the input

        if (todoText) {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo');

            // Create the checkbox input
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('todo-checkbox');

            // Create the label for the todo item
            const label = document.createElement('label');
            label.classList.add('text-box');
            label.textContent = todoText;

            // Create the delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('todo-button');
            deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #605656;"></i>';

            // Append the checkbox, label, and delete button to the todo item
            todoItem.appendChild(checkbox);
            todoItem.appendChild(label);
            todoItem.appendChild(deleteButton);

            // Add the new todo item to the list
            todoList.appendChild(todoItem);

            // Clear the input field after adding the item
            todoInput.value = '';

            // Add an event listener to the delete button
            deleteButton.addEventListener('click', function() {
                todoItem.remove();
            });

            // Add an event listener for the checkbox
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    todoItem.style.backgroundColor = 'green';
                    label.style.textDecoration = 'none';
                } else {
                    todoItem.style.backgroundColor = '#252424';
                }
            });
        }
    });

    // Optional: Allow hitting Enter key to add a new item
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});

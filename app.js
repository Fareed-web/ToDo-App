const todo_input = document.getElementById("todo_input");
const add_todo_btn = document.getElementById("add_todo_btn");
const delete_all_todo_button = document.getElementById("delete_all_todo_button");
const todo_list = document.getElementById("todo_list");

add_todo_btn.addEventListener('click', function() {
    if (!todo_input.value.trim()) {
        alert('Todo not defined');
        return;
    }

    let listItem = document.createElement('div');
    listItem.className = 'todo_item';

    let span = document.createElement('span');
    span.textContent = todo_input.value;

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit_btn';
    editButton.addEventListener('click', function() {
        edit(editButton);
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete_btn';
    deleteButton.addEventListener('click', function() {
        deletefun(deleteButton);
    });

    listItem.appendChild(span);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todo_list.appendChild(listItem);
    todo_input.value = '';
});

function deletefun(element) {
    element.parentElement.remove();
}

delete_all_todo_button.addEventListener('click', function() {
    todo_list.innerHTML = '';
});

function edit(element) {
    let spanElement = element.parentElement.querySelector('span');
    let currentText = spanElement.textContent.trim();

    // Create an input field
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    inputField.classList.add('edit-input');

    // Replace span with the input field
    spanElement.replaceWith(inputField);

    // Change Edit button to Save button
    element.textContent = 'Save';
    element.className = 'save_btn';
    element.onclick = function() {
        // Get the new value from the input field
        let newText = inputField.value.trim();

        // Replace input field with span
        let newSpan = document.createElement('span');
        newSpan.textContent = newText;
        inputField.replaceWith(newSpan);

        // Change Save button back to Edit button
        this.textContent = 'Edit';
        this.className = 'edit_btn';
        this.onclick = function() {
            edit(this);
        };
    };
}

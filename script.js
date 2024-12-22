document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button onclick="editTask(this)">✎</button>
        <button onclick="deleteTask(this)">✖</button>
    `;

    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    
    if (taskItem.classList.contains('editing')) {
        taskItem.classList.remove('editing');
        taskText.contentEditable = false;
    } else {
        taskItem.classList.add('editing');
        taskText.contentEditable = true;
        taskText.focus();
    }
}


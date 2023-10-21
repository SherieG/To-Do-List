const taskInput = document.getElementById('talkInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.ariaValueMax.trim();

    if(taskText !== "") {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = taskText + '<button onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(taskItem);
        taskInput.value="";
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
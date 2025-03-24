let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        updateTaskList();
        taskInput.value = "";
    }
}

function undoTask() {
    if (tasks.length > 0) {
        tasks.pop();
        updateTaskList();
    }
}

function updateTaskList() {
    let taskListElement = document.getElementById("taskList");
    taskListElement.innerText = tasks.length > 0 ? tasks.join(" ") : "None";
}
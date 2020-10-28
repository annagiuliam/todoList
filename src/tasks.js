import {displayTask} from "./dom";

const taskFactory = (title, category, dueDate, priority, description) => {

    return { title, category, dueDate, priority, description }
}

const taskList = (() => {
    const list = [];

    return {list}
})();

function createNewTask() {
    const title = document.querySelector("#task-title-input").value;
    const dueDate = document.querySelector("#date-input").value;
    const category = document.querySelector("#category-input").value;
    const priority = document.querySelector("#priority-select").value;
    const description = document.querySelector("textarea").value;

    const newTask = taskFactory(title, category, dueDate, priority, description);
    addTaskToList(newTask);
    displayTask(newTask);
    console.log(taskList.list);
}



function addTaskToList(task) {
    const list = taskList.list;
    list.push(task);
}

export { createNewTask }
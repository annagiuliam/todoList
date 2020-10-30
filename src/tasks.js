//import {  displayTask} from "./dom";

const taskFactory = (title, category, dueDate, priority, description) => {

    return { title, category, dueDate, priority, description }
}

const taskList = (() => {
    const list = [];

    return {list}
})();

const newTask = () => {
    const title = document.querySelector("#task-title-input").value.trim().toLowerCase();
    const dueDate = document.querySelector("#date-input").value.trim().toLowerCase();
    const category = document.querySelector("#category-input").value.trim().toLowerCase();
    const priority = document.querySelector("#priority-select").value.trim().toLowerCase();
    const description = document.querySelector("textarea").value.trim().toLowerCase();

    const task = taskFactory(title, category, dueDate, priority, description);
    return task;
    
}

function verifyTask() {
    const list = taskList.list;
    const task = newTask();
    if (listIncludesTask(list, task.title)) {
        alert("You already created this task");
    } else {
        list.push(task);
        //displayTask(task);
        //console.log(task);
    }
}

function listIncludesTask(list, title) {  
    if (list.length === 0) {     
        return false;
   } else {
       return list.some(task => task["title"] === title);
    }
    
}

export { newTask, verifyTask }
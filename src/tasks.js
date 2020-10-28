import {displayTask} from "./dom";

const taskFactory = (title, category, dueDate, priority, description) => {

    return { title, category, dueDate, priority, description }
}

const taskList = (() => {
    const list = [];

    return {list}
})();

function createNewTask() {
    const title = document.querySelector("#task-title-input").value.trim();
    const dueDate = document.querySelector("#date-input").value.trim();
    const category = document.querySelector("#category-input").value.trim();
    const priority = document.querySelector("#priority-select").value.trim();
    const description = document.querySelector("textarea").value.trim();

    const newTask = taskFactory(title, category, dueDate, priority, description);
    addTaskToList(newTask);
    displayTask(newTask);
    console.log(taskList.list);
}



function addTaskToList(task) { 
    const list = taskList.list;   
    if (listIncludesTask(list)) {   
        alert("You already created this task");
    } else {
        list.push(task);
    } 
}

function listIncludesTask(list) {    
    const inputTitle = document.querySelector("#task-title-input").value;
    
    for (let i = 0; i < list.length; i++) {
         let task = list[i];                
        return task["title"] === inputTitle;        
    }
}

export { createNewTask }
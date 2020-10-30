//import {displayTask} from "./dom";

const taskFactory = (title, category, dueDate, priority, description) => {

    return { title, category, dueDate, priority, description }
}

const taskList = (() => {
    const list = [];

    return {list}
})();

function createNewTask() {
    const title = document.querySelector("#task-title-input").value.trim().toLowerCase();
    const dueDate = document.querySelector("#date-input").value.trim().toLowerCase();
    const category = document.querySelector("#category-input").value.trim().toLowerCase();
    const priority = document.querySelector("#priority-select").value.trim().toLowerCase();
    const description = document.querySelector("textarea").value.trim().toLowerCase();

    const newTask = taskFactory(title, category, dueDate, priority, description);
    const list = taskList.list;

    
    if (listIncludesTask(list, newTask.title)) {
        alert("You already created this task");
    } else {
        list.push(newTask);
        displayTask(newTask);
    }
    
   console.log(list);

    
}


function listIncludesTask(list, title) {  
    if (list.length === 0) {     
        return false;
   } else {
       return list.some(task => task["title"] === title);
    }
    
}

export { createNewTask }
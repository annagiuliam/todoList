import {formatString} from "./dom"

const taskFactory = (title, category, dueDate, priority, description, completed = false) => {

    return { title, category, dueDate, priority, description, completed}
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


function taskIsValid(list, title) {  
    if (list.length === 0) {     
        return false;
   } else {
       return list.some(task => task["title"] === title);
    }
    
}


function toggleCompleted(divId) {
 const list = taskList.list;

 list.forEach(task => {   
     if (formatString(task.title) === divId) {         
         if (! task.completed) {
             task.completed = true;             
         } else {
           task.completed = false;           
         }          
     }
 })
 
}

function sortByCompleted() {
    const list = taskList.list;
    
        const filteredList = list.filter(task => {
         return task.completed === true;
       });
    
       return filteredList;
}


function sortByCategory() {
    const cat = event.target.id;
    const list = taskList.list; 
      
    
        const filteredList = list.filter(task => {
         return formatString(task.category) === cat;
       });
    
       return filteredList;
   
}

function categoryItems(cat) {
    const list = taskList.list;       
    
        const filteredList = list.filter(task => {
         return formatString(task.category) === cat;
       });
       
       return filteredList.length;
}

function sortByPriority() {
    const list = taskList.list;
    
        const filteredList = list.filter(task => {
         return task.priority === "high";
       });
    
       return filteredList;
}

function deleteTask(task) {
    const list = taskList.list;
    const taskIndex = list.indexOf(task);
    list.splice(taskIndex, 1);
}

function deleteAllTasks() {    
    taskList.list = [];
   
}

function completeAllTasks() {
    const list = taskList.list;
    list.forEach(task => {   
        task.completed = true;
    })
}


export { newTask, taskIsValid, taskList, sortByCategory, sortByPriority, toggleCompleted, sortByCompleted, deleteTask, deleteAllTasks, completeAllTasks, categoryItems}
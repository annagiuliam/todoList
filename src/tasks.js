const taskFactory = (title, category, dueDate, priority, description, completed = false) => {

    return { title, category, dueDate, priority, description, completed }
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

function toggleCompleted(id) {
 const list = taskList.list;

 list.forEach((task) => {   
     if (task.title === id) {         
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
         return task.category === cat;
       });
    
       return filteredList;
   
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
    //console.log(list);
}


export { newTask, taskIsValid, taskList, sortByCategory, sortByPriority, toggleCompleted, sortByCompleted, deleteTask}
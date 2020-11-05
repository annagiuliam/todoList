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


function taskIsValid(list, title) {  
    if (list.length === 0) {     
        return false;
   } else {
       return list.some(task => task["title"] === title);
    }
    
}

function sortByCategory(e) {
    const cat = e.target.id;
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



export { newTask, taskIsValid, taskList, sortByCategory, sortByPriority}
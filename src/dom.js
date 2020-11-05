import { format } from 'date-fns';
import { taskList, newTask, sortByCategory, sortByPriority} from './tasks';


function createDomEle(parent, type, attributes, text) {
    const parentContainer = document.querySelector(parent);
    const element = document.createElement(type);
    
    if (attributes != null) {
        for (let key in attributes) {
            let value = attributes[key];
            if (key != "class") {
                element.setAttribute(key, value);                
                } else {                     
                   for (let i = 0; i < value.length; i++) {
                        if (value[i] != "") {                            
                        element.classList.add(value[i]); 
                        }
                                      
                    }           
            }            
        };
    }

    if (text != "") {
        element.textContent = text;
    } else {
        element.textContent = "";
    }
    
    parentContainer.appendChild(element); 
}

function addNewListener(target, event, action) {
    
    const newTargets = document.querySelectorAll(target);
    newTargets.forEach(target => 
    target.addEventListener(event, action));
    
}


const categoryListener = (() => {
    addNewListener("#all", "click", function(e) {
        sortTasks(e);
    })
})();


function displayTask(task) {
    const taskTitle = formatString(task.title);
    
    createTaskcontainer(taskTitle);
    addCheckbox(taskTitle);
    addTitle(task, taskTitle);
    addDueDate(task, taskTitle);
    addPriority(task,taskTitle);
    addDescription(task, taskTitle);
    addCategory(task, taskTitle);  
    
    
}

function createTaskcontainer(taskTitle) {
    createDomEle("#tasks-container",
    "div",
    {class : ["task", taskTitle],   
    id : `task-${taskTitle}`,     
    });
}

function addCheckbox(taskTitle) {
    createDomEle(`#task-${taskTitle}`,
    "input",
    {type : "checkbox",
    class : ["task-detail", "task-checkbox"],   
    id : `checkbox-${taskTitle}`,     
    });
}

function addTitle(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`,
    "div",
    {class : ["task-detail", "task-title"],   
    id : `title-${taskTitle}`},
    capitalize(task.title));
}

function addDueDate(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`,
        "div",
        {class : ["task-detail", "task-dueDate"],   
        id : `dueDate-div-${taskTitle}`},
    );

    createDomEle(`#dueDate-div-${taskTitle}`,
        "span",
        {class : ["dueDate-icon-span"],
        id : `dueDate-icon-span-${taskTitle}` },
    );

    if (task.dueDate != "") { 
        createDomEle(`#dueDate-icon-span-${taskTitle}`,
            "i",
            {class : ["fa", "fa-calendar"]},
        );
    }    

    createDomEle(`#dueDate-div-${taskTitle}`,
        "span",
        {id : `dueDate-text-${taskTitle}` },
        formatDate(task.dueDate)
        //task.dueDate
    );
    
}

function addPriority(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`,
    "div",
    {class : ["task-detail", "task-priority"],
    id : `priority-${taskTitle}` }
    );

    if (task.priority === "high") {
        createDomEle(`#priority-${taskTitle}`,
        "span",
        {class : ["priority-icon-span"],
        id : `priority-icon-span-${taskTitle}` },
        );

        createDomEle(`#priority-icon-span-${taskTitle}`,
        "i",
        {class : ["fa", "fa-exclamation-triangle"]},
        );
    }  
}

function addCategory(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`,
    "div",
    {class : ["task-detail", "task-category"],   
    id : `category-div-${taskTitle}`},
    );

    createDomEle(`#category-div-${taskTitle}`,
    "span",
    {class : ["category-icon-span"],
    id : `category-icon-span-${taskTitle}` },
    );

    if (task.category != "") {   
        createDomEle(`#category-icon-span-${taskTitle}`,
        "i",
        {class : ["fa", "fa-tag"]},
        );
    }  

    createDomEle(`#category-div-${taskTitle}`,
    "span",
    {id : `category-text-${taskTitle}` },
    capitalize(task.category)
    );
}

function addDescription(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`, 
    "div",
    { class : ["task-detail", "task-description"],
    id : `description-${taskTitle}` },
    task.description);  
}


function formatString(string) {
    if (string != "") {
        
        return string.split(/\W+/).join('');
    } else { return ""};
  
}

function formatDate(date) {
    if (date != "") {
        const dateInfo = date.split("-");
        const formDate = format(new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]), "PP");
        return formDate;
    }
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayCategory(task) {
    if ( task.category != "" && !document.querySelector(`#${task.category}`)) {
        createDomEle("#tasks-list",
        "li",
        { class : ["task-li"],
       id : formatString(task.category)},       
        capitalize(task.category)
        );

        addNewListener(".task-li", "click", function(e) {
          sortTasks(e);  
        })
    }
    // } else {
    //     console.log("not found");
    // }
}


function sortTasks(e) {
    const list = taskList.list;
    const categoryTasks = sortByCategory(e);
    
    
    const container = document.querySelector("#tasks-container");
    container.textContent = "";

    if (e.target.id === "all") {
        list.forEach((task) => {
            displayTask(task);
        })
    } else if (e.target.id === "high-prio") {
        const priorityTasks = sortByPriority();
        priorityTasks.forEach((task) => {
            displayTask(task);
        })
    }
    else {
        categoryTasks.forEach((task) => {
            displayTask(task);
        })
    }

    
}
// const FormValidation = (() => {
    
//     const form = document.querySelector("form");
//     const titleInput = document.querySelector("#task-title-input");
//         form.onsubmit = function(){        
//             if (titleInput.value != "") {        
//                 newTask();
                
//                 verifyTask();
//                 resetForm();
//             } else {            
//                 titleInput.classList.add("invalid")
//                 alert("Enter task title");
//             }
//         }    
// })();

function resetForm() {
    const form = document.querySelector("form");
    form.reset();
}





export { resetForm, createDomEle, displayTask, displayCategory, addNewListener }
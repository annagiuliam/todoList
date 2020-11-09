import { format } from 'date-fns';
import { taskList, newTask, sortByCategory, sortByPriority, toggleCompleted, sortByCompleted, deleteTask} from './tasks';


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
    
    // const taskDiv = document.querySelector(`#${task.title}`);
    // console.log(taskDiv)

    // if (checkboxChecked()) {
    //     taskDiv.classList.add("completed");
        
    // } else {
    //     taskDiv.classList.remove("completed");
        
    // }
    
    createTaskcontainer(task, taskTitle);
    addCheckbox(task, taskTitle);
    addTitle(task, taskTitle);
    addDueDate(task, taskTitle);
    addEditBtn(task, taskTitle);
    addPriority(task,taskTitle);
    addDescription(task, taskTitle);
    addCategory(task, taskTitle);   
    
}

function createTaskcontainer(task, taskTitle) {
    createDomEle("#tasks-container",
    "div",
    {class : ["task", taskTitle],   
    id : taskTitle,     
    });    

    const taskDiv = document.querySelector(`#${taskTitle}`);
    
    if (task.completed) {
        taskDiv.classList.add("completed");
        
    } else {
        taskDiv.classList.remove("completed");
        
    }
}

function addCheckbox(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
    "input",
    {type : "checkbox",
    class : ["checkbox"],   
    id : `checkbox-${taskTitle}`,     
    }); 

    const checkbox = document.querySelector(`#checkbox-${taskTitle}`);   
    if (task.completed) {
        checkbox.checked = true;
        
    } else {
        checkbox.checked = false;        
    }

    addNewListener(`#checkbox-${taskTitle}`, "click", toggleTask);

    

    // createDomEle(`#checkbox-div-${taskTitle}`,
    // "input",
    // {type : "checkbox",
    // class : ["task-detail", "task-checkbox"],   
    // id : `checkbox-${taskTitle}`,     
    // });

    // createDomEle(`#checkbox-div-${taskTitle}`,
    // "label",
    // { for : `checkbox-${taskTitle}`         
    // });
}


function addTitle(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
    "div",
    {class : ["task-detail", "task-title"],   
    id : `title-${taskTitle}`},
    capitalize(task.title));
}

function addDueDate(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
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
    createDomEle(`#${taskTitle}`,
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

function addEditBtn(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
    "div",
    {class : ["edit-btn"],
    id : `edit-btn-${taskTitle}` }
    )

    createDomEle(`#edit-btn-${taskTitle}`,
    "i",
    {class : ["task-icon", "fa", "fa-edit"],
    id : `edit-icon-${taskTitle}` }
    );

    addNewListener(`#edit-btn-${taskTitle}`, "click", function() {
        editTask(task, taskTitle);
    })

}

function editTask(task, taskTitle) {
    
    
    clearTaskDom(taskTitle);
    fillForm(task);
    deleteTask(task);
}

function clearTaskDom(taskTitle) {
    const taskContainer = document.querySelector(`#${taskTitle}`);
    taskContainer.parentNode.removeChild(taskContainer);
}

function fillForm(task) {
    document.querySelector("#task-title-input").value = task.title;

    if (task.dueDate != "") {
        document.querySelector("#date-input").value = task.dueDate;        
    }

    if (task.category != "") {
        document.querySelector("#category-input").value = task.category;
    }

    //RIPARTI DA QUI, INSERISCI PRIORITY VALUE

    if (task.description != "") {
        document.querySelector("textarea").value = task.description;
    }
}

function addCategory(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
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
    createDomEle(`#${taskTitle}`, 
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

        addNewListener(".task-li", "click", sortTasks)
    }
    
}

function checkboxChecked() {
    return event.target.checked
}

function toggleTask() {
    const taskId = event.target.parentNode.id;
    const taskDiv = document.querySelector(`#${taskId}`);
    if (checkboxChecked()) {
        taskDiv.classList.add("completed");
        
    } else {
        taskDiv.classList.remove("completed");
        
    }

   toggleCompleted(taskId)
}

function sortTasks() {
    const list = taskList.list;
    const categoryTasks = sortByCategory();
    const priorityTasks = sortByPriority();
    const completedTasks = sortByCompleted();
    
    
    const container = document.querySelector("#tasks-container");
    container.textContent = "";

    if (event.target.id === "all") {
        list.forEach((task) => {
            displayTask(task);
        })
    } else if (event.target.id === "high-prio") {        
        priorityTasks.forEach((task) => {
            displayTask(task);
        })
    } else if (event.target.id === "completed") {
        completedTasks.forEach((task) => {
            displayTask(task);
        })
    }  else {
        categoryTasks.forEach((task) => {
            displayTask(task);
        })
    }
    
    
}


function resetForm() {
    const form = document.querySelector("form");
    form.reset();
}





export { resetForm, createDomEle, displayTask, displayCategory, addNewListener }
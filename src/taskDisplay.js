import {createDomEle, addNewListener, editTask, clearTaskDom, clearCategoryDom, toggleTask } from "./dom"
import {taskList, deleteTask}  from "./tasks"
import {saveToLocal}   from "./localStorage"
import {formatString, formatDate, capitalize} from "./formatting"


function displayTask(task) {
    const taskTitle = formatString(task.title);
    
    createTaskcontainer(task, taskTitle);
    addCheckbox(task, taskTitle);
    addTitle(task, taskTitle);
    addDueDate(task, taskTitle);
    addEditBtn(task, taskTitle);
    addPriority(task,taskTitle);
    addDescription(task, taskTitle);
    addCategory(task, taskTitle); 
    addDeleteBtn(task, taskTitle);  
    
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

function addDeleteBtn(task, taskTitle) {
    createDomEle(`#${taskTitle}`,
    "div",
    {class : ["delete-btn"],
    id : `delete-btn-${taskTitle}` }
    )

    createDomEle(`#delete-btn-${taskTitle}`,
    "i",
    {class : ["task-icon", "fa", "fa-trash"],
    id : `delete-icon-${taskTitle}` }
    );

    addNewListener(`#delete-btn-${taskTitle}`, "click", function() {
        clearTaskDom(taskTitle);
        deleteTask(task);
        saveToLocal(taskList.list);
        clearCategoryDom(task);
    })

}

export {displayTask}
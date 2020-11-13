
import { taskList, sortByCategory, sortByPriority, toggleCompleted, sortByCompleted, deleteTask, deleteAllTasks, completeAllTasks, categoryItems} from './tasks';
import Travolta from "./travolta.gif"
import {saveToLocal} from "./localStorage"
import {formatString, capitalize } from "./formatting"
import { displayTask } from "./taskDisplay"

// helper functions
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


// delete btn function
function clearCategoryDom(task) {
    const numItems = categoryItems(task.category);
    const category = formatString(task.category);  
      
    
    if (task.category != "") {
        if (numItems < 1) {  
            const catLi = document.querySelector(`#${category}`);      
            catLi.parentNode.removeChild(catLi);
        }
    }
    
    
    
}

// edit button functions
function editTask(task, taskTitle) {   
    
    clearTaskDom(taskTitle);    
    fillForm(task);
    deleteTask(task);
    saveToLocal(taskList.list);
    clearCategoryDom(task);
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

    if (task.priority != "default") {
        document.querySelector("#priority-select").value = "High";
    }
    

    if (task.description != "") {
        document.querySelector("textarea").value = task.description;
    }
}

// delete all button function
function clearAllTasks() {
    document.querySelector("#tasks-container").textContent = "";

    const catLi = document.querySelectorAll(".cat-li"); 
   catLi.forEach(ele => {
       ele.parentNode.removeChild(ele);
   })
    
}

// complete all button function

function markAllTasks() {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    })

    const taskList = document.querySelectorAll(".task");
    taskList.forEach(taskDiv => {
        taskDiv.classList.add("completed");
    })    
}


// checkbox functions

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
   saveToLocal(taskList.list);
}

// sorting functions

function displayCategory(task) {
    if ( task.category != "" && !document.querySelector(`#${formatString(task.category)}`)) {
        createDomEle("#tasks-list",
        "li",
        { class : ["task-li", "cat-li"],
       id : formatString(task.category)},       
        capitalize(task.category)
        );

        addNewListener(".task-li", "click", function() {
            sortTasks(task) 
        })
    }
    
}

function sortTasks(task) {
    
    const list = taskList.list;
    const categoryTasks = sortByCategory();
    const priorityTasks = sortByPriority();
    const completedTasks = sortByCompleted();
    
    const container = document.querySelector("#tasks-container");
    container.textContent = "";

    if (event.target.id === "all") {
        if (list.length === 0) {           
            noResultsMsg()
        } else {
            list.forEach(task => {
            displayTask(task);
            })
        }  
    } else if (event.target.id === "high-prio") {        
        
            if (priorityTasks.length === 0) {
                noResultsMsg();
            } else {
                priorityTasks.forEach(task => {
                displayTask(task);
                })
            }           
            
        
    } else if (event.target.id === "completed") {
        if (completedTasks.length === 0) {           
            noResultsMsg()
        } else {
            completedTasks.forEach(task => {
            displayTask(task);
            })
        }  
    } else {
        categoryTasks.forEach(task => {
            displayTask(task)
        })
    }
    
    
}

function noResultsMsg() {

    createDomEle("#tasks-container",
    "div",
    {  id : "nothing-found"},
    )

    createDomEle("#nothing-found",
    "div",
    {  id : "sorry-msg"},
    "...sorry, no tasks found for this search...")
  
    createDomEle("#nothing-found",
    "div",
    {  id : "gif-container"})    

    createDomEle("#gif-container",
    "img",
    { src : Travolta, 
    id : "travolta-gif"})
}

function resetForm() {
    const form = document.querySelector("form");
    form.reset();
}





export { createDomEle, resetForm, editTask, displayCategory, addNewListener, toggleTask, sortTasks, deleteAllTasks, clearTaskDom, clearCategoryDom, clearAllTasks, completeAllTasks, markAllTasks}
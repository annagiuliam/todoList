import {createNewTask} from "./tasks";

function createDomEle(parent, type, attributes, text = null) {
    const parentContainer = document.querySelector(parent);
    const element = document.createElement(type);
    
    if (attributes != null) {
        for (let key in attributes) {
            let value = attributes[key];
            if (key != "class") {
                element.setAttribute(key, value);                
                } else {                     
                   for (let i = 0; i < value.length; i++) {
                        element.classList.add(value[i]);
                   
                    }       
            
            }
            
        };
    }

    if (text != null) {
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

//addNewListener("#new-task-btn", "click", alert("hello"));
addNewListener("#submit-task-btn", "click", () => {
    createNewTask();
    resetForm();
});

addNewListener("#reset-btn", "click", resetForm);

// const submitBtn = document.querySelector("#submit-task-btn");
// submitBtn.addEventListener("click", () => {
//     console.log(submitBtn);
// });
 function resetForm() {
     const form = document.querySelector("form");
     form.reset();
 }

 function displayTask(task) {
     createDomEle("#tasks-container",
     "li",
     {class : ["task", task.category],   
     id : displayTask.title,     
     });

     //createTask
 }

export { createDomEle, displayTask }
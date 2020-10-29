import {createNewTask} from "./tasks";

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
addNewListener("#reset-btn", "click", resetForm);

const form  = document.querySelector('form');
form.addEventListener('submit', function (event) {    
    if (titleInput.value != "") {        
              createNewTask();
              resetForm();
    }    
});

  


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
        {class : ["task", formatString(task.category)],   
        id : formatString(task.title),     
        });

        createDomEle(`#${formatString(task.title)}`,
        "div",
        { class : ["task-details"],
            id : `details-${formatString(task.title)}`
        });

        // createDomEle(`#${task.title}`, //riprendi da qui, aggiungi contenuto tasks a dom
        // "div",
        // { class : ["task-details"],
        //     id : `info-${task.title}`
        // });

        // createDomEle(`#details-${task.title}`,
        // "div",
        // {id : `titleDiv-${task.title}` },
        // task.title);

        // console.log(task.category);

        // if (task.category != "") {
        //     createDomEle(`#details-${task.title}`,
        //     "div",
        //     {id : `category-${task.title}` },
        //     task.category);
        // }
     

        //  displayTaskInfo(task);
}

function formatString(string) {
    if (string != "") {
        
        return string.split(' ').join('-');
    } else { return ""};
    
    //return string.trim();
    //.replace(/\s/g, '-')
}

export { createDomEle, displayTask }
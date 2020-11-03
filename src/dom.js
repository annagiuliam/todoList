


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

function displayTask(task) {
    const taskTitle = formatString(task.title);
    // ctreate main div for each task
    createTaskDiv(task, taskTitle);
    createHeadDiv(task, taskTitle);
    addHeadContent(task, taskTitle);
    
    createExtraDiv(task, taskTitle);
    addExtraContent(task, taskTitle);
    console.log(task);
}

function createTaskDiv(task, taskTitle) {
    createDomEle("#tasks-container",
    "div",
    {class : ["task", formatString(task.category)],   
    id : `task-${taskTitle}`,     
    });
}

function createHeadDiv(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`, 
    "div",
    { class : ["task-head"],
        id : `head-${taskTitle}`
    });
}

function addHeadContent(task, taskTitle) {
    // append title to head
    createDomEle(`#head-${taskTitle}`, 
    "div",
    { class : ["task-title"],
        id : `title-${taskTitle}`
    },
    capitalize(task.title)  //text content
    );
    
    //append due date
    createDomEle(`#head-${taskTitle}`,
    "span",
    {class : ["dueDate-span"],
    id : `dueDate-span-${taskTitle}` }
    );

    if (task.dueDate != "") {
        createDomEle(`#dueDate-span-${taskTitle}`,
        "span",
        {class : ["dueDate-icon-span"],
        id : `dueDate-icon-span-${taskTitle}` },
        );

        createDomEle(`#dueDate-icon-span-${taskTitle}`,
        "i",
        {class : ["fa", "fa-calendar"]},
        );
    }          
    createDomEle(`#dueDate-span-${taskTitle}`,
    "span",
    {id : `dueDate-text-${taskTitle}` },
    task.dueDate);

    //append priority
    createDomEle(`#head-${taskTitle}`,
    "span",
    {class : ["priority-span"],
    id : `priority-span-${taskTitle}` }
    );

    if (task.priority === "high") {
        createDomEle(`#priority-span-${taskTitle}`,
        "span",
        {class : ["priority-icon-span"],
        id : `priority-icon-span-${taskTitle}` },
        );

        createDomEle(`#priority-icon-span-${taskTitle}`,
        "i",
        {class : ["fa", "fa-exclamation-triangle"]},
        );
    }  

/// FIX ALIGNMENT RIGHT SIDE TASK DETAILS
    
        
}

function addExtraContent(task, taskTitle) {
    //append task category to extra
    if (task.category != "") {
        createDomEle(`#extra-${taskTitle}`, 
        "span",
        { class : ["category-span"],
            id : `category-span-${taskTitle}` },
            capitalize(task.category));
    } else {
        createDomEle(`#extra-${taskTitle}`, 
        "span",
        { class : ["category-span"],
            id : `category-span-${taskTitle}` },
            "");
    }
    //append task description to extra
    if (task.description != "") {
        
        createDomEle(`#extra-${taskTitle}`, 
        "span",
        { class : ["description-span"],
            id : `description-span-${taskTitle}` },
            task.description);
    }    
}

function createExtraDiv(task, taskTitle) {
    createDomEle(`#task-${taskTitle}`, 
    "div",
    { class : ["task-extra"],
        id : `extra-${taskTitle}`
    });
}

function formatString(string) {
    if (string != "") {
        
        return string.split(/\W+/).join('');
    } else { return ""};
  
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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





export { resetForm, createDomEle, displayTask }
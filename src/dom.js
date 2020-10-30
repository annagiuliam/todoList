


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

            createDomEle(`#details-${formatString(task.title)}`, 
            "div",
            { class : ["task-info"],
                id : `info-${formatString(task.title)}`
            });

                createDomEle(`#info-${formatString(task.title)}`, 
                "span",
                { class : ["task-title"],
                    id : `title-${formatString(task.title)}`
                },
                capitalize(task.title)  //text content
                );
                
                if (task.dueDate != "") {
                    createDomEle(`#info-${formatString(task.title)}`,
                    "span",
                    {class : ["dueDate-span"],
                    id : `dueDate-span-${formatString(task.title)}` }
                    );

                    createDomEle(`#dueDate-span-${formatString(task.title)}`,
                    "span",
                    {class : ["dueDate-icon-span"],
                    id : `dueDate-icon-span-${task.title}` },
                    );

                    createDomEle(`#dueDate-icon-span-${task.title}`,
                    "i",
                    {class : ["fa", "fa-calendar"]},
                    );

                    createDomEle(`#dueDate-span-${formatString(task.title)}`,
                    "span",
                    {id : `dueDate-text-${task.title}` },
                    task.dueDate);

                    // ADD CATEGORY AND PRIORITY FIELDS
                    // SPLIT METHOD IN SMALLER METHODS
                }
                

                console.log(task.dueDate);

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
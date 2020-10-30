
//import {newTask, verifyTask} from "./tasks";

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





export { resetForm, createDomEle }
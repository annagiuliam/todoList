
import { resetForm, addNewListener, displayTask, displayCategory, sortTasks, deleteAllTasks, clearAllTasks, completeAllTasks, markAllTasks } from "./dom";
import {newTask, taskIsValid, taskList} from "./tasks"



const FormValidation = (() => {
    
    const form = document.querySelector("form");
    const titleInput = document.querySelector("#task-title-input");
        form.onsubmit = function(){                  
            if (titleInput.value != "") {        
                manageTask();               
            } else {            
                titleInput.classList.add("invalid")
                alert("Enter task title");
            }
        }    
})();

function manageTask() {
    const task = newTask(); 
    const  list = taskList.list;               
    if (taskIsValid(list, task.title)) {
        alert("You already created this task");        
    } else {
        list.push(task);
        displayTask(task);
        displayCategory(task);
        
    }
     
    resetForm(); 
}

//event listeners
const categoryListener = (() => {
    addNewListener(".task-li", "click", sortTasks);
})();

const deleteAllListener = (() => {
    addNewListener("#del-all-btn", "click", function() {
        deleteAllTasks();
        clearAllTasks();
    })
})();


const completeAllListener = (() => {
    addNewListener("#comp-all-btn", "click", function() {
        completeAllTasks();
        markAllTasks();
    })
})();



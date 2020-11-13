
import { resetForm, addNewListener,  displayCategory, sortTasks, deleteAllTasks, clearAllTasks, completeAllTasks, markAllTasks } from "./dom";
import { displayTask } from "./taskDisplay"
import {newTask, taskIsValid, taskList} from "./tasks"
import {saveToLocal, getFromLocal} from "./localStorage"


const displayLocalTasks = (() => {
    const localList = getFromLocal();
    let list = taskList.list   
    if (localList) {
        if (localList.length > 0) {
            localList.forEach(localTask => {
                list.push(localTask);
            })

            list.forEach(task => {
                displayTask(task);
                displayCategory(task);
            });
        }
    }

    
})();



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
        saveToLocal(list);
       
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
        saveToLocal(taskList.list);
        clearAllTasks();
    })
})();


const completeAllListener = (() => {
    addNewListener("#comp-all-btn", "click", function() {
        completeAllTasks();
        saveToLocal(taskList.list);
        markAllTasks();
    })
})();



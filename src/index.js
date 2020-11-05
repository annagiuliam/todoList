
import { resetForm, createDomEle, displayTask, displayCategory } from "./dom";
import {newTask, taskIsValid, taskList, sortByCategory} from "./tasks"


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
        displayCategory(task)
        
    }
     
    resetForm(); 
}




//console.log(taskList.list);

//const container = document.querySelector("#project-container")


// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// console.log(dates.sort(compareAsc));
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]


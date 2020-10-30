import { compareAsc, format } from 'date-fns';
import { resetForm, createDomEle } from "./dom";
import {newTask, verifyTask} from "./tasks"


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
    const title = document.querySelector("#task-title-input").value.trim().toLowerCase();
    newTask();
    verifyTask();
    resetForm();
    const task = newTask();
    //console.log(task); //RICOMINCIA DA QUI, TITLE IS EMPTY, BUT WORKS LOGGING IT FROM TASKS
    //console.log(title);
    //displayTask(newTask());
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


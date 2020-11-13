import {taskList} from "./tasks"


function saveToLocal(list) {
    localStorage.setItem('localList', JSON.stringify(list));
}

function getFromLocal() {
    let localList = JSON.parse(localStorage.getItem('localList'));
   return localList;

}

export {saveToLocal, getFromLocal}
import {taskList} from "./tasks"


function saveToLocal(list) {
    //const list = taskList.list;
    localStorage.setItem('localList', JSON.stringify(list));
}

function getFromLocal() {
    let localList = JSON.parse(localStorage.getItem('localList'));
   return localList;

}

export {saveToLocal, getFromLocal}
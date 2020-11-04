/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! namespace exports */
/*! export createDomEle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetForm\": () => /* binding */ resetForm,\n/* harmony export */   \"createDomEle\": () => /* binding */ createDomEle,\n/* harmony export */   \"displayTask\": () => /* binding */ displayTask\n/* harmony export */ });\n\n\n\nfunction createDomEle(parent, type, attributes, text) {\n    const parentContainer = document.querySelector(parent);\n    const element = document.createElement(type);\n    \n    if (attributes != null) {\n        for (let key in attributes) {\n            let value = attributes[key];\n            if (key != \"class\") {\n                element.setAttribute(key, value);                \n                } else {                     \n                   for (let i = 0; i < value.length; i++) {\n                        if (value[i] != \"\") {                            \n                        element.classList.add(value[i]); \n                        }\n                                      \n                    }           \n            }            \n        };\n    }\n\n    if (text != \"\") {\n        element.textContent = text;\n    } else {\n        element.textContent = \"\";\n    }\n    \n    parentContainer.appendChild(element); \n}\n\n//// functin in use???\nfunction addNewListener(target, event, action) {\n    \n    const newTargets = document.querySelectorAll(target);\n    newTargets.forEach(target => \n        target.addEventListener(event, action));\n    \n}\n\nfunction displayTask(task) {\n    const taskTitle = formatString(task.title);\n    \n    createTaskcontainer(taskTitle);\n    addCheckbox(taskTitle);\n    addTitle(task, taskTitle);\n    addDueDate(task, taskTitle);\n    addPriority(task,taskTitle);\n    addDescription(task, taskTitle);\n    addCategory(task, taskTitle);\n    \n    \n    \n}\n\nfunction createTaskcontainer(taskTitle) {\n    createDomEle(\"#tasks-container\",\n    \"div\",\n    {class : [\"task\", taskTitle],   \n    id : `task-${taskTitle}`,     \n    });\n}\n\nfunction addCheckbox(taskTitle) {\n    createDomEle(`#task-${taskTitle}`,\n    \"input\",\n    {type : \"checkbox\",\n    class : [\"task-detail\", \"task-checkbox\"],   \n    id : `checkbox-${taskTitle}`,     \n    });\n}\n\nfunction addTitle(task, taskTitle) {\n    createDomEle(`#task-${taskTitle}`,\n    \"div\",\n    {class : [\"task-detail\", \"task-title\"],   \n    id : `title-${taskTitle}`},\n    capitalize(task.title));\n}\n\nfunction addDueDate(task, taskTitle) {\n    createDomEle(`#task-${taskTitle}`,\n        \"div\",\n        {class : [\"task-detail\", \"task-dueDate\"],   \n        id : `dueDate-div-${taskTitle}`},\n    );\n\n    createDomEle(`#dueDate-div-${taskTitle}`,\n        \"span\",\n        {class : [\"dueDate-icon-span\"],\n        id : `dueDate-icon-span-${taskTitle}` },\n    );\n\n    if (task.dueDate != \"\") { \n        createDomEle(`#dueDate-icon-span-${taskTitle}`,\n            \"i\",\n            {class : [\"fa\", \"fa-calendar\"]},\n        );\n    }    \n\n    createDomEle(`#dueDate-div-${taskTitle}`,\n        \"span\",\n        {id : `dueDate-text-${taskTitle}` },\n        task.dueDate\n    );\n}\n\nfunction addPriority(task, taskTitle) {\n    createDomEle(`#task-${taskTitle}`,\n    \"div\",\n    {class : [\"task-detail\", \"task-priority\"],\n    id : `priority-${taskTitle}` }\n    );\n\n    if (task.priority === \"high\") {\n        createDomEle(`#priority-${taskTitle}`,\n        \"span\",\n        {class : [\"priority-icon-span\"],\n        id : `priority-icon-span-${taskTitle}` },\n        );\n\n        createDomEle(`#priority-icon-span-${taskTitle}`,\n        \"i\",\n        {class : [\"fa\", \"fa-exclamation-triangle\"]},\n        );\n    }  \n}\n\nfunction addCategory(task, taskTitle) {\n    createDomEle(`#task-${taskTitle}`,\n    \"div\",\n    {class : [\"task-detail\", \"task-category\"],   \n    id : `category-div-${taskTitle}`},\n    );\n\n    createDomEle(`#category-div-${taskTitle}`,\n    \"span\",\n    {class : [\"category-icon-span\"],\n    id : `category-icon-span-${taskTitle}` },\n    );\n\n    if (task.category != \"\") {   \n        createDomEle(`#category-icon-span-${taskTitle}`,\n        \"i\",\n        {class : [\"fa\", \"fa-tag\"]},\n        );\n    }  \n\n    createDomEle(`#category-div-${taskTitle}`,\n    \"span\",\n    {id : `category-text-${taskTitle}` },\n    capitalize(task.category)\n    );\n}\n\nfunction addDescription(task, taskTitle) {\n    createDomEle(`#task-${taskTitle}`, \n    \"div\",\n    { class : [\"task-detail\", \"task-description\"],\n    id : `description-${taskTitle}` },\n    task.description);  \n}\n\n\nfunction formatString(string) {\n    if (string != \"\") {\n        \n        return string.split(/\\W+/).join('');\n    } else { return \"\"};\n  \n}\n\nfunction capitalize(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n  }\n\n// const FormValidation = (() => {\n    \n//     const form = document.querySelector(\"form\");\n//     const titleInput = document.querySelector(\"#task-title-input\");\n//         form.onsubmit = function(){        \n//             if (titleInput.value != \"\") {        \n//                 newTask();\n                \n//                 verifyTask();\n//                 resetForm();\n//             } else {            \n//                 titleInput.classList.add(\"invalid\")\n//                 alert(\"Enter task title\");\n//             }\n//         }    \n// })();\n\nfunction resetForm() {\n    const form = document.querySelector(\"form\");\n    form.reset();\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n//import { compareAsc, format } from 'date-fns';\n\n\n\n\nconst FormValidation = (() => {\n    \n    const form = document.querySelector(\"form\");\n    const titleInput = document.querySelector(\"#task-title-input\");\n        form.onsubmit = function(){                  \n            if (titleInput.value != \"\") {        \n                manageTask();               \n            } else {            \n                titleInput.classList.add(\"invalid\")\n                alert(\"Enter task title\");\n            }\n        }    \n})();\n\nfunction manageTask() {\n    const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.newTask)(); \n    const  list = _tasks__WEBPACK_IMPORTED_MODULE_0__.taskList.list;               \n    if ((0,_tasks__WEBPACK_IMPORTED_MODULE_0__.taskIsValid)(list, task.title)) {\n        alert(\"You already created this task\");        \n    } else {\n        list.push(task);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayTask)(task);\n    }\n    \n    \n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.resetForm)(); \n}\n\n\n//console.log(taskList.list);\n\n//const container = document.querySelector(\"#project-container\")\n\n\n// format(new Date(2014, 1, 11), 'yyyy-MM-dd')\n// //=> '2014-02-11'\n\n// const dates = [\n//   new Date(1995, 6, 2),\n//   new Date(1987, 1, 11),\n//   new Date(1989, 6, 10),\n// ]\n// console.log(dates.sort(compareAsc));\n//=> [\n//   Wed Feb 11 1987 00:00:00,\n//   Mon Jul 10 1989 00:00:00,\n//   Sun Jul 02 1995 00:00:00\n// ]\n\n\n\n//# sourceURL=webpack://todoList/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! namespace exports */
/*! export newTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export taskIsValid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export taskList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => /* binding */ newTask,\n/* harmony export */   \"taskIsValid\": () => /* binding */ taskIsValid,\n/* harmony export */   \"taskList\": () => /* binding */ taskList\n/* harmony export */ });\nconst taskFactory = (title, category, dueDate, priority, description) => {\n\n    return { title, category, dueDate, priority, description }\n}\n\nconst taskList = (() => {\n    const list = [];\n\n    return {list}\n})();\n\nconst newTask = () => {\n    const title = document.querySelector(\"#task-title-input\").value.trim().toLowerCase();\n    const dueDate = document.querySelector(\"#date-input\").value.trim().toLowerCase();\n    const category = document.querySelector(\"#category-input\").value.trim().toLowerCase();\n    const priority = document.querySelector(\"#priority-select\").value.trim().toLowerCase();\n    const description = document.querySelector(\"textarea\").value.trim().toLowerCase();\n\n    const task = taskFactory(title, category, dueDate, priority, description);\n    return task;\n    \n}\n\n\nfunction taskIsValid(list, title) {  \n    if (list.length === 0) {     \n        return false;\n   } else {\n       return list.some(task => task[\"title\"] === title);\n    }\n    \n}\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
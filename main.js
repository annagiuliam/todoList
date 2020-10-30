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
/*! export resetForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetForm\": () => /* binding */ resetForm,\n/* harmony export */   \"createDomEle\": () => /* binding */ createDomEle\n/* harmony export */ });\n\n//import {newTask, verifyTask} from \"./tasks\";\n\nfunction createDomEle(parent, type, attributes, text) {\n    const parentContainer = document.querySelector(parent);\n    const element = document.createElement(type);\n    \n    if (attributes != null) {\n        for (let key in attributes) {\n            let value = attributes[key];\n            if (key != \"class\") {\n                element.setAttribute(key, value);                \n                } else {                     \n                   for (let i = 0; i < value.length; i++) {\n                        if (value[i] != \"\") {                            \n                        element.classList.add(value[i]); \n                        }\n                                      \n                    }           \n            }            \n        };\n    }\n\n    if (text != \"\") {\n        element.textContent = text;\n    } else {\n        element.textContent = \"\";\n    }\n    \n    parentContainer.appendChild(element); \n}\n\nfunction addNewListener(target, event, action) {\n    \n    const newTargets = document.querySelectorAll(target);\n    newTargets.forEach(target => \n        target.addEventListener(event, action));\n    \n}\naddNewListener(\"#reset-btn\", \"click\", resetForm);\n\n// const FormValidation = (() => {\n    \n//     const form = document.querySelector(\"form\");\n//     const titleInput = document.querySelector(\"#task-title-input\");\n//         form.onsubmit = function(){        \n//             if (titleInput.value != \"\") {        \n//                 newTask();\n                \n//                 verifyTask();\n//                 resetForm();\n//             } else {            \n//                 titleInput.classList.add(\"invalid\")\n//                 alert(\"Enter task title\");\n//             }\n//         }    \n// })();\n\nfunction resetForm() {\n    const form = document.querySelector(\"form\");\n    form.reset();\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\n\nconst FormValidation = (() => {\n    \n    const form = document.querySelector(\"form\");\n    const titleInput = document.querySelector(\"#task-title-input\");\n        form.onsubmit = function(){                  \n            if (titleInput.value != \"\") {        \n                manageTask();                \n            } else {            \n                titleInput.classList.add(\"invalid\")\n                alert(\"Enter task title\");\n            }\n        }    \n})();\n\nfunction manageTask() {\n    const title = document.querySelector(\"#task-title-input\").value.trim().toLowerCase();\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.newTask)();\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.verifyTask)();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.resetForm)();\n    const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.newTask)();\n    //console.log(task); //RICOMINCIA DA QUI, TITLE IS EMPTY, BUT WORKS LOGGING IT FROM TASKS\n    //console.log(title);\n    //displayTask(newTask());\n}\n\nfunction displayTask(task) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDomEle)(\"#tasks-container\",\n    \"li\",\n    {class : [\"task\", formatString(task.category)],   \n    id : formatString(task.title),     \n    });\n\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDomEle)(`#${formatString(task.title)}`,\n    \"div\",\n    { class : [\"task-details\"],\n        id : `details-${formatString(task.title)}`\n    });\n\n    // createDomEle(`#${task.title}`, //riprendi da qui, aggiungi contenuto tasks a dom\n    // \"div\",\n    // { class : [\"task-details\"],\n    //     id : `info-${task.title}`\n    // });\n\n    // createDomEle(`#details-${task.title}`,\n    // \"div\",\n    // {id : `titleDiv-${task.title}` },\n    // task.title);\n\n    // console.log(task.category);\n\n    // if (task.category != \"\") {\n    //     createDomEle(`#details-${task.title}`,\n    //     \"div\",\n    //     {id : `category-${task.title}` },\n    //     task.category);\n    // }\n \n\n    //  displayTaskInfo(task);\n}\n\nfunction formatString(string) {\n    if (string != \"\") {\n        \n        return string.split(' ').join('-');\n    } else { return \"\"};\n  \n}\n//console.log(taskList.list);\n\n//const container = document.querySelector(\"#project-container\")\n\n\n// format(new Date(2014, 1, 11), 'yyyy-MM-dd')\n// //=> '2014-02-11'\n\n// const dates = [\n//   new Date(1995, 6, 2),\n//   new Date(1987, 1, 11),\n//   new Date(1989, 6, 10),\n// ]\n// console.log(dates.sort(compareAsc));\n//=> [\n//   Wed Feb 11 1987 00:00:00,\n//   Mon Jul 10 1989 00:00:00,\n//   Sun Jul 02 1995 00:00:00\n// ]\n\n\n\n//# sourceURL=webpack://todoList/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! namespace exports */
/*! export newTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export verifyTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => /* binding */ newTask,\n/* harmony export */   \"verifyTask\": () => /* binding */ verifyTask\n/* harmony export */ });\n//import {  displayTask} from \"./dom\";\n\nconst taskFactory = (title, category, dueDate, priority, description) => {\n\n    return { title, category, dueDate, priority, description }\n}\n\nconst taskList = (() => {\n    const list = [];\n\n    return {list}\n})();\n\nconst newTask = () => {\n    const title = document.querySelector(\"#task-title-input\").value.trim().toLowerCase();\n    const dueDate = document.querySelector(\"#date-input\").value.trim().toLowerCase();\n    const category = document.querySelector(\"#category-input\").value.trim().toLowerCase();\n    const priority = document.querySelector(\"#priority-select\").value.trim().toLowerCase();\n    const description = document.querySelector(\"textarea\").value.trim().toLowerCase();\n\n    const task = taskFactory(title, category, dueDate, priority, description);\n    return task;\n    \n}\n\nfunction verifyTask() {\n    const list = taskList.list;\n    const task = newTask();\n    if (listIncludesTask(list, task.title)) {\n        alert(\"You already created this task\");\n    } else {\n        list.push(task);\n        //displayTask(task);\n        //console.log(task);\n    }\n}\n\nfunction listIncludesTask(list, title) {  \n    if (list.length === 0) {     \n        return false;\n   } else {\n       return list.some(task => task[\"title\"] === title);\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://todoList/./src/tasks.js?");

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
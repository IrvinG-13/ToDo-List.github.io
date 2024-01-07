/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  var content = document.getElementById('content');
  var header = document.createElement('header');
  header.setAttribute('id', 'header');
  content.appendChild(header);

  //button list
  var btnList = document.createElement('button');
  btnList.setAttribute('id', 'btnList');
  btnList.innerHTML = '<i class="bi bi-list"></i>';
  header.appendChild(btnList);

  //title
  var title = document.createElement('h1');
  title.textContent = 'To-do List';
  header.appendChild(title);

  //Dark button
  var btnMode = document.createElement('button');
  btnMode.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  btnMode.setAttribute('id', 'btnMode');
  header.appendChild(btnMode);
  var active = false;
  btnMode.addEventListener('click', function () {
    if (active == true) {
      btnMode.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else if (active == false) {
      btnMode.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
    active = !active;
  });
  var expand = false;
  btnList.addEventListener('click', function () {
    var navigation = document.getElementById('nav');
    if (expand == true) {
      navigation.setAttribute('style', 'display: none;');
    } else if (expand == false) {
      navigation.setAttribute('style', 'display: block;');
    }
    expand = !expand;
  });
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nav)
/* harmony export */ });
/* harmony import */ var _proyectPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proyectPage */ "./src/proyectPage.js");
/* harmony import */ var _taskPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskPage */ "./src/taskPage.js");


function nav() {
  var content = document.getElementById('content');
  var second = document.createElement('div');
  second.setAttribute('id', 'second');
  content.appendChild(second);

  //nav
  var navigation = document.createElement('nav');
  navigation.setAttribute('id', 'nav');
  second.appendChild(navigation);

  //proyects tab
  var proyects = document.createElement('p');
  proyects.setAttribute('id', 'proyectsFolder');
  proyects.innerHTML = '<i class="bi bi-briefcase"></i> Projects';
  navigation.appendChild(proyects);

  //proyects tab
  var tasks = document.createElement('p');
  tasks.setAttribute('id', 'tasksFolder');
  tasks.innerHTML = '<i class="bi bi-file-earmark"></i> Tasks';
  navigation.appendChild(tasks);
  tasks.addEventListener('click', function () {
    clear();
    (0,_taskPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  proyects.addEventListener('click', function () {
    clear();
    (0,_proyectPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}
function clear() {
  var second = document.getElementById('second');
  var pageContent = document.getElementById('pageCont');
  if (pageContent) {
    second.removeChild(pageContent);
  }
}

/***/ }),

/***/ "./src/pageContent.js":
/*!****************************!*\
  !*** ./src/pageContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageContent)
/* harmony export */ });
function pageContent() {
  var second = document.getElementById('second');

  //page Cont
  var pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'pageCont');
  second.appendChild(pageContent);
}

/***/ }),

/***/ "./src/proyectPage.js":
/*!****************************!*\
  !*** ./src/proyectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ proyectPage)
/* harmony export */ });
function proyectPage() {
  var second = document.getElementById('second');
  var pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'pageCont');
  second.appendChild(pageContent);

  //H2
  var h2Proyect = document.createElement('h2');
  h2Proyect.textContent = 'Projects';
  pageContent.appendChild(h2Proyect);

  //add Proyect
  var addProyect = document.createElement('input');
  addProyect.setAttribute('id', 'addProyect');
  addProyect.placeholder = 'Add Proyect';
  pageContent.appendChild(addProyect);

  //add Proyect
  var btnCreate = document.createElement('button');
  btnCreate.classList.add('btnCreate');
  btnCreate.textContent = 'Add Proyect';
  pageContent.appendChild(btnCreate);

  //container proyects
  var containerProyects = document.createElement('div');
  containerProyects.setAttribute('id', 'contProyects');
  pageContent.appendChild(containerProyects);
  function addProyectPage() {
    var nameProyect = document.getElementById('addProyect').value;
    var proyectFolder = document.createElement('div');
    var pageContent = document.getElementById('pageCont');
    proyectFolder.classList.add('proyectFolder');

    //text Container
    var textContainer = document.createElement('div');
    textContainer.innerHTML = nameProyect;
    textContainer.classList.add('textContainer');
    proyectFolder.appendChild(textContainer);

    //btnContent
    var btnTaskContent = document.createElement('div');
    btnTaskContent.setAttribute('id', 'btnTaskContent');
    proyectFolder.appendChild(btnTaskContent);

    //btn finished
    var status = document.createElement('button');
    status.innerHTML = '<i class="bi bi-check-lg"></i>';
    status.classList.add('status');
    btnTaskContent.appendChild(status);
    var finished = false;
    status.addEventListener('click', function () {
      if (finished == true) {
        status.innerHTML = '<i class="bi bi-x-lg"></i>';
        proyectFolder.setAttribute('id', 'finished');
      }
      if (finished == false) {
        status.innerHTML = '<i class="bi bi-check-lg"></i>';
        proyectFolder.setAttribute('id', '');
      }
      finished = !finished;
    });

    //btn Edit
    var btnEdit = document.createElement('button');
    btnEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>';
    btnEdit.classList.add('btnEdit');
    btnTaskContent.appendChild(btnEdit);
    btnEdit.addEventListener('click', function () {
      textContainer.contentEditable = true;
      textContainer.focus();
    });

    //btn Trash
    var trash = document.createElement('button');
    trash.innerHTML = '<i class="bi bi-trash-fill"></i>';
    trash.classList.add('trash');
    btnTaskContent.appendChild(trash);
    trash.addEventListener('click', function () {
      proyectFolder.remove();
    });
    proyectFolder.addEventListener('click', function () {
      clear();
      newSection();
    });
    function newSection() {
      document.getElementById('addProyect');
      var second = document.getElementById('second');
      var newSect = document.createElement('div');
      newSect.setAttribute('id', 'newSect');
      second.appendChild(newSect);

      //header part of NS
      var headerSec = document.createElement('div');
      headerSec.classList.add('headerSec');
      newSect.appendChild(headerSec);

      //back button
      var backBtn = document.createElement('button');
      backBtn.classList.add('backBtn');
      backBtn.innerHTML = '<i class="bi bi-arrow-left"></i>';
      headerSec.appendChild(backBtn);

      //title
      var titleOfNewSec = document.createElement('h2');
      titleOfNewSec.textContent = nameProyect;
      titleOfNewSec.setAttribute('id', 'ToN');
      headerSec.appendChild(titleOfNewSec);
      backBtn.addEventListener('click', function () {
        clear();
        newSect.remove();
        proyectPage();
      });

      //h2
      var h2Proyect = document.createElement('h2');
      h2Proyect.textContent = 'Tasks';
      newSect.appendChild(h2Proyect);

      //add task
      var addTask = document.createElement('input');
      addTask.setAttribute('id', 'addTask');
      addTask.placeholder = 'Add Task';
      newSect.appendChild(addTask);

      //btnCreate
      var btnCreate = document.createElement('button');
      btnCreate.classList.add('btnCreate');
      btnCreate.textContent = 'Add Task';
      newSect.appendChild(btnCreate);
      function addingTask() {
        var addTask = document.getElementById('addTask').value;
        var newSect = document.getElementById('newSect');
        var task = document.createElement('div');
        task.classList.add('task');

        //text Container
        var textContainer = document.createElement('div');
        textContainer.innerHTML = addTask;
        textContainer.classList.add('textContainer');
        task.appendChild(textContainer);

        //btnContent
        var btnTaskContent = document.createElement('div');
        btnTaskContent.setAttribute('id', 'btnTaskContent');
        task.appendChild(btnTaskContent);

        //btn finished
        var status = document.createElement('button');
        status.innerHTML = '<i class="bi bi-check-lg"></i>';
        status.classList.add('status');
        btnTaskContent.appendChild(status);
        var finished = false;
        status.addEventListener('click', function () {
          if (finished == true) {
            status.innerHTML = '<i class="bi bi-x-lg"></i>';
            task.setAttribute('id', 'finished');
          }
          if (finished == false) {
            status.innerHTML = '<i class="bi bi-check-lg"></i>';
            task.setAttribute('id', '');
          }
          finished = !finished;
        });

        //btn Edit
        var btnEdit = document.createElement('button');
        btnEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>';
        btnEdit.classList.add('btnEdit');
        btnTaskContent.appendChild(btnEdit);
        btnEdit.addEventListener('click', function () {
          textContainer.contentEditable = true;
          textContainer.focus();
        });

        //btn Trash
        var trash = document.createElement('button');
        trash.innerHTML = '<i class="bi bi-trash-fill"></i>';
        trash.classList.add('trash');
        btnTaskContent.appendChild(trash);
        trash.addEventListener('click', function () {
          task.remove();
        });
        document.getElementById('addTask').value = '';
        newSect.appendChild(task);
      }
      btnCreate.addEventListener('click', addingTask);
    }
    document.getElementById('addProyect').value = '';
    pageContent.appendChild(proyectFolder);
  }
  function clear() {
    var second = document.getElementById('second');
    var pageContent = document.getElementById('pageCont');
    if (pageContent) {
      second.removeChild(pageContent);
    }
  }
  btnCreate.addEventListener('click', addProyectPage);
}

/***/ }),

/***/ "./src/taskPage.js":
/*!*************************!*\
  !*** ./src/taskPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskPage)
/* harmony export */ });
function taskPage() {
  var second = document.getElementById('second');
  var pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'pageCont');
  second.appendChild(pageContent);

  //h2
  var h2Proyect = document.createElement('h2');
  h2Proyect.textContent = 'Tasks';
  pageContent.appendChild(h2Proyect);

  //add task
  var addTask = document.createElement('input');
  addTask.setAttribute('id', 'addTask');
  addTask.placeholder = 'Add Task';
  pageContent.appendChild(addTask);

  //create btn
  var btnCreate = document.createElement('button');
  btnCreate.classList.add('btnCreate');
  btnCreate.textContent = 'Add Task';
  pageContent.appendChild(btnCreate);
  function validationInput() {
    var addTask = document.getElementById('addTask').value;
    if (addTask === '') {
      alert('complete');
      return;
    }
    addingTask();
    document.getElementById('addTask').value = '';
  }

  //creat the tasks
  function addingTask() {
    var addTask = document.getElementById('addTask').value;
    var pageContent = document.getElementById('pageCont');
    var task = document.createElement('div');
    task.classList.add('task');

    //text Container
    var textContainer = document.createElement('div');
    textContainer.innerHTML = addTask;
    textContainer.classList.add('textContainer');
    task.appendChild(textContainer);

    //btnContent
    var btnTaskContent = document.createElement('div');
    btnTaskContent.setAttribute('id', 'btnTaskContent');
    task.appendChild(btnTaskContent);

    //btn finished
    var status = document.createElement('button');
    status.innerHTML = '<i class="bi bi-check-lg"></i>';
    status.classList.add('status');
    btnTaskContent.appendChild(status);
    var finished = false;
    status.addEventListener('click', function () {
      if (finished == true) {
        status.innerHTML = '<i class="bi bi-x-lg"></i>';
        task.setAttribute('id', 'finished');
      }
      if (finished == false) {
        status.innerHTML = '<i class="bi bi-check-lg"></i>';
        task.setAttribute('id', '');
      }
      finished = !finished;
    });

    //btn Edit
    var btnEdit = document.createElement('button');
    btnEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>';
    btnEdit.classList.add('btnEdit');
    btnTaskContent.appendChild(btnEdit);
    btnEdit.addEventListener('click', function () {
      textContainer.contentEditable = true;
      textContainer.focus();
    });

    //btn Trash
    var trash = document.createElement('button');
    trash.innerHTML = '<i class="bi bi-trash-fill"></i>';
    trash.classList.add('trash');
    btnTaskContent.appendChild(trash);
    trash.addEventListener('click', function () {
      task.remove();
    });
    pageContent.appendChild(task);
  }
  btnCreate.addEventListener('click', validationInput);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

#content{
    height: 100vh;
    display: flex;
    flex-direction: column;
}

#header{
    background-color: rgb(30, 30, 30);
    color: #eec328;
    display: flex;
    padding: 10px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
}

#btnList, #btnMode{
    width: 80px;
    height: 60px;
    font-size: 40px;
    border-radius: 10px;
    border: none;
    margin: 10px;
}

#btnList:hover{
    background: transparent;
    border: 4px solid rgb(230, 230, 230);
    color: #fff;
    transition: 0.5s;
    transform: scale(1.1);
}

#second{  
    display: flex;
    width: 100%;
    flex: 1;
    
}

#nav{
    flex: 1.5;
    background-color: #c3c2c2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#proyectsFolder, #tasksFolder{
    margin: 10px;
    padding: 10px;
    width: 80%;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
}

#proyectsFolder:hover{
    color: #fff;
    transition: 0.3s;
    background-color: rgb(45, 45, 45);
}

#tasksFolder:hover{
    color: #fff;
    transition: 0.3s;
    background-color: rgb(45, 45, 45);
}

#pageCont{
    flex: 4;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;

}

h2{
    margin: 20px;
    font-size: 32px;
}

#addTask{
    width: 60%;
    height: 30px;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
}

.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 10px;
    border: 2px solid grey;
    width: 50%;
    margin-top: 20px;
    font-size: 20px;
}

#finished{
    background-color: rgb(40, 40, 40);
    color: #fff;
    text-decoration:line-through;
    transition: 0.3s;
    border: rgb(40, 40, 40);
}

.textContainer{
    padding: 10px;
}

#btnTaskContent{
    display: flex;
    gap: 10px;
}

.status, .btnEdit, .trash{
    font-size: 20px;
    padding: 5px;
}

#addProyect{
    width: 60%;
    height: 30px;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
}

.proyectFolder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 10px;
    border: 2px solid grey;
    width: 27%;
    margin-top: 20px;
    font-size: 20px;
}

.proyectFolder:hover{
    background-color: gray;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
}

#newSect{
    flex: 4;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}

.backBtn{
    width: 10%;
    font-size: 20px;
    border-radius: 50px;
    border: none;
    margin: 10px;
    padding: 10px;
}

.backBtn:hover{
    transform: scale(1.1);
    transition: 0.3s;
    color: #fff;
    background-color: rgb(40, 40, 40);
}

.headerSec{
    display: flex;
    align-items: center;
    margin: 10px;
}

#ToN{
    margin-left: 30%;
}

.btnCreate{
    width: 30%;
    height: 30px;
    margin: 10px;
    margin-bottom: 40px;
    padding: 25px;
    font-size: 20px;
    border: none;
    justify-content: center;
    align-items: center;
    display: flex;
}

.btnCreate:hover{
    color: #fff;
    transition: 0.5s;
    background-color: rgb(45, 45, 45);
}


`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,aAAa;IACb,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,oCAAoC;IACpC,WAAW;IACX,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,OAAO;;AAEX;;AAEA;IACI,SAAS;IACT,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,OAAO;IACP,oCAAoC;IACpC,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,WAAW;IACX,4BAA4B;IAC5B,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,oCAAoC;IACpC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iCAAiC;AACrC","sourcesContent":["body{\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#header{\r\n    background-color: rgb(30, 30, 30);\r\n    color: #eec328;\r\n    display: flex;\r\n    padding: 10px;\r\n    height: 100px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#btnList, #btnMode{\r\n    width: 80px;\r\n    height: 60px;\r\n    font-size: 40px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    margin: 10px;\r\n}\r\n\r\n#btnList:hover{\r\n    background: transparent;\r\n    border: 4px solid rgb(230, 230, 230);\r\n    color: #fff;\r\n    transition: 0.5s;\r\n    transform: scale(1.1);\r\n}\r\n\r\n#second{  \r\n    display: flex;\r\n    width: 100%;\r\n    flex: 1;\r\n    \r\n}\r\n\r\n#nav{\r\n    flex: 1.5;\r\n    background-color: #c3c2c2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#proyectsFolder, #tasksFolder{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    width: 80%;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#proyectsFolder:hover{\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    background-color: rgb(45, 45, 45);\r\n}\r\n\r\n#tasksFolder:hover{\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    background-color: rgb(45, 45, 45);\r\n}\r\n\r\n#pageCont{\r\n    flex: 4;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\nh2{\r\n    margin: 20px;\r\n    font-size: 32px;\r\n}\r\n\r\n#addTask{\r\n    width: 60%;\r\n    height: 30px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.task{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border: 2px solid grey;\r\n    width: 50%;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n#finished{\r\n    background-color: rgb(40, 40, 40);\r\n    color: #fff;\r\n    text-decoration:line-through;\r\n    transition: 0.3s;\r\n    border: rgb(40, 40, 40);\r\n}\r\n\r\n.textContainer{\r\n    padding: 10px;\r\n}\r\n\r\n#btnTaskContent{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.status, .btnEdit, .trash{\r\n    font-size: 20px;\r\n    padding: 5px;\r\n}\r\n\r\n#addProyect{\r\n    width: 60%;\r\n    height: 30px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.proyectFolder{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border: 2px solid grey;\r\n    width: 27%;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n.proyectFolder:hover{\r\n    background-color: gray;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n#newSect{\r\n    flex: 4;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.backBtn{\r\n    width: 10%;\r\n    font-size: 20px;\r\n    border-radius: 50px;\r\n    border: none;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.backBtn:hover{\r\n    transform: scale(1.1);\r\n    transition: 0.3s;\r\n    color: #fff;\r\n    background-color: rgb(40, 40, 40);\r\n}\r\n\r\n.headerSec{\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 10px;\r\n}\r\n\r\n#ToN{\r\n    margin-left: 30%;\r\n}\r\n\r\n.btnCreate{\r\n    width: 30%;\r\n    height: 30px;\r\n    margin: 10px;\r\n    margin-bottom: 40px;\r\n    padding: 25px;\r\n    font-size: 20px;\r\n    border: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.btnCreate:hover{\r\n    color: #fff;\r\n    transition: 0.5s;\r\n    background-color: rgb(45, 45, 45);\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _pageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageContent */ "./src/pageContent.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




function start() {
  (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_pageContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
start();
})();

/******/ })()
;
//# sourceMappingURL=bundlee39328ca64b1b9fb50cd.js.map
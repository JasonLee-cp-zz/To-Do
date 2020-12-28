//const todoInput = document.querySelector(".todo-input"); already declared in greeting.js
const todoText = document.querySelector(".todo-text");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

let toDoArray = [];
const TODO_LS = "todoList";

function deleteTextField(){
    todoText.value="";
}


function deleteToDo(evt){
    const deleteId = evt.target.parentElement.id;
    const newToDoArray = toDoArray.filter(todo => todo.id != deleteId);
    toDoArray = newToDoArray;
    todoList.removeChild(evt.target.parentElement);
    saveToDos();
}

function saveToDos(){
    if(toDoArray.length==0){
        localStorage.removeItem(TODO_LS);
        return;
    }
    localStorage.setItem(TODO_LS,JSON.stringify(toDoArray));
}

function handleButton(btn){
    btn.addEventListener("click", deleteToDo);
    btn.innerHTML = "X";
    btn.classList.add("todo-button");
    btn.classList.add("specific-button");
    btn.style.fontSize = "8px";
    btn.style.marginLeft = "5px";
}

function addToDo(toDo){
    const newId = toDoArray.length+1; //0일땐 1
    const toDo_li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    handleButton(btn);
    span.innerHTML = toDo;
    toDo_li.id = newId;
    toDo_li.appendChild(span);
    toDo_li.appendChild(btn);
    todoList.append(toDo_li);

    const todoObj = {
        data: toDo,
        id: newId
    }

    toDoArray.push(todoObj);
    saveToDos();
}

function handleToDoSubmit(evt){
   evt.preventDefault();
   const toDo = todoText.value;
   if(toDo==""){
       alert("Enter somethig!!!!!!!!!!!");
       return;
   }
   deleteTextField();
   addToDo(toDo);
}

todoBtn.addEventListener("click",handleToDoSubmit);

function loadToDo(todoStorage){
    let todoStorage_len = todoStorage.length;
    for(var i=0; i<todoStorage_len; i++){
        addToDo(todoStorage[i].data);
    }
}

function init(){
    let todoStorage = localStorage.getItem(TODO_LS);
    if(todoStorage==null) return;

    todoStorage=JSON.parse(todoStorage);
    loadToDo(todoStorage);
}

init();
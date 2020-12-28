const form = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const greeting = document.querySelector(".greeting");
const todoInput = document.querySelector(".todo-input");

const USER_NAME = "userName";
const ON = "showing";

function saveUserName(user){
    localStorage.setItem(USER_NAME,user);
}

function paintGreeting(user){
    greeting.classList.add(ON);
    todoInput.classList.add(ON);
    greeting.innerText = `Hello ${user}!`;
}

function handleUserNameSubmit(evt){
    evt.preventDefault();
    const userName = nameInput.value;
    form.classList.remove(ON);
    saveUserName(userName);
    paintGreeting(userName);
}

function getUserData(){
    form.classList.add(ON);
    form.addEventListener("submit", handleUserNameSubmit);
}

function loadData(){
    const currentUser = localStorage.getItem(USER_NAME);
    if(currentUser==null){
        //show nameInput and get the user Name and display greeting
        getUserData();
    }else{
        //load data(username, todos) from local storage
        paintGreeting(currentUser);
    }
}

function init(){
    loadData();
}

init();




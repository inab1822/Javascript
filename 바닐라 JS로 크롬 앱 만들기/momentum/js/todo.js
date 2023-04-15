const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
    
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li)

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newTodo,
        id : Date.now()
    };
    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==  null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
    
}
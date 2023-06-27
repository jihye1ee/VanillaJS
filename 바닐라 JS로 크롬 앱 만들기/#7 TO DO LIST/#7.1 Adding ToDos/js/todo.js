const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
  span.innerText = toDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  const newToDo = todoInput.value;

  event.preventDefault();
  paintToDo(newToDo);
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

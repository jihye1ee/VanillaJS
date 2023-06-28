const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deletToDo(event) {
  const deleteLi = event.target.parentElement;
  /*
    event.target -> 클릭된 HTML element (여기서는 button)
    event.target.parentElement -> 클릭된 HTML element의 부모 요소 (여기서는 클릭된 button의 부모 요소인 li)

    const deleteLi = this.parentElement; 라고 작성해도 됨
  */

  deleteLi.remove();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = toDo;
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  const newToDo = todoInput.value;

  event.preventDefault();
  paintToDo(newToDo);
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

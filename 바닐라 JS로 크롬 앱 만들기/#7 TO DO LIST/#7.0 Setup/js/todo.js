const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  const newToDo = todoInput.value; // input의 value를 새로운 변수에 복사

  event.preventDefault();
  todoInput.value = ""; // Enter를 누를 때마다 입력한 것을 비움
}

toDoForm.addEventListener("submit", handleToDoSubmit);

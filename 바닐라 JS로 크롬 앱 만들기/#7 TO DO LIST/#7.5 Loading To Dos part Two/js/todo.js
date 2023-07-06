const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = []; // * 항상 빈 배열로 시작

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
  const deleteLi = event.target.parentElement;

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
  toDos.push(newToDo); // * 빈 배열이었던 toDos array에 newToDo push 그래서 local storage가 새로 작성되었던 것
  paintToDo(newToDo);
  saveToDos();
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storage에서 toDos 가져오고 화면에 표시하기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos; // * local storage에 이미 toDos가 있다면 toDos 배열에 parsedToDos를 넣어 복원해야 시작할 때 toDos 배열을 local storage에서 발견되는 이전의 toDos로 할 수 있음
  parsedToDos.forEach(paintToDo);
}

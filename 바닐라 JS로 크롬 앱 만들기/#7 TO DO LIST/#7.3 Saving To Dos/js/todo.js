/*
  [JSON.stringify();]
  - 객체나 배열이나 어떤 것이든 string으로 바꿔 주는 기능을 함

  const player = {
    name: "nico"
  }

  JSON.stringify(player); // '{"name":"nico"}'
*/

const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos() { // toDos 배열을 local storage에 넣는 역할을 수행
  localStorage.setItem("toDos", JSON.stringify(toDos)); // local storage에는 문자열만 저장 가능 그래서 JSON.stringify 사용
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos(); // savaToTos 함수가 실행되는 시점은 이미 newToDo가 toDos 배열에 들어 있을 때임
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
  [JSON.parse();]
  - 객체나 배열이나 어떤 것이든 string으로 바꿔 주는 기능을 함

  const player = {
    name: "nico"
  }

  JSON.stringify(player); // '{"name":"nico"}'
  JSON.parse(JSON.stringify(player)); // {"name":"nico"}
*/

const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

const TODOS_KEY = "toDos";

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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storage에서 toDos 가져오고 화면에 표시하기
const savedToDos = localStorage.getItem(TODOS_KEY);

// ⬇️ if (saveToDos !== null) { ... } 이렇게 작성해도 됨
if (saveToDos) {
  const parsedToDo = JSON.parse(savedToDos);

  parsedToDo.forEach((item) => console.log("this is the turn of ", item)); // 함수를 더 짧게 쓰는 방법 (화살표 함수)
  /*
    - 배열이라서 forEach라는 함수를 가지고 있음
    - forEach 함수는 배열에 있는 각각의 item에 대해 함수를 실행해 줌
  */
}

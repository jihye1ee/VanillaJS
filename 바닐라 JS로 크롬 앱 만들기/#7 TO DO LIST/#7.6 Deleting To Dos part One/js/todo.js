const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // local storage는 toDos 배열을 복사해 두는 곳 (toDos 배열은 local storage와 같지 않음)
}

function deletToDo(event) {
  const deleteLi = event.target.parentElement;

  deleteLi.remove();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = toDo.id; // li의 id를 받은 객체의 id로
  span.innerText = toDo.text; // paintToDo가 이제 텍스트가 아닌 객체를 받게 되어 toDo에서 toDo.text로 수정
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  const newToDo = todoInput.value;
  const newToDoObj = {
    id: Date.now(), // 랜덤 아이디 부여 (밀리초를 주는 함수 사용, 초들이 거의 랜덤처럼 보여 꽤 유용)
    text: newToDo
  }

  event.preventDefault();
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  todoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storage에서 toDos 가져오고 화면에 표시하기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
  const deleteLi = event.target.parentElement;

  toDos = toDos.filter(item => item.id !== parseInt(deleteLi.id));
  /*
    ⬆️
    - 클릭한 li의 id와 다른 id를 가진 toDos의 요소는 남겨 두고 싶다는 뜻
    - item.id는 숫자고 deleteLi.id는 문자열이라 parseInt(deleteLi.id);를 통해 문자열을 숫자로 바꿔 준다
  */
  saveToDos(); // local storage에도 변경 사항이 반영되어야 하므로 한 번 더 불러와야 한다는 것 잊지 말기!
  deleteLi.remove();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = toDo.id;
  span.innerText = toDo.text;
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  const newToDo = todoInput.value;
  const newToDoObj = {
    id: Date.now(),
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
  /*
    forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
    이러한 forEach 함수와 비슷한 작업을 할 수 있는 것이 '.filter'

    .filter()
    - 배열에서 어떤 요소를 삭제할 때 실제로 배열에서 그 요소를 지우는 게 아니라 지우고 싶은 요소를 제외하고 새 배열을 만듦
    => 요소를 지우는 게 아닌 ⭐️제외⭐️하는 것

    function numFilter() {
      // 만약 새 배열에서도 이 배열([1, 2, 3, 4])을 유지하고 싶다면 numFilter 함수는 반드시 true를 리턴해야 함
    }

    [1, 2, 3, 4].filter(numFilter);
    => filter는 numFilter를 부르고 1, 2, 3, 4에 numFilter가 차례대로 실행됨 (numFilter(1), numFilter(2), ...)

    ex.
    (1) 3을 제외하고 싶을 때
    function numFilter(item) {
      return item !== 3; // 3이 아니면 true를 리턴 -> 3을 제외
    }

    [1, 2, 3, 4, 5].filter(numFilter); // [1, 2, 4, 5]

    (2) 1000보다 큰 수를 제외하고 싶을 때
    const arr = [1234, 5454, 223, 122, 45, 6775, 334];

    function numFilter(item) {return item <= 1000;}
    arr.filter(numFilter);
  */
}

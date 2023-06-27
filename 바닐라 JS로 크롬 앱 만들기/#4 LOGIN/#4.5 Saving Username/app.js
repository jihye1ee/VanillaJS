const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const userName = loginInput.value;

  event.preventDefault();
  localStorage.setItem("userName", userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

/*
  Local Storage

  - 정보를 저장하고 불러오고 삭제하는, 브라우저가 가지고 있는 작은 DB 같은 API
  - Local Storage에 무엇이 들어 있는지 보고 싶다면 개발자 도구 이용하면 됨 (개발자 도구 -> Application -> Storage -> Local Storage)

  - Local Storage API (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  - localStorage.setItem(); : Local Storage에 정보 저장
  - localStorage.getItem(); : Local Storage에 저장한 정보 불러내기
  - localStorage.removeItem(); : Local Storage에 저장한 정보 삭제
*/

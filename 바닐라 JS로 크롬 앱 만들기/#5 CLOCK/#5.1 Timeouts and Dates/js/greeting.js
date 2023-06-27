const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const removeLocalStorageButton = document.querySelector(".remove-button");

const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";

const savedUserName = localStorage.getItem(USERNAME_KEY); // Local Storage가 비어 있으면(Local Storage에 없는 정보를 불러오려고 하면) null 값을 받음

function onLoginSubmit(event) {
  const typedUserName = loginInput.value;

  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, typedUserName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintingGreetingAndButton(typedUserName);
}

function paintingGreetingAndButton(userName) {
  /*
    - 같은 동작(화면에 텍스트 출력)을 반복하고 있어 함수로 만들어 줌
    - 호출하는 위치에 따라 유저 정보는 다른 곳에서 오게 됨
  */
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  removeLocalStorageButton.classList.remove(HIDDEN_CLASSNAME);
  removeLocalStorageButton.addEventListener("click", removeLocalStorage);
}

function removeLocalStorage() {
  localStorage.removeItem(USERNAME_KEY);
}

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintingGreetingAndButton(savedUserName);
}

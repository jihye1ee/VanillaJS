const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
  const userName = loginInput.value;

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(userName);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + userName; -> 이렇게 작성 가능하지만 간격도 기억해야 하고 +도 보기 좋지 않음
  greeting.innerText = `Hello ${userName}`;
  /*
    바로 위 코드와 동일한 방법 (강의에서는 이 방법을 선호함)

    - 백틱 기호(`)로 시작해야 함 (작은 따옴표(') 기호 쓰면 작동 안 함)
    - 변수와 string을 결합(변수를 string 안에 포함)하고 싶다면 `string ${변수명}` 이런 식으로 작성해야 하고 뒤에 뭘 추가해도 상관없음 (${변수명} 이 부분만 JS가 변수값으로 바꿔 줌)
  */
}

loginForm.addEventListener("submit", onLoginSubmit);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // 어떤 event의 기본 행동이든 발생되지 않도록 막는 함수 실행 (이 코드에서는 form을 submit 하면 페이지가 새로 고침 되는 행동을 막음)

  const userName = loginInput.value;

  console.log(event); // SubmitEvent
  console.log(userName);
}

function handleLinkClick(event) {
  event.preventDefault(); // 페이지 이동 동작 막음
  alert("clicked!"); // alert는 모든 동작을 막아내서 요즈음 잘 사용하지 않음
  //event.preventDefault;
  console.log(event); // ClickEvent
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

/*
  addEventListener 안에 있는 함수는 내가 직접 실행하는 것이 아닌 event 발생 시  브라우저가 실행해 주는 것

  event가 발생할 때 브라우저가 event 뒤에 작성한 function을 호출(위 코드에서는 onLoginSubmit())하게 되는데 첫 번째 argument로서 추가적인 정보(event object)를 가진 채로 호출하게 됨

  모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 되고 JS는 그걸 우리에게 제공해 줌
*/

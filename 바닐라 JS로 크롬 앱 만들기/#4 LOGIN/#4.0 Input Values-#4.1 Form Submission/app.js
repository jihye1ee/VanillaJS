// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginButtonClick() {
  const userName = loginInput.value;

  if (userName === "") {
    alert("Please write your name.");
  } else if (userName.length > 15) { // .length로 string의 길이 알 수 있음
    alert("Your name is too long!");
  }
}

loginButton.addEventListener("click", loginButtonClick);

/*
  - form 안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit 됨 (submit 될 때마다 페이지는 재시작됨)
  - form 안에 있는 버튼을 눌렀을 때 form이 자동으로 submit 됨
  => 클릭하는 것을 더 신경 쓰지 않아도 됨 form을 submit 하는 것에 관심 가지기 (브라우저를 재시작하지 않고 user 정보를 저장하도록)
*/

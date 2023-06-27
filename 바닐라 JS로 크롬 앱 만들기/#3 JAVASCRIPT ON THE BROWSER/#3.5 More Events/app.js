/*
Event를 사용하는 방법
(1) addEventListener() 사용
(2) Window 인터페이스의 'oneventname' 속성을 사용해 이벤트를 수신

대부분 element 찾아서 -> event listener 추가하고 -> event가 발생하면 반응해 주는 패턴

* 강의 내에서는 추후 removeEventListener를 통해 event listener를 제거할 수 있어 (1) 방법을 더 선호함

document의 body,head,title 이런것들은 중요하기 때문에
document.body.style~의 명령이 허용되지만 div 같은 elements는 호출이 안 됨
나머지 element들은 querySelector나 getElementById로 불러와야 됨
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
  console.log("title was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no wifi");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize); // 화면 사이즈가 달라질 때
window.addEventListener("copy", handleWindowCopy); // 화면에서 복사할 때
window.addEventListener("offline", functionWindowOffline); // wifi가 연결되지 않았을 때
window.addEventListener("online", functionWindowOnline); // wifi가 연결되었을 때

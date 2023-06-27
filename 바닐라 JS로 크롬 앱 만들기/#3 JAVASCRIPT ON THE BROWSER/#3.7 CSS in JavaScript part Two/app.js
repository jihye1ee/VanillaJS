const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked"; // 오타 등의 실수로 나타날 에러를 방지하기 위해 변수 안에 클래스 네임 값을 할당

  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);

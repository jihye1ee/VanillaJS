const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;

  /*
  [함수 실행 순서]
  (1) 클릭 이벤트 발생
  (2) currentColor 변수 선언 후 해당 변수에 h1.style.color 값 할당
  (3) newColor 변수 선언
  (4) if문 조건에 따라 tomato 혹은 blue를 newColor에 할당
  (5) newColor를 h1.style.color에 할당
  */
}

h1.addEventListener("click", handleTitleClick);

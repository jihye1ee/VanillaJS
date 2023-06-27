/*
  - className: 특정 element의 class 속성의 값을 가져오거나 설정할 수 있음
  - classList: element의 class 속성의 컬렉션인 활성 DOMTokenList를 반환하는 읽기 전용 프로퍼티

  => classList 사용은 공백으로 구분된 문자열인 element.className을 통해 element의 class 목록에 접근하는 방식을 대체하는 간편한 방법 (class들을 목록으로 작업할 수 있게끔 허용)
  => className은 모든 걸 교체해 버려 기존에 가지고 있던 class까지 없앨 수 있음
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /* const clickedClass = "clicked";

  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  } */

  h1.classList.toggle("clicked"); // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면 clicked 제거, 없다면 clicked 추가함
}

h1.addEventListener("click", handleTitleClick);

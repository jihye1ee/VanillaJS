/*
  JavaScript는 html에 접근하고 읽고 변경할 수 있게 설정되어 있음
  -> html에서 여러 정보를 가져올 수 있고 JavaScript 코드에서 그 항목들을 보고 새로운 항목을 추가하는 것도 가능

  JavaScript를 사용하는 이유는 html과 상호작용하기 위해서임
  -> htm의 element들을 JavaScript를 통해 변경하고 읽을 수 있음

  document는 브라우저에 이미 존재하는 object, website를 의미
  -> 접근 가능한 html을 가리키는 객체

  document.title
  document.body
  document.location
  ...

  [원하는 값을 불러오는 여러가지 방법]
  (1) getElementById(): html에서 id를 통해 element를 찾아 주는 함수
  (2) getElementsByClassName(): html에서 해당 class name을 가진 모든 element들을 찾아 주는 함수 -> 많은 element들을 한꺼번에 가지고 와야 하는 경우에 사용
  (3) getElementsByTagName(): html에서 해당하는 모든 태그 element들을 찾아 주는 함수 -> 배열로 return
  * (4) querySelector(): element를 css 방식으로 검색 가능 -> 단 하나의 element를 return (여러 개가 있을 때는 첫 번째 것 하나만 return)
  * (5) querySelectorAll(): element를 css 방식으로 검색 가능 -> 해당하는 모든 element를 배열로 return
*/

const title = document.getElementById("title"); // <h1 id="title">Grab me!</h1>
const his = document.getElementsByClassName("hi");
const title2 = document.querySelector(".title2 h3");
const title3 = document.querySelectorAll(".title3 h4");

title.innerText = "Got you!"; // html element를 JavaScript로 접근하여 수정

console.log(title.id); // title
console.log(title.className); // hello
console.log(his); // [h2.hi, h2.hi, h2.hi]
console.log(title2); // <h3>title2</h3>
console.log(title3); // [h4, h4, h4]

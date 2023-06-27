/*
  const clock = document.querySelector("#clock");

  function getClock() {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getHours()}:${date.getSeconds()}`;
  }

  getClock();
  setInterval(getClock, 1000);

  상단 스크립트를 실행하면 1~9의 숫자는 1, 2, ... 이런 식으로 표기됨
  원하는 표기 방식은 01, 02, ...
  => JS에 요구하는 건 string이 항상 적어도 최소한 2개의 문자를 가지고 있어야 하는 것
  => padStart();

  [padStart()]
  - string에 쓸 수 있는 함수
  - 내가 가지고 있는 string보다 길게 만들어야 할 때 사용
  - "1".padStart(2, "0"); : string의 길이가 최소한 2여야 하고 해당 조건 충족 못 할 시 앞쪽에 string의 최소 길이가 될 때까지 "0" 추가
  - "2".padStart(2, "0"); // "02"
    "12".padStart(2, "0"); // "12" -> 이미 string("12")의 길이가 2이기 때문에 padStart는 아무 작업도 하지 않음
    "hello".padStart(10, "h"); // hhhhhhello

  [padEnd()]
  - string에 쓸 수 있는 함수
  - 내가 가지고 있는 string보다 길게 만들어야 할 때 사용
  - "1".padEnd(2, "0"); : string의 길이가 최소한 2여야 하고 해당 조건 충족 못 할 시 뒤쪽에 string의 최소 길이가 될 때까지 "0" 추가
  - "2".padEnd(2, "0"); // "20"
    "12".padEnd(2, "0"); // "12" -> 이미 string("12")의 길이가 2이기 때문에 padEnd는 아무 작업도 하지 않음
    "hello".padEnd(10, "o"); // helloooooo
*/

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // date.getHours(), date.getMinutes(), date.getSeconds()의 값은 숫자이므로 String()을 사용하여(String constructor로 주위를 감싸) 문자열로 바꿔 준 후 padStart 함수를 써야 함

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

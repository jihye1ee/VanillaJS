/*
  - Interval: '매번' 일어나야 하는 것 (ex. 매 2초마다 무슨 일이 일어나게 하고 싶을 때 사용)
  - setInterval(실행하고자 하는 함수, 호출되는 함수 간격(milliseconds)); -> setInterval 함수는 두 개의 인자를 받음
*/

const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000); // 매 2초마다 sayHello 함수 실행

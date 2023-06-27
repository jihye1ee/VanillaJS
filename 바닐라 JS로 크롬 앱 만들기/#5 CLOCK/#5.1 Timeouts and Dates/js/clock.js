/*
  - Timeout: 일정 시간이 흐른 뒤에 함수를 딱 한 번만 호출
  - setTimeout(실행하고자 하는 함수, 함수가 호출되기까지 걸리는 시간(얼마나 기다릴 건지, milliseconds 단위로 작성)); -> setTimeout 함수도 두 개의 인자를 받음

  - new Date(); : 오늘 날짜를 가져옴
*/

const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello");
}

function getClock() {
  const date = new Date(); // Date 객체 생성 (Date 객체는 호출하는 당시의 현재 날짜와 시간을 알려 줌)

  clock.innerText = `${date.getHours()}:${date.getHours()}:${date.getSeconds()}`;
}

setTimeout(sayHello, 5000); // 5초 뒤에 sayHello 함수 실행

getClock(); // 하단 코드가 실행되려면 1초 기다려야 하기 때문에 윈도우가 로드되자마자 즉시 getClock 함수를 실행하려고 작성
setInterval(getClock, 1000); // 매 초마다 getClock 함수 실행

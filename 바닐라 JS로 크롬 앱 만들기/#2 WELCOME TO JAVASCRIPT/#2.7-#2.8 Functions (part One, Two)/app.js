/*
  [function]

  - 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 됨
  - 어떤 코드를 캡슐화해서 여러 번 실행할 수 있게 해 줌
*/

// 어떤 이름을 넣는 "Hello my name is ~"를 출력하는 함수 만들기
function sayHello() {
  // 이 안에 작성되는 것이 sayHello 함수를 실행할 때마다 실행됨
  console.log("Hello!");
}

sayHello(); // () <- 함수 실행되게 함 (실행 버튼이라고 생각하면 됨)

/*
  * function에 값이나 데이터를 보내는 방법

  ────────────────────────────────────────────────────────────────────────────────────────

  [argument(인수)]

  - function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
*/

function sayHi(nameOfPerson, ageOfPerson) {
  /*
    데이터를 받는 방법은 ()에 데이터를 추가하는 것임 (원하는 어떤 이름이든, 어떤 변수 이름이든 넣어도 됨)
    => 들어오는 데이터는 nameOfPerson이라는 변수 이름을 쓰게 됨
    => 여러 개 받을 수 있음
  */
  console.log("Hi my name is " + nameOfPerson + ". And I'm " + ageOfPerson + ".");
}

console.log(nameOfPerson, ageOfPerson); // Error =>  nameOfPerson과 ageOfPerson은 function의 body에만 존재함

sayHi("nico", 10);
sayHi("dal", 23);
sayHi("lynn", 21);
// sayHi function은 2 개의 argument를 받고 있음

// ────────────────────────────────────────────────────────────────────────────────────────

// 계산기 만들어 보기
const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  divide: function(a, b) {
    console.log(a / b);
  },
  multiply: function(a, b) {
    console.log(a * b);
  },
  square: function(a, b) {
    console.log(a ** b);
  }
}

calculator.add(1, 2); // 3
calculator.minus(3, 4); // -1
calculator.divide(5, 6); // 0.8333333333333334
calculator.multiply(7, 8); // 56
calculator.square(9, 10); // 3486784401

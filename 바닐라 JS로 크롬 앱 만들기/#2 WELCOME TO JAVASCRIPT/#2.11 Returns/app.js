const age = 28;

// 한국 나이를 계산하는 함수
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
  // function이 function의 밖과 소통하는 방법 -> return 키워드 사용
}

const krAge = calculateKrAge(age);

console.log(krAge);

/*
  함수(function)는 어떤 작업을 처리하고 그 결과를 return 하기 위해 사용함
  -> 어떤 기능을 수행하는 것이라고 생각하기보다는 어떤 일을 수행하고 그 결과를 알려 주는 것이라고 생각하면 좋음

  어떤 일을 수행하고 그 결과를 알려 주는 기능을 return이 수행
*/

const calculator = {
  add: function(a, b) {
    console.log("hello"); // 작동함
    return a + b; // function 종료 (계속 남아 있는 것 X, 실행되고 나면 사라지고, 마지막에는 결과를 남김)
    console.log("bye"); // 작동 안 함

    // console.log는 그림의 떡 꺼내서 먹으려면 return 필요
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  square: function(a, b) {
    return a ** b;
  }
}

// 하위 스크립트는 '상호 의존적'임
const plusResult = calculator.add(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const multiplyResult = calculator.multiply(10, minusResult); // -50
const divideResult = calculator.divide(multiplyResult, plusResult); // -10
const squareResult = calculator.square(divideResult, addResult); // -1000000

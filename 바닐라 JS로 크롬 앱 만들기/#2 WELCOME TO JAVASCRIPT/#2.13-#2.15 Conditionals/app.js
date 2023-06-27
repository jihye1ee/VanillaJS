/*
  [조건문 (Conditionals)]

  (1) true인지 false인지 알려 줌 -> 무언가 확인해야 할 때 거의 대부분 사용
  (2) 키워드는 'if'
  (3) if (조건) {
    // 조건이 참(true)일 때 실행되는 코드
  } else {
    // 조건이 거짓(false)일 때 실행되는 코드
  }
  (4) 조건이 하나 이상일 때 else if 써 줌
  (5) else는 선택 사항이므로 꼭 넣어 주지 않아도 됨
*/

// 음주가 가능한 나이인지 아닌지 알려 주는 계산기
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.")
} else if (age === 100) {
    console.log("wow you are wise.");
    /*
        age가 100일 때 해당 코드 실행 안 됨
        else if (age > 80) {
            console.log("You can do whatever you want.")
        }
        상단 코드가 먼저 실행되기 때문에!
        -> 적는 순서 잘 생각해야 함
    */
}

/*
  prompt라는 함수는 2개의 인자(message, default)를 가짐
  -> 사용자에게 message를 보여 주고 값을 넣으라고 말해 줌

  prompt라는 함수는 잘 사용하지 않음 (아주 오래된 방식)
  (1) 메시지창에 아무런 스타일(CSS)을 적용할 수 없음
  (2) prompt가 실행되는 중에는 자바스크립트 코드의 실행을 멈추게 함
  (3) 어떤 브라우저는 prompt 같은 팝업을 제한하기도 함

  prompt로 받은 값의 타입은 기본적으로 string(문자)임

  typeof: value의 type을 알 수 있는 키워드
  parseInt(): string을 number로 변환해 주는 함수
  isNaN(): 어떤 값이 NaN인지 판별하는 함수, Boolean을 return 함 (false: 숫자임 / true: 숫자 아님)
  &&: 앞뒤로 있는 조건 둘 다 true여야 하는 연산자
  ||: 앞뒤로 있는 조건 중 하나만 true여야 하는 연산자

  true || true === true
  false || true === true
  true || false === true
  false || false === false

  true && true === true
  false && true === false
  true && false === false
  false && false === false

  = : value를 할당하는 것
  === : 같음을 확인하는 방법
  !=== : 같지 않음을 확인하는 방법
*/

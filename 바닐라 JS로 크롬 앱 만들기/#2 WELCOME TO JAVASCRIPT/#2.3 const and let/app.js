/*
  회차 목적: const VS let
  const: constant (상수), 값이 바뀔 수 없음
  let: 값이 변할 수 있음

  const를 기본적으로 사용하고 때에 따라서 필요할 때, 변수를 업데이트하고 싶을 때 let을 씀

  var라는 변수 키워드도 있지만 이건 언어를 통한 보호를 받지 못함 => 변수값을 실수로 잘못 업데이트해도 언어가 말해 주지 않음
  그리고 const나 let이 가지고 있는 특징이 없이 어디서든 변수값 업데이트가 가능함 => 변수 선언만 보고 해당 변수가 밑에서 뭘 하는지 알 수 없음 (작성자 의도 파악 불가)

  결론: ★ 기본적으로 항상 const를 쓰고 가끔 필요할 때만 let을 쓰되 var은 쓰지 말 것 ★
*/

const a = 5;
const b = 2;
let myName = "nico"; // 변수 키워드 let을 사용하면 변수값 업데이트가 가능함

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas"; // let은 새로운 것을 생성할 때 사용하는 것이기 때문에 한번 변수가 선언(let myName = "nico")되면 업데이트하고 싶을 때 그냥 하면 됨

console.log("your name is " + myName);

/*
  const myName = "nico";
  myName = "nicolas";

  console.log("your name is " + myName); // Uncaught TypeError: Assignment to constant variable. (constant variable에 새로운 값을 대입할 수 없다는 에러) => 만약 const 키워드를 사용하여 변수를 선언했다면 변수값을 절대 업데이트할 수 없다는 뜻
*/

/*
  const a = 5;
  const b = 2;
  let myName = "nico";

  이제 이 코드를 통해 절대 바꾸지 않을 두 variable인 a, b가 있다는 것을 알 수 있고 바뀔 수도 있는 variable(myName)이 있다는 것을 알 수 있음
  => 코드를 작성한 사람의 의도를 파악할 수 있음
*/

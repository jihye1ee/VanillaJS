/*
  회차 목적: 데이터를 정리하는 법에 대해 학습
  => '데이터를 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까?'
  => Array (배열)
  => 배열의 목적: 하나의 변수 안에 데이터 리스트를 가지는 것 (값을 리스트로 정리)
*/

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 데이터로 이뤄진 리스트를 만든 것 ↓
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"]; // 내가 원한다면 숫자를 넣을 수도 있고, 변수를 넣을 수도 있음

/*
  배열 작성 방법
  (1) 처음과 끝은 []
  (2) 배열 안 항목은 쉼표로 분리
  (3) 무엇이든 넣어도 됨
*/

// ────────────────────────────────────────────────────────────────────────────────────────

const daysOfWeek2 = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get item from Array
// Q. 한 주의 요일 중 5번째는 뭔가요? = 배열의 다섯 번째 요소는 무엇인가요?
console.log(daysOfWeek2[4]);

/*
  배열 안의 데이터에 접근하고 싶다면?
  => 변수의 이름을 적어 주고 대괄호를 열어 우리가 얻고 싶은 항목의 번호를 넣고 대괄호를 닫아 주면 됨
  => 컴퓨터는 1부터 숫자를 세지 않고 0부터 세기 시작한다는 점을 유의하기 (= 인덱스는 0부터 시작)
*/

// Get Item from Array
console.log(daysOfWeek2); // ["mon", "tue", "wed", "thu", "fri", "sat"];

// Add one more day to the array
daysOfWeek2.push("sun");

console.log(daysOfWeek2); // ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

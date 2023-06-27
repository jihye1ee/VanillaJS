/*
  [회차 목적]

  1. 객체(Object)가 무엇인지
  2. 그것을 어떻게 사용하는지
  3. 객체와 배열(Array)와 다른 점이 무엇인지
  4. 객체에서 무엇인가를 얻어오는 방법
  5. 객체에 무엇인가 추가하거나 업데이트하는 방법
*/

// 만약 게임을 만들 때 객체라는 것이 없다면..
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"
// 우리는 상위의 것이 한 개의 개체(entity), 즉 player에 대해 설명하고 있다는 것을 앎

// 객체라는 걸 아직 모른다는 가정 하에 이미 알고 있는 배열로 나타내 본다면..
const player1 = ["nico", 121212, false, "little bit"]; // 적합하지 않다 => 배열의 요소가 어떤 의미인지 알려 주고 있지 않기 때문, 주석으로 설명할 수 있지만 더 좋은 방법이 있어야 함

// ────────────────────────────────────────────────────────────────────────────────────────

// 객체: property를 가진 데이터를 저장하도록 해 줌
const player2 = {
  name: "nico",
  points: 121212,
  handsome: false,
  fat: "little bit"
};

console.log(player2.name); // "nico"
console.log(player2["name"]); // "nico"

/*
  console.log()와 player.name이 유사한 형태를 보여 주고 있는데
  이 말은 즉 console은 Object(객체)고, 그 안의 어딘가에 log라는 것이 있다는 것을 뜻함
*/

/*
  객체도 배열과 마찬가지로 데이터를 정리하는 데 아주 좋은 방식임
  하지만 리스트는 아님 => 리스트는 모든 값이 같은 의미를 가지기 때문
  ex) 한 주의 요일 리스트를 가진다면 그 리스트에 있는 모든 것이 한 주의 요일이라는 것을 앎
*/

console.log(player2); // { name: "nico", points: 121212, handsome: false, fat: "little bit" }
 // 객체 업데이트 가능 ↓
player2.fat = false;
player2.lastName = "potato";
console.log(player2); // { name: "nico", points: 121212, handsome: false, fat: false, last name: "potato" }

/*
  Q. const로 선언된 변수의 값은 변할 수 없다고 했는데 어떻게 업데이트가 가능한 건가요?
  A. player2라는 객체는 동일하고, 그 객체 안에 있는 값을 변경하기 때문에 가능
     const 에러는 전체를 하나의 값으로서 업데이트하려고 할 때 발생함
     ex) player2 = false; (객체였던 player2를 Boolean으로 업데이트함 → Error)
*/

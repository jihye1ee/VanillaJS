/*
  회차 목적: learn about Boolean(true, false), null, undefined

  Boolean: true (on) or false (off)
*/

const amIFat1 = true; // Boolean
const amIFat2 = "true"; // String

const amIFat3 = null; // null

/*
  null
  - 아무것도 없음을 의미 (그 변수에 아무것도 없다는 걸 뜻함) =/= false
  - 비어 있다기보다는 아무것도 없는 상태로 채워진 것
  - 절대 자연적으로 발생하지 않음 => 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것 (비어 있는 것을 의도적으로 표현)
*/

let something; // variable을 만들고는 있는데 값을 주고 있지는 않음
console.log(something); // undefined =/= "undefined" => 문자가 아니고 타입임

/*
  undefined
  - 변수는 존재하는데 정의되지 않은 것
  - 공간은 있지만 값이 들어 있지는 않은 것
*/

/* ***********************************************************************

null vs undefined
- null: 변수가 존재하고 값이 주어졌는데 그 값이 "비어 있음"인 것
- undefined: 변수는 존재하지만 값이 주어지지 않은 것

*********************************************************************** */
/*
  Randomness (무작위성)
  - Math module 사용
  - Math.random(): 0부터 1 사이의 랜덤한 숫자를 정수(Integer)가 아닌 소수(float)로 제공
    Math.random() * 10: 0에서 10 사이의 숫자를 제공

  - 소수점 뒤 숫자를 없애는 방법
    (1) Math.round(x): x의 반올림
    -> Math.round(1.1); // 1
       Math.round(1.6); // 2
    (2) Math.ceil(x): x 이상의 최소 정수 (숫자 올림 / 숫자를 천장(ceil)까지 높여 준다고 이해하면 됨)
    -> Math.ceil(1.0); // 1
       Math.ceil(1.02); // 2
    (3) Math.floor(x): x 이하의 최대 정수 (숫자 버림 / 숫자를 바닥(floor)까지 내려 준다고 이해하면 됨)
    -> Math.floor(1.9); // 1
       Math.floor(1.999999); // 1
*/

const quotes = [
  {
    quotes: "With great power comes great responsibility.",
    author: "Spiderman",
  },
  {
    quotes: "It's still you inside of it.",
    author: "Betty Ross",
  },
  {
    quotes: "Hope is the greatest of the gifts well receive.",
    author: "Belle",
  },
  {
    quotes: "Because when I look at you, I can feel it. And I look at you and I'm home.",
    author: "Dory",
  },
  {
    quotes: "My dream wouldn't be complete without you in it.",
    author: "Princess Tiana",
  },
  {
    quotes: "Love is putting someone else's needs before yours.",
    author: "Olaf",
  },
  {
    quotes: "Whatever gift awaits will be just as special as you.",
    author: "Encanto",
  },
  {
    quotes: "You control your destiny. You don't need magic to do it.",
    author: "Merida",
  },
  {
    quotes: "The very things that hold you down are going to lift you up.",
    author: "Dumbo",
  },
  {
    quotes: "If you keep on believing the dream that you wish will come true.",
    author: "Cinderella",
  }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;

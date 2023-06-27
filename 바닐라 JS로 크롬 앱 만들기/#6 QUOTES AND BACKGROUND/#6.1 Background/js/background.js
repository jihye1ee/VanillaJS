const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); // element 생성

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); // body에 bgImage(html element)을 추가
/*
  - prependChild -> 가장 앞에 추가
  - appendChild -> 가장 뒤에 추가
*/

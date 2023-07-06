function onGeoOk(position) {
  // 위치를 받는 데 성공했을 때
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  console.log("You live in", lat, lng);
}

function onGeoError() {
  // 위치를 받는 데 문제가 생겼을 때
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // success와 error 함수를 줘야 함

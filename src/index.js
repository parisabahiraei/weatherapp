let dat = document.querySelector("#dat");

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wendsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = week[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let showDate = `${day}  ${hours}:${minutes}`;
//console.log(showDate);
dat.innerHTML = showDate;

function showTemp(response) {
  console.log(response);
  let cityTemp = response.data.main.temp;
  let temprature = document.querySelector(".temperature");
  temprature.innerHTML = cityTemp;

  let cityHum = response.data.main.humidity;
  let hum = document.querySelector(".humidity");
  hum.innerHTML = cityHum;

  let cityWind = response.data.wind.speed;
  let win = document.querySelector(".wind");
  win.innerHTML = cityWind;

  let cityDiscription = response.data.weather[0].description;
  let disc = document.querySelector(".discribe");
  disc.innerHTML = cityDiscription;
}

function searchedCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city");
  let heading = document.querySelector("h1");
  let cityNameValue = cityName.value;
  heading.innerHTML = cityNameValue;

  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchedCity);

function showCurrentTemp(response) {
  let currentCity = response.data.sys.country;
  let currentCit = document.querySelector("h1");
  currentCit.innerHTML = currentCity;

  let currentTemperature = response.data.main.temp;
  let currentTemp = document.querySelector(".temperature");
  currentTemp.innerHTML = currentTemperature;

  let currentHumidity = response.data.main.humidity;
  let currentHum = document.querySelector(".humidity");
  currentHum.innerHTML = currentHumidity;

  let currentWind = response.data.wind.speed;
  let currentWin = document.querySelector(".wind");
  currentWin.innerHTML = currentWind;

  let currentDiscription = response.data.weather[0].description;
  let currentDisc = document.querySelector(".discribe");
  currentDisc.innerHTML = currentDiscription;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentTemp);
}

function getGeoLoc() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector(".currentcity");
currentButton.addEventListener("click", getGeoLoc);

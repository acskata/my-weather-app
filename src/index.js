let now = new Date();

let date = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

date.innerHTML = `${day}, ${hours}:${minutes}`;

function getCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#location-input");
  let cityElement = document.querySelector("h2");
  cityElement.innerHTML = `${inputElement.value}`;
  let apiKey = "99b6d7e451166786e8df2d31f57d9b2a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemperature);
}

let form = document.querySelector("#location-form");
form.addEventListener("submit", getCity);

function getTemperature(response) {
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let wind = response.data.wind.speed;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}ºC`;
  let currentCity = document.querySelector("h2");
  currentCity.innerHTML = `${city}`;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}%`;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `${wind} m/s`;
}

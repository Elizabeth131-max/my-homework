function myWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#topic");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchInput(city) {
  let apiKey = "3f7ef2457d28667co20b059a40t047b0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(myWeather);
}

function searchMe(event) {
  event.preventDefault();
  let enterInput = document.querySelector("#enter-input");

  searchInput(enterInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchMe);

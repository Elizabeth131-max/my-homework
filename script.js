function searchMe(event) {
  event.preventDefault();
  let enterInput = document.querySelector("#enter-input");
  let cityElement = document.querySelector("#topic");
  cityElement.innerHTML = enterInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchMe);

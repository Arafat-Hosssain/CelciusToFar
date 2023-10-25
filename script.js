function celciusToFarenheit(Celcius) {
  const farenheit = (Celcius * 9) / 5 + 32;
  return farenheit;
}

function displayFarenheit(f) {
  const farSpan = document.querySelector("#far");
  farSpan.textContent = f;
}

const form = document.querySelector("#form");

function handleSubmit(event) {
  event.preventDefault();
  const celcius = event.target.celcius.value;

  if (celcius) {
    const farenheit = celciusToFarenheit(celcius);
    displayFarenheit(farenheit);
  }
}

form.addEventListener("submit", handleSubmit);

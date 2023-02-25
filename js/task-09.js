function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnEl.addEventListener('click', handleColorChange);

function handleColorChange(event) {
  const currentColor = getRandomHexColor();

  colorEl.textContent = currentColor;
  body.style.backgroundColor = currentColor;
  // btnEl.style.backgroundColor = currentColor;
}

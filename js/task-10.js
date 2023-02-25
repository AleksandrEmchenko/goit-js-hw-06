function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const amountEl = document.querySelector('[type="number"]');

createBtn.addEventListener("click", handlerCreateBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  for (let i = 1; i <= amount; i += 1) {
    boxesEl.insertAdjacentHTML("afterbegin", "<div data-element></div>");
    const boxDataEl = document.querySelector("[data-element]");
    boxDataEl.style.cssText = `width: ${(width += 10)}px ; height: ${(height += 10)}px; background-color: ${getRandomHexColor()}; border: 1px solid black`;
  }
  // console.log(boxesEl);
  boxesEl.style.cssText =
    'display: flex; flex-wrap: wrap; justify-content: flex-end; flex-direction: row-reverse; align-items: flex-end; gap: 5px';
    console.log(boxesEl);
}

function handlerCreateBoxes(event) {
  createBoxes(amountEl.value);
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
  amountEl.value = "";
}

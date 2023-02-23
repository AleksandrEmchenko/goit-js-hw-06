function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesEl = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountEl = document.querySelector('[type="number"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(event){
  let widthEl = 30;
  let heightEl = 30;
  
  for (let i = 1; i <= amountEl.value; i +=1) {

    const divEl = document.createElement("div");

    divEl.style.border = '1px solid black';
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = widthEl +'px';
    divEl.style.height = heightEl + 'px';
    
    widthEl += 10;
    heightEl += 10;

    console.log(divEl);

    boxesEl.append(divEl);
  }
}

function destroyBoxes (event) {
  boxesEl.innerHTML = ' ';
}


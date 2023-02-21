const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment (event) {
    counterValue +=1;
    counterValueEl.textContent = counterValue;
}

function decrement (event) {
    counterValue -=1;
    counterValueEl.textContent = counterValue;
}


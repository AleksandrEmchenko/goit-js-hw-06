const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

function handleIncrement (event) {
    counterValue +=1;
    counterValueEl.textContent = counterValue;
}

function handleDecrement (event) {
    counterValue -=1;
    counterValueEl.textContent = counterValue;
}


const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput (event) {
    console.log(event.currentTarget.value);
    output.textContent = event.currentTarget.value;
}
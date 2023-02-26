const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', handleResizing);

function handleResizing () {
    textEl.style.fontSize = `${inputEl.value}px`;
}
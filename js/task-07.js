const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', handleResizing);

function handleResizing (event) {
    textEl.style.fontSize = inputEl.value + 'px';
}
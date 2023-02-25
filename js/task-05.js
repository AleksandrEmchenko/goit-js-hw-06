const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleTextSubstitution);

function handleTextSubstitution(event) {
    !event.currentTarget.value
    ? output.textContent = "Anonymous"
    : (output.textContent = event.currentTarget.value);
}
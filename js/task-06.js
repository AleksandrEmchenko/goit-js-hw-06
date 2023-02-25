const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleFocusOnInput);

function handleFocusOnInput(event) {
  event.currentTarget.classList.add("invalid");

  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
}

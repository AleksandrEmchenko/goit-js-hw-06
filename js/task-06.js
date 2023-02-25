const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleFocusOnInput);


function handleFocusOnInput(event) {

  const value = event.currentTarget.value.length;
  const dataset = event.currentTarget.dataset.length;
  const fild = event.currentTarget;

  if (value === Number(dataset) ) {
    fild.classList.add("valid");
    fild.classList.remove("invalid");
   } else {
     fild.classList.remove("valid");
     fild.classList.add("invalid");
   }  
}
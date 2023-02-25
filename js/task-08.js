const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormControl);
const {email, password} = form;

function handleFormControl (event) {
    event.preventDefault();

    if (email.value === "" || password.value === "") {
    alert ("Please fill in all the fields!");
  }

    if(email.value && password.value) {
      console.log(`{ ${email.value}; ${password.value} }`);
      event.currentTarget.reset();
    }
}
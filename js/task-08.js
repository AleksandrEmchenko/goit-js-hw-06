const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormControl);
const {email, password} = form;

function handleFormControl (event) {
    event.preventDefault();

    if (email.value === "" || password.value === "") {
    alert ("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}`);
  console.log(`Password: ${password.value}`);

  event.currentTarget.reset();
}
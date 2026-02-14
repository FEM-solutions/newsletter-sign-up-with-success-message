/* 
Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
*/

const form = document.getElementById("form");
const inputEmail = document.querySelector(".input");
const btnSubmit = document.getElementById("btnSubmit");
const btnConfirmation = document.getElementById("btnConfirmation");

const newsletterSubscription = document.getElementById(
  "newsletterSubscription",
);
const newsletterConfirmation = document.getElementById(
  "newsletterConfirmation",
);
const emailUser = document.getElementById("emailUser");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const validation = validate_email(emailValue);

  if (!validation || inputEmail.value == "") {
    form.classList.add("error-state");
  }
  if (validation) {
    emailUser.textContent = emailValue;
    form.classList.remove("error-state");
    inputEmail.value = "";

    newsletterConfirmation.classList.toggle("hidden");
    newsletterSubscription.classList.toggle("hidden");
  }
});

btnConfirmation.addEventListener("click", () => {
  newsletterSubscription.classList.toggle("hidden");
  newsletterConfirmation.classList.toggle("hidden");
});

function validate_email(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

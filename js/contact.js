const formElement = document.getElementById("contactForm");
const buttonElement = formElement.querySelector("button");
const successForm = document.querySelector(".formSuccess");

const formSubmitElement = formElement.querySelector("button");
const formInputElements = formElement.querySelectorAll("input");

formSubmitElement.addEventListener("click", onSubmit);

function onSubmit(element) {
  let validForm = true;

  formInputElements.forEach((item) => {
    if (!item.checkValidity()) {
      validForm = false;
    }
  });

  if (validForm) {
    successForm.innerHTML = `
                              ✔ Success ✔
                              `;
    element.preventDefault();
    // API Post function here.
  }
}

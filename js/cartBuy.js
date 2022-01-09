const formElement = document.getElementById("chechoutBuyForm");
const buttonElement = formElement.querySelector("button");
const successForm = document.querySelector(".buySuccess");

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

    window.setTimeout(function () {
      window.location.href = "https://interaction-design-ca-mas.netlify.app/checkout.html";
    }, 3000);
    // API Post function here.
  }
}

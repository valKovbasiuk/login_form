(function() {
  // turn off html validation when js can be executed
  document
    .querySelectorAll("form")
    .forEach(element => element.setAttribute("novalidate", "true"));

  const inputRequired = document.querySelectorAll("input[required]");

  inputRequired.forEach(element =>
    element.addEventListener("change", removeErrorClass)
  );

  function removeErrorClass(e) {
    console.log(e.target.classList);
    e.target.classList.remove(inputValidationErrorClass);
  }

  // select target form
  const dialog_wdw = document.querySelector(".modal");

  const submitButton = document.querySelector("form .submit");

  // CSS class used to highlight input field did not pass validation
  const inputValidationErrorClass = "error";

  console.log(submitButton);

  submitButton.addEventListener("click", submitForm);

  // select all buttons which can show/hide modal window
  document
    .querySelectorAll(".btn_login, .btn__close")
    .forEach(element => element.addEventListener("click", classHideToggle));

  function classHideToggle() {
    // dialog_wdw.style.display === "none"
    //   ? (dialog_wdw.style.display = "block")
    //   : (dialog_wdw.style.display = "none");
    dialog_wdw.classList.toggle("hidden");
  }

  function submitForm(e) {
    e.preventDefault();
    if (validateInput()) {
      sendData();
      submitButton.disabled = true;
      console.log("success!!!");
    }
  }

  function sendData() {}

  function validateInput() {
    validateEmail();
    validatePassword();
    return validateEmail() && validatePassword();
  }

  function validateEmail() {
    const emailRe = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const emailField = document.querySelector("input[type='email']");
    if (
      emailField.value.trim() === "" ||
      !emailRe.test(emailField.value.trim())
    ) {
      emailField.classList.add(inputValidationErrorClass);
      return false;
    } else {
      emailField.value = emailField.value.trim();
      return true;
    }
  }

  function validatePassword() {
    const passField = document.querySelector("input[type='password']");
    if (passField.value === "" || passField.value.length < 4) {
      passField.classList.add(inputValidationErrorClass);
      return false;
    } else {
      return true;
    }
  }
})();

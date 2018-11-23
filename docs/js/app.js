// https://github.com/SvitlanaTsupryk-jul18/Form/blob/af0c4bf8fc1f979236a374fb59761676982fa5c1/assets/js/script.js

(function() {
  jsForm();

  function jsForm() {
    const form = document.querySelector(".js-form");

    if (!form) {
      return console.log("form not found");
    }

    // turn off html validation when js can be executed
    form.setAttribute("novalidate", "true");

    const inputs = document.querySelectorAll(".form__input");

    const submitButton = document.querySelector(".js-submit");
    submitButton.disabled = true;

    // CSS class used to highlight input field did not pass validation
    const inputValidationErrorClass = "error";
    const inputValidationValidClass = "valid";

    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
        // console.log(e.target);
        // console.log(this);
        validateInput(e.target);
      })
    );

    document
      .querySelectorAll(".js-btn--open-close")
      .forEach(element => element.addEventListener("click", classHideToggle));

    function classHideToggle() {
      document.querySelector(".js-modal").classList.toggle("hidden");
    }

    submitButton.addEventListener("click", submitForm);

    function submitForm(e) {
      e.preventDefault();
      if (validateInput()) {
        sendData();
        submitButton.disabled = true;
        emailField.value = "";
        passField.value = "";
        console.log("success!!!");
      }
    }

    function validateInput(currentField) {
      let isValid;

      if (currentField.getAttribute("type") === "email") {
        isValid = validateEmail(currentField);
      } else if (currentField.getAttribute("type") === "password") {
        isValid = validatePassword(currentField);
      }

      decorInputIsValid(currentField, isValid);
    }

    function validateEmail(emailField) {
      const emailRe = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      return emailRe.test(emailField.value.trim());
    }

    function validatePassword(passField) {
      return passField.value.length > 3;
    }

    function decorInputIsValid(currentField, isValid) {
      if (isValid) {
        currentField.classList.remove(inputValidationErrorClass);
        currentField.classList.add(inputValidationValidClass);
      } else {
        !currentField.classList.contains(inputValidationErrorClass) &&
          currentField.classList.add(inputValidationErrorClass);
      }
    }
  }

  function sendData() {}
})();

(function() {
  jsForm();

  function jsForm() {
    // turn off html validation when js can be executed
    const forms = document.querySelectorAll(".js-form");

    if (!forms) {
      return console.log("forms not found");
    }

    forms.forEach(element => element.setAttribute("novalidate", "true"));

    // const inputRequired = document.querySelectorAll("input[required]");
    const emailField = document.querySelector("input[type='email'][required]");
    const passField = document.querySelector(
      "input[type='password'][required]"
    );

    // select target form
    const dialog_wdw = document.querySelector(".modal");
    const submitButton = document.querySelector("form .submit");
    submitButton.disabled = true;

    // CSS class used to highlight input field did not pass validation
    const inputValidationErrorClass = "error";
    const inputValidationValidClass = "valid";

    emailField.addEventListener("input", function(e) {
      // console.log("email input detected");
      validateInput();
    });

    passField.addEventListener("input", function(e) {
      // console.log("pass input detected");
      validateInput();
    });

    submitButton.addEventListener("click", submitForm);

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
        emailField.value = "";
        passField.value = "";
        console.log("success!!!");
      }
    }

    function sendData() {}

    function validateInput() {
      validateEmail();
      validatePassword();
      if (validateEmail() && validatePassword()) {
        submitButton.disabled = false;
        return true;
      } else {
        submitButton.disabled = true;
        return false;
      }
    }

    function validateEmail() {
      const emailRe = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (
        // emailField.value.trim() === "" ||
        !emailRe.test(emailField.value.trim())
      ) {
        !emailField.classList.contains(inputValidationErrorClass) &&
          emailField.classList.add(inputValidationErrorClass);
        return false;
      } else {
        emailField.value = emailField.value.trim();
        emailField.classList.remove(inputValidationErrorClass);
        emailField.classList.add(inputValidationValidClass);
        return true;
      }
    }

    function validatePassword() {
      if (passField.value.length < 4) {
        !passField.classList.contains(inputValidationErrorClass) &&
          passField.classList.add(inputValidationErrorClass);
        return false;
      } else {
        passField.classList.remove(inputValidationErrorClass);
        passField.classList.add(inputValidationValidClass);
        return true;
      }
    }
  }
})();

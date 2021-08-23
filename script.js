(function () {
  let form = document.querySelector("#register-form");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, "Email is a required field!");
      return false;
    }
    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address");
      return false;
    }
    hideErrorMessage(emailInput);
    return true;
  }

  function validatePassword() {
    let value = passwordInput.value;
    if (!value) {
      showErrorMessage(passwordInput, "Password is a required field");
      return false;
    }
    if (value.length < 8) {
      showErrorMessage(
        passwordInput,
        "The password should be at least 8 characters long"
      );
      return false;
    }
    hideErrorMessage(passwordInput);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }

  function showErrorMessage(input, message) {
    let inputWrapper = input.parentElement;
    let error = inputWrapper.querySelector(".error-message");
    if (error) {
      inputWrapper.removeChild(error);
    }
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      inputWrapper.appendChild(error);
    }
  }

  function hideErrorMessage(input) {
    let message = input.parentElement.querySelector(".error-message");
    if (message) {
      input.parentElement.removeChild(message);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert("Success!");
    } else {
      console.error("bad credentials");
    }
  });

  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);
})();

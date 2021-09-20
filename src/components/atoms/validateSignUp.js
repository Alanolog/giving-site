import validateEmail from "./validateEmail";
function validateSignUp(email, password, password2) {
  if (!validateEmail(email)) {
    document.getElementById("falseRegisterEmail").classList.remove("hidden");
    document.getElementById("email").style.borderBottom = "1px solid red";
  } else {
    document.getElementById("falseRegisterEmail").classList.add("hidden");
    document.getElementById("email").style.borderBottom = "1px solid#3c3c3c";
  }

  if (password.length <= 6) {
    document.getElementById("falseRegisterPassword").classList.remove("hidden");
    document.getElementById("password").style.borderBottom = "1px solid red";
  } else {
    document.getElementById("falseRegisterPassword").classList.add("hidden");
    document.getElementById("password").style.borderBottom =
      "1px solid #3c3c3c";
  }

  if (password !== password2) {
    document
      .getElementById("falseRegisterPassword2")
      .classList.remove("hidden");
    document.getElementById("password2").style.borderBottom = "1px solid red";
  } else {
    document.getElementById("falseRegisterPassword2").classList.add("hidden");
    document.getElementById("password2").style.borderBottom =
      "1px solid #3c3c3c";
  }
}
export default validateSignUp;

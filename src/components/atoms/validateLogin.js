import validateEmail from "./validateEmail";
function validateLogin(email, password) {
  if (!validateEmail(email)) {
    document.getElementById("falseLoginEmail").classList.remove("hidden");
    document.getElementById("email").style.borderBottom = "1px solid red";
  } else {
    document.getElementById("falseLoginEmail").classList.add("hidden");
    document.getElementById("email").style.borderBottom = "1px solid#3c3c3c";
  }
  if (password <= 6) {
    document.getElementById("falseLoginPassword").classList.remove("hidden");
    document.getElementById("password").style.borderBottom = "1px solid red";
  } else {
    document.getElementById("falseLoginPassword").classList.add("hidden");
    document.getElementById("password").style.borderBottom =
      "1px solid #3c3c3c";
  }
}
export default validateLogin;

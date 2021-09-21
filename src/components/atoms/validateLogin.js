import validateEmail from "./validateEmail";
function validateLogin(email, password) {
  let isCorrect = true;
  if (!validateEmail(email)) {
    document.getElementById("falseLoginEmail").classList.remove("hidden");
    document.getElementById("email").style.borderBottom = "1px solid red";
    isCorrect = false;
  } else {
    document.getElementById("falseLoginEmail").classList.add("hidden");
    document.getElementById("email").style.borderBottom = "1px solid#3c3c3c";
  }
  if (password.length <= 6) {
    document.getElementById("falseLoginPassword").classList.remove("hidden");
    document.getElementById("password").style.borderBottom = "1px solid red";
    isCorrect = false;
  } else {
    document.getElementById("falseLoginPassword").classList.add("hidden");
    document.getElementById("password").style.borderBottom =
      "1px solid #3c3c3c";
  }
  return isCorrect;
}
export default validateLogin;

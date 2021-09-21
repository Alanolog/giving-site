function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  console.log("You have entered an invalid email address!");
  return false;
}
export default validateEmail;

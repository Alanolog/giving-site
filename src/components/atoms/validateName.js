function validateName(name) {
  if (name.includes(" ")) {
    return false;
  }
  if (name === "") {
    return false;
  }
  return true;
}
export default validateName;

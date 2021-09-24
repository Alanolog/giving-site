function validateBags(bags) {
  if (bags.length < 1) {
    alert("wybierz liczbe worków!");
    return false;
  } else {
    return true;
  }
}
export default validateBags;

function validationFormVisualPart(
  nameCorrectness,
  emailCorrectness,
  messageCorrectness,
  isPosted
) {
  if (!nameCorrectness) {
    document.getElementById("falseName").classList.remove("hidden");
  } else {
    document.getElementById("falseName").classList.add("hidden");
  }
  if (!emailCorrectness) {
    document.getElementById("falseEmail").classList.remove("hidden");
  } else {
    document.getElementById("falseEmail").classList.add("hidden");
  }
  if (!messageCorrectness) {
    document.getElementById("falseMessage").classList.remove("hidden");
  } else {
    document.getElementById("falseMessage").classList.add("hidden");
  }
  if (isPosted) {
    document.getElementById("succesMessage").classList.remove("hidden");
  } else {
    document.getElementById("succesMessage").classList.add("hidden");
  }
}
export default validationFormVisualPart;

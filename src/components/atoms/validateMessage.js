function validateMessage(message) {
  if (message.length < 120) {
    return false;
  }
  return true;
}
export default validateMessage;

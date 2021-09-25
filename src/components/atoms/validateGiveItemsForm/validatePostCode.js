function validatePostCode(deliveryInfo) {
  let code = deliveryInfo.postCode;

  if (code.length === 6 && code[2] === "-") {
    return true;
  } else {
    return false;
  }
}
export default validatePostCode;

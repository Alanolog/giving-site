function validatePostCode(deliveryInfo) {
  let code = deliveryInfo.postCode;

  if (code.match(/^d{2}-d{3}$/)) {
    return true;
  } else {
    return true;
  }
}
export default validatePostCode;

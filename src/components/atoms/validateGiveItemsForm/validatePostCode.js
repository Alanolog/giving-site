function validatePostCode(deliveryInfo) {
  if (deliveryInfo.postCode.match(/^dd-ddd$/)) {
    return false;
  } else {
    return true;
  }
}
export default validatePostCode;

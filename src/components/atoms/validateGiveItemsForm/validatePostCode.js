function validatePostCode(deliveryInfo) {
  if (deliveryInfo.postCode.match(/^dd-ddd$/)) {
    return true;
  } else {
    return false;
  }
}
export default validatePostCode;

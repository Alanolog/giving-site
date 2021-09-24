function validateCity(deliveryInfo) {
  if (deliveryInfo.postCode.match(/^dd-ddd$/)) {
    return false;
  } else {
    return true;
  }
}
export default validateCity;

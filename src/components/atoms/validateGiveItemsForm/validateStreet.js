function validateStreet(deliveryInfo) {
  if (deliveryInfo.street.length < 2) {
    return false;
  } else {
    return true;
  }
}
export default validateStreet;

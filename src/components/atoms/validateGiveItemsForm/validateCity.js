function validateCity(deliveryInfo) {
  if (deliveryInfo.city.length < 2) {
    return false;
  } else {
    return true;
  }
}
export default validateCity;

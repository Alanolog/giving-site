function validatePhone(deliveryInfo) {
  if (deliveryInfo.phone.length === 9) {
    return true;
  } else {
    return false;
  }
}
export default validatePhone;

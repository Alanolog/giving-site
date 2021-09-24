function validateTime(deliveryInfo) {
  let isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
    deliveryInfo.time
  );
  return isValid;
}
export default validateTime;

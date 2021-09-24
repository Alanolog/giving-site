function validateItemType(itemType) {
  if (itemType === "") {
    alert("zaznacz co chcesz oddać!");
    return false;
  }
  return true;
}
export default validateItemType;

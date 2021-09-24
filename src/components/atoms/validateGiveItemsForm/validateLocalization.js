function validateLocalization(localization, localizationSpecific) {
  if (localizationSpecific !== "") {
    return true;
  }
  if (localization === "") {
    return false;
  } else {
    return true;
  }
}
export default validateLocalization;

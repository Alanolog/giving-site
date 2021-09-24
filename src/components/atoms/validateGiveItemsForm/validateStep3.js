import validateHelpGroups from "./validateHelpGroups";
import validateLocalization from "./validateLocalization";
function validateStep3(object) {
  if (!validateLocalization(object.localization, object.localizationSpecific)) {
    alert("wybierz Lokalizacje!");
    return false;
  }

  if (!validateHelpGroups(object.helpGroups)) {
    alert("wybierz grupy którym chcesz pomóc!");
    return false;
  }
  return true;
}
export default validateStep3;

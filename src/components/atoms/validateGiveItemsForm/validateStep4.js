import validateStreet from "./validateStreet";
import validateCity from "./validateCity";
import validatePostCode from "./validatePostCode";
import validatePhone from "./validatePhone";
import validateTime from "./validateTime";

function validateStep4(deliveryInfo) {
  if (!validateStreet(deliveryInfo)) {
    alert("wpisz poprawną ulice!");
    return false;
  }
  if (!validateCity(deliveryInfo)) {
    alert("wpisz prawidłowe miasto!");
    return false;
  }
  if (!validatePostCode(deliveryInfo)) {
    alert("wpisz prawidłowy kod pocztowy!");
    return false;
  }
  if (!validatePhone(deliveryInfo)) {
    alert("wpisz prawidłowy numer telefonu!");
    return false;
  }
  if (!validateTime(deliveryInfo)) {
    alert("wpisz prawidłową godzine!");
    return false;
  }
  return true;
}
export default validateStep4;

import React from "react";
import clothes from "../../assets/Icon-1.svg";
function GiveItemsFormSummary({
  itemType,
  bags,
  localization,
  helpGroups,
  localizationSpecific,
  deliveryInfo,
}) {
  return (
    <>
      <h2 className="giveItems-form-stepTitle">
        Podsumowanie Twojej darowizny
      </h2>
      <div className="giveItems-form-step-content">
        <div className="giveItems-form-step-content-left">
          <h2>Adres odbioru:</h2>
          <p>
            Ulica <span>{deliveryInfo.street}</span>
          </p>
          <p>
            Miasto <span>{deliveryInfo.city}</span>
          </p>
          <p>
            Kod pocztowy <span>{deliveryInfo.postCode}</span>
          </p>
          <p>
            Numer telefonu <span>{deliveryInfo.phone}</span>
          </p>
        </div>
        <div className="giveItems-form-step-content-right">
          <h2>Termin odbioru:</h2>
          <p>
            Data <span>{deliveryInfo.date}</span>
          </p>
          <p>
            Godzina <span>{deliveryInfo.time}</span>
          </p>
          <p>
            Uwagi dla kuriera <span>{deliveryInfo.note}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default GiveItemsFormSummary;

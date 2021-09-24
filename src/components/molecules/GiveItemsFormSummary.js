import React from "react";
import clothesIcon from "../../assets/Icon-1.svg";
import transportIcon from "../../assets/Icon-4.svg";
function GiveItemsFormSummary({
  itemType,
  bags,
  localization,
  helpGroups,
  localizationSpecific,
  deliveryInfo,
}) {
  let people = [];
  if (helpGroups.includes("kids")) {
    people.push("dzieciom");
  }
  if (helpGroups.includes("disabled people")) {
    people.push("niepełnosprawnym");
  }
  if (helpGroups.includes("elder people")) {
    people.push("osobom starszym");
  }
  if (helpGroups.includes("single mothers")) {
    people.push("samotnym matkom");
  }
  if (helpGroups.includes("homeless")) {
    people.push("bezdomnym");
  }

  return (
    <>
      <h2 className="giveItems-form-stepTitle">
        Podsumowanie Twojej darowizny
      </h2>
      <div className="giveItems-form-summary-items">
        <h5>Oddajesz:</h5>
        <p>
          <img src={clothesIcon} alt="clothes" /> {bags}{" "}
          {bags === "1" ? "worek" : bags === "5" ? "worków" : "worki"},{" "}
          {itemType === "reusable clothes"
            ? "ubrania w dobrym stanie"
            : itemType === "damaged clothes"
            ? "uszkodzone ubrania"
            : itemType === "toys"
            ? "zabawki"
            : itemType === "books"
            ? "książki"
            : itemType === "other"
            ? "inne"
            : null}
          , {people.join(", ")}
        </p>
        <p>
          <img src={transportIcon} alt="transport" /> dla lokalizacji:{" "}
          {localizationSpecific !== "" ? localizationSpecific : localization}
        </p>
      </div>
      <div className="giveItems-form-step-content">
        <div className="giveItems-form-step-content-left">
          <h2>Adres odbioru:</h2>
          <div className="giveItems-form-summary-item">
            <p>Ulica</p>
            <p>{deliveryInfo.street}</p>
          </div>
          <div className="giveItems-form-summary-item">
            <p>Miasto</p>
            <p>{deliveryInfo.city}</p>
          </div>
          <div className="giveItems-form-summary-item">
            <p>
              Kod <br />
              pocztowy
            </p>
            <p>{deliveryInfo.postCode}</p>
          </div>
          <div className="giveItems-form-summary-item">
            <p>
              Numer <br />
              telefonu
            </p>
            <p>{deliveryInfo.phone}</p>
          </div>
        </div>
        <div className="giveItems-form-step-content-right">
          <h2>Termin odbioru:</h2>
          <div className="giveItems-form-summary-item">
            <p>Data</p>
            <p>{deliveryInfo.date}</p>
          </div>
          <div className="giveItems-form-summary-item">
            <p>Godzina</p>
            <p>{deliveryInfo.time}</p>
          </div>
          <div className="giveItems-form-summary-item">
            <p>
              Uwagi <br /> dla kuriera
            </p>
            <p>{deliveryInfo.note}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default GiveItemsFormSummary;

import React, { useState } from "react";
import GiveItemsWarning from "../molecules/GiveItemsWarning";
import GiveItemsFormStep1 from "../molecules/GiveItemsFormStep1";
import GiveItemsFormButton from "../atoms/GiveItemsFormButton";
import GiveItemsFormStep2 from "../molecules/GiveItemsFormStep2";
import GiveItemsFormStep3 from "../molecules/GiveItemsFormStep3";
import GiveItemsFormStep4 from "../molecules/GiveItemsFormStep4";
import GiveItemsFormSummary from "../molecules/GiveItemsFormSummary";
import validateItemType from "../atoms/validateGiveItemsForm/validateItemType";
import validateBags from "../atoms/validateGiveItemsForm/validateBags";
import validateStep3 from "../atoms/validateGiveItemsForm/validateStep3";
import validateStep4 from "../atoms/validateGiveItemsForm/validateStep4";

function GiveItemsForm({ user }) {
  const [currStep, setCurrStep] = useState(1);
  const [itemType, setItemType] = useState("");
  const [bags, setBags] = useState("");
  const [localization, setLocalization] = useState("");
  const [helpGroups, setHelpGroups] = useState([]);
  const [localizationSpecific, setLocalizationSpecific] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState({
    street: "",
    city: "",
    postCode: "",
    phone: "",
    note: "",
    time: "",
    date: "",
  });

  return (
    <>
      {currStep === 1 ? (
        <GiveItemsWarning
          text={
            "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
          }
        />
      ) : currStep === 2 ? (
        <GiveItemsWarning
          text={
            "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcje jak poprawnie spakować rzeczy znajdziesz TUTAJ."
          }
        />
      ) : currStep === 3 ? (
        <GiveItemsWarning
          text={
            "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
          }
        />
      ) : currStep === 4 ? (
        <GiveItemsWarning text={"Podaj adres oraz termin odbioru rzeczy."} />
      ) : null}
      <form className="giveItems-form">
        {currStep === 1 ? (
          <>
            <GiveItemsFormStep1 setItemType={setItemType} itemType={itemType} />
            <div
              style={{
                display: "flex",
                gap: 50,
                position: "absolute",
                bottom: 50,
              }}
            >
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="forward"
                validationFunc={validateItemType}
                validationArgument={itemType}
              />
            </div>
          </>
        ) : currStep === 2 ? (
          <>
            <GiveItemsFormStep2 setBags={setBags} bags={bags} />
            <div
              style={{
                display: "flex",
                gap: 50,
                position: "absolute",
                bottom: 50,
              }}
            >
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="backward"
              />
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="forward"
                validationFunc={validateBags}
                validationArgument={bags}
              />
            </div>
          </>
        ) : currStep === 3 ? (
          <>
            <GiveItemsFormStep3
              localization={localization}
              setLocalization={setLocalization}
              helpGroups={helpGroups}
              setHelpGroups={setHelpGroups}
              localizationSpecific={localizationSpecific}
              setLocalizationSpecific={setLocalizationSpecific}
            />
            <div
              style={{
                display: "flex",
                gap: 50,
                position: "absolute",
                bottom: 50,
              }}
            >
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="backward"
              />
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="forward"
                validationFunc={validateStep3}
                validationArgument={{
                  helpGroups: helpGroups,
                  localization: localization,
                  localizationSpecific: localizationSpecific,
                }}
              />
            </div>
          </>
        ) : currStep === 4 ? (
          <>
            <GiveItemsFormStep4
              deliveryInfo={deliveryInfo}
              setDeliveryInfo={setDeliveryInfo}
            />
            <div
              style={{
                display: "flex",
                gap: 50,
                position: "absolute",
                bottom: 50,
              }}
            >
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="backward"
              />
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="forward"
                validationFunc={validateStep4}
                validationArgument={deliveryInfo}
              />
            </div>
          </>
        ) : currStep === 5 ? (
          <>
            <GiveItemsFormSummary
              deliveryInfo={deliveryInfo}
              localization={localization}
              helpGroups={helpGroups}
              localizationSpecific={localizationSpecific}
              bags={bags}
              itemType={itemType}
            />
            <div
              style={{
                display: "flex",
                gap: 50,
                position: "absolute",
                bottom: 50,
              }}
            >
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="backward"
              />
              <GiveItemsFormButton
                currStep={currStep}
                setCurrStep={setCurrStep}
                direction="accept"
              />
            </div>
          </>
        ) : null}
      </form>
    </>
  );
}
export default GiveItemsForm;

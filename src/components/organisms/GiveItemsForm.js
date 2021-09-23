import React, { useState } from "react";
import GiveItemsWarning from "../molecules/GiveItemsWarning";
import GiveItemsFormStep1 from "../molecules/GiveItemsFormStep1";
import GiveItemsFormButton from "../atoms/GiveItemsFormButton";
import GiveItemsFormStep2 from "../molecules/GiveItemsFormStep2";
import GiveItemsFormStep3 from "../molecules/GiveItemsFormStep3";
function GiveItemsForm({ user }) {
  const [currStep, setCurrStep] = useState(1);
  const [itemType, setItemType] = useState("");
  const [bags, setBags] = useState("");
  const [localization, setLocalization] = useState("");
  const [helpGroups, setHelpGroups] = useState([]);
  const [localizationSpecific, setLocalizationSpecific] = useState("");

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
              />
            </div>
          </>
        ) : null}
      </form>
    </>
  );
}
export default GiveItemsForm;

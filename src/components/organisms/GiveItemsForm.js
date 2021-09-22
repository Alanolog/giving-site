import React, { useState, useEffect } from "react";
import GiveItemsWarning from "../molecules/GiveItemsWarning";
import GiveItemsFormStep1 from "../molecules/GiveItemsFormStep1";
import GiveItemsFormButton from "../atoms/GiveItemsFormButton";
function GiveItemsForm({ user }) {
  const [currStep, setCurrStep] = useState(1);
  const [itemType, setItemType] = useState("");

  return (
    <>
      <GiveItemsWarning
        text={
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        }
      />
      <form className="giveItems-form">
        {currStep === 1 ? (
          <>
            <GiveItemsFormStep1 setItemType={setItemType} />
            <GiveItemsFormButton
              currStep={currStep}
              setCurrStep={setCurrStep}
              direction="forward"
            />
          </>
        ) : null}
      </form>
    </>
  );
}
export default GiveItemsForm;

import React, { useState, useEffect } from "react";
import GiveItemsWarning from "../molecules/GiveItemsWarning";
function GiveItemsForm({ user }) {
  const [currStep, setCurrStep] = useState(1);

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
            <h5 className="giveItems-form-step">Krok 1/4</h5>
          </>
        ) : null}
      </form>
    </>
  );
}
export default GiveItemsForm;

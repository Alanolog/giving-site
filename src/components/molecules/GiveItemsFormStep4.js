import React from "react";
function GiveItemsFormStep4({ deliveryInfo, setDeliveryInfo }) {
  return (
    <>
      <h5 className="giveItems-form-step">Krok 4/4</h5>
      <h2 className="giveItems-form-stepTitle">
        Podaj adres oraz termin odbioru rzecz przez kuriera
      </h2>
      <div className="giveItems-form-step-content">
        <div className="giveItems-form-step-content-left">
          <h2>Adres odbioru:</h2>
          <label>
            Ulica
            <input
              type="text"
              value={deliveryInfo.street}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, street: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="giveItems-form-step-content-right">
          <h2>Termin odbioru:</h2>
        </div>
      </div>
    </>
  );
}
export default GiveItemsFormStep4;

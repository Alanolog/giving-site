import React from "react";
import validateDate from "../atoms/validateGiveItemsForm/validateDate";
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
          <label>
            Miasto
            <input
              type="text"
              value={deliveryInfo.city}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, city: e.target.value });
              }}
            />
          </label>
          <label>
            Kod Pocztowy
            <input
              type="number"
              value={deliveryInfo.postCode}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, postCode: e.target.value });
              }}
            />
          </label>
          <label>
            Numer telefonu
            <input
              type="text"
              value={deliveryInfo.phone}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, phone: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="giveItems-form-step-content-right">
          <h2>Termin odbioru:</h2>
          <label>
            Data
            <input
              type="date"
              id="datefield"
              value={deliveryInfo.date}
              min={validateDate()}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, date: e.target.value });
              }}
            />
          </label>
          <label>
            Godzina
            <input
              type="time"
              value={deliveryInfo.time}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, time: e.target.value });
              }}
            />
          </label>
          <label>
            Uwagi <br />
            dla kuriera
            <textarea
              rows="4"
              value={deliveryInfo.note}
              onChange={(e) => {
                setDeliveryInfo({ ...deliveryInfo, note: e.target.value });
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
}
export default GiveItemsFormStep4;

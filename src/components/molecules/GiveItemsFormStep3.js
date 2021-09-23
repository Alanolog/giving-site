import React from "react";

const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];

function GiveItemsFormStep3({ localization, setLocalization }) {
  return (
    <>
      <h5 className="giveItems-form-step">Krok 2/4</h5>
      <h2 className="giveItems-form-stepTitle">Lokalizacja:</h2>
      <label className="giveItems-form-label-step3">
        <select
          className="select-localization"
          name="bags"
          value={localization}
          onChange={(e) => setLocalization(e.target.value)}
        >
          <option
            value=""
            className="select-localization-option"
            disabled
            selected
            hidden
          >
            ── wybierz ──
          </option>

          {options.map((value, index) => {
            return (
              <option
                className="select-localization-option"
                value={value}
                key={index}
              >
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}
export default GiveItemsFormStep3;

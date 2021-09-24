import React from "react";
function GiveItemsFormStep2({ setBags, bags }) {
  const options = [1, 2, 3, 4, 5];
  return (
    <>
      <h5 className="giveItems-form-step">Krok 2/4</h5>
      <h2 className="giveItems-form-stepTitle">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h2>
      <label className="giveItems-form-label-step2">
        liczba 60l worków:
        <select
          className="select"
          name="bags"
          value={bags}
          onChange={(e) => setBags(e.target.value)}
        >
          <option value="" className="select-option" disabled hidden>
            ── wybierz ──
          </option>

          {options.map((value, index) => {
            return (
              <option className="select-option" value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}
export default GiveItemsFormStep2;

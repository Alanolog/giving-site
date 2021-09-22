import React from "react";
function GiveItemsFormStep2({ setBags, bags }) {
  return (
    <>
      <h5 className="giveItems-form-step">Krok 2/4</h5>
      <h2 className="giveItems-form-stepTitle">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h2>
      <label className="giveItems-form-label-step2">
        liczba 60l worków:
        <select
          name="bags"
          value={bags}
          onChange={(e) => setBags(e.target.value)}
        >
          <option value="" disabled selected hidden>
            ── wybierz ──
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </>
  );
}
export default GiveItemsFormStep2;

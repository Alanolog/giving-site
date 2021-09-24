import React from "react";

const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];

function GiveItemsFormStep3({
  localization,
  setLocalization,
  helpGroups,
  setHelpGroups,
  localizationSpecific,
  setLocalizationSpecific,
}) {
  const changeGroups = function (event) {
    if (event.target.value === undefined) {
      return;
    }
    if (!helpGroups.includes(event.target.value)) {
      event.target.parentElement.style.backgroundColor = "#fad648";
      setHelpGroups([...helpGroups, event.target.value]);
      return;
    } else if (helpGroups.length <= 1) {
      event.target.parentElement.style.backgroundColor = "#fad648";
      setHelpGroups([...helpGroups]);
      return;
    } else {
      event.target.parentElement.style.backgroundColor = "transparent";
      const array = [...helpGroups];
      const index = array.indexOf(event.target.value);
      if (index !== -1) {
        array.splice(index, 1);
      }
      setHelpGroups([...array]);
    }
  };

  return (
    <>
      <h5 className="giveItems-form-step">Krok 3/4</h5>
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
      <div className="giveItems-form-label-step3-small">
        <p>Komu chcesz pomóc?</p>
        <div>
          <label
            onClick={(e) => {
              changeGroups(e);
            }}
          >
            dzieciom
            <input type="checkbox" value="kids" />
          </label>
          <label
            onClick={(e) => {
              changeGroups(e);
            }}
          >
            samotnym matkom
            <input type="checkbox" value="single mothers" />
          </label>
          <label
            onClick={(e) => {
              changeGroups(e);
            }}
          >
            bezdomnym
            <input type="checkbox" value="homeless" />
          </label>
          <label
            onClick={(e) => {
              changeGroups(e);
            }}
          >
            niepełnosprawnym
            <input type="checkbox" value="disabled people" />
          </label>
          <label
            onClick={(e) => {
              changeGroups(e);
            }}
          >
            osobom starszym
            <input type="checkbox" value="elder people" />
          </label>
        </div>
      </div>
      <label className="giveItems-form-label-step3-organisation">
        Wpisz nazwę konkretnej organizacji (opcjonalnie)
        <input
          type="text"
          value={localizationSpecific}
          onChange={(e) => setLocalizationSpecific(e.target.value)}
        />
      </label>
    </>
  );
}
export default GiveItemsFormStep3;

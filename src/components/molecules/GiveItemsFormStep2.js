import React from "react";
import arrowDown from "../../assets/Icon-Arrow-Down.svg";
import arrowUp from "../../assets/Icon-Arrow-Up.svg";

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
        <div
          className="select"
          onClick={(e) => {
            if (e.target.querySelector("ul")) {
              e.target.querySelector("ul").style.display = "flex";
              e.target.style.backgroundImage = `url(${arrowUp})`;
            }
          }}
        >
          <ul>
            {options.map((value, index) => {
              return (
                <li
                  className="select-option"
                  value={value}
                  key={index}
                  onClick={(e) => {
                    setBags(e.target.value);
                    if (e.target.parentElement.style.display !== "none") {
                      e.target.parentElement.style.display = "none";
                      e.target.parentElement.parentElement.style.backgroundImage = `url(${arrowDown})`;
                    }
                  }}
                >
                  {value}
                </li>
              );
            })}
          </ul>
          {bags === "" ? "── wybierz ──" : bags}
        </div>
      </label>
    </>
  );
}
export default GiveItemsFormStep2;

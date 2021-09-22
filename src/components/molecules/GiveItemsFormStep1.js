import React from "react";
function GiveItemsFormStep1({ setItemType }) {
  return (
    <>
      <h5 className="giveItems-form-step">Krok 1/4</h5>
      <h2 className="giveItems-form-stepTitle">Zaznacz co chcesz oddać:</h2>
      <label>
        <input
          type="radio"
          value="reusable clothes"
          name="item to give"
          onChange={(e) => setItemType(e.target.value)}
        />
        ubrania, które nadają się do ponownego użycia
      </label>
      <label>
        <input
          type="radio"
          value="damaged clothes"
          name="item to give"
          onChange={(e) => setItemType(e.target.value)}
        />
        ubrania, do wyrzucenia
      </label>
      <label>
        <input
          type="radio"
          value="toys"
          name="item to give"
          onChange={(e) => setItemType(e.target.value)}
        />
        zabawki
      </label>
      <label>
        <input
          type="radio"
          value="books"
          name="item to give"
          onChange={(e) => setItemType(e.target.value)}
        />
        ksiązki
      </label>
      <label>
        <input
          type="radio"
          value="other"
          name="item to give"
          onChange={(e) => setItemType(e.target.value)}
        />
        inne
      </label>
    </>
  );
}
export default GiveItemsFormStep1;

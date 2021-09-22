import React from "react";
function GiveItemsFormStep1({ setItemType, itemType }) {
  return (
    <>
      <h5 className="giveItems-form-step">Krok 1/4</h5>
      <h2 className="giveItems-form-stepTitle">Zaznacz co chcesz oddać:</h2>
      <label>
        <input
          type="radio"
          value="reusable clothes"
          name="item to give"
          checked={"reusable clothes" === itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
        ubrania, które nadają się do ponownego użycia
      </label>
      <label>
        <input
          type="radio"
          value="damaged clothes"
          name="item to give"
          checked={"damaged clothes" === itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
        ubrania, do wyrzucenia
      </label>
      <label>
        <input
          type="radio"
          value="toys"
          name="item to give"
          checked={"toys" === itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
        zabawki
      </label>
      <label>
        <input
          type="radio"
          value="books"
          name="item to give"
          checked={"books" === itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
        ksiązki
      </label>
      <label>
        <input
          type="radio"
          value="other"
          name="item to give"
          checked={"other" === itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
        inne
      </label>
    </>
  );
}
export default GiveItemsFormStep1;

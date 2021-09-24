import React from "react";
import DecorationLine from "../atoms/DecorationLine";
function GiveItemsFormEndScreen() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "35%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            fontWeight: 300,
            lineHeight: "3.5rem",
          }}
        >
          Dziękujemy za przesłanie formularza <br /> Na maila prześlemy wszelkie{" "}
          <br />
          informacje o odbiorze.
        </h1>
        <DecorationLine />
      </div>
    </>
  );
}
export default GiveItemsFormEndScreen;

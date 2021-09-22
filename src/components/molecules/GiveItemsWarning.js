import React from "react";
function GiveItemsWarning({ text }) {
  return (
    <section className="giveItems-warning">
      <h1>Ważne!</h1>
      <h3>{text}</h3>
    </section>
  );
}
export default GiveItemsWarning;

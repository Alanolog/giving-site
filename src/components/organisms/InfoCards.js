import React from "react";
import ThreeColumns from "../molecules/ThreeColumns";
import FourSteps from "./FourSteps";
function InfoCards(user) {
  return (
    <>
      <ThreeColumns />
      <FourSteps user={user} />
    </>
  );
}
export default InfoCards;

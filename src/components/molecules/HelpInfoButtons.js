import React from "react";
import HelpInfoButton from "../atoms/HelpInfoButton";
function HelpInfoButtons({ changeFunc }) {
  return (
    <div className="help-info-buttons">
      <HelpInfoButton changeFunc={changeFunc} text="Fundacjom" />
      <HelpInfoButton
        changeFunc={changeFunc}
        text="Organizacjom pozarządowym"
      />
      <HelpInfoButton changeFunc={changeFunc} text="Lokalnym zbiórkom" />
    </div>
  );
}
export default HelpInfoButtons;

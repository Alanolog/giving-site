import React from "react";
import HelpInfoButton from "../atoms/HelpInfoButton";
function HelpInfoButtons({ changeFunc }) {
  return (
    <div className="help-info-buttons">
      <HelpInfoButton
        changeFunc={changeFunc}
        value="Foundation"
        text="Fundacjom"
      />
      <HelpInfoButton
        changeFunc={changeFunc}
        value="NGO"
        text="Organizacjom pozarządowym"
      />
      <HelpInfoButton
        changeFunc={changeFunc}
        value="Fundraising"
        text="Lokalnym zbiórkom"
      />
    </div>
  );
}
export default HelpInfoButtons;

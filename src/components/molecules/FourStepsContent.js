import React from "react";
import OneStepContent from "../atoms/OneStepContent";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";
function FourStepsContent() {
  return (
    <div className="four-steps-content">
      <OneStepContent
        imageUrl={icon1}
        heading="Wybierz rzeczy"
        text="ubrania, zabawki, sprzęt i inne"
      />
      <OneStepContent
        imageUrl={icon2}
        heading="Spakuj je"
        text="skorzystaj z worków na śmieci"
      />
      <OneStepContent
        imageUrl={icon3}
        heading="Zdecyduj komu chcesz pomóc"
        text="wybierz zaufane miejsce"
      />
      <OneStepContent
        imageUrl={icon4}
        heading="Zamów kuriera"
        text="kurier przyjedzie w dogodnym terminie"
      />
    </div>
  );
}
export default FourStepsContent;

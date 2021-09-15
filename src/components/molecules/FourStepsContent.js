import React from "react";
import OneStepContent from "../atoms/OneStepContent";
function FourStepsContent() {
  return (
    <div className="four-steps-content">
      <OneStepContent
        imageUrl="../src/assets/Icon-1.svg"
        heading="Wybierz rzeczy"
        text="ubrania, zabawki, sprzęt i inne"
      />
      <OneStepContent
        imageUrl="../src/assets/Icon-2.svg"
        heading="Spakuj je"
        text="skorzystaj z worków na śmieci"
      />
      <OneStepContent
        imageUrl="../src/assets/Icon-3.svg"
        heading="Zdecyduj komu chcesz pomóc"
        text="wybierz zaufane miejsce"
      />
      <OneStepContent
        imageUrl="../src/assets/Icon-4.svg"
        heading="Zamów kuriera"
        text="kurier przyjedzie w dogodnym terminie"
      />
    </div>
  );
}
export default FourStepsContent;

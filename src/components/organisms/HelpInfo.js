import React, { useState } from "react";
import HelpInfoHeader from "../molecules/HelpInfoHeader";
import HelpInfoButtons from "../molecules/HelpInfoButtons";
import HelpInfoFoundations from "../molecules/HelpInfoFoundations";
function HelpInfo() {
  const [option, setOption] = useState("Foundation");
  return (
    <section className="help-info" name="help-info">
      <HelpInfoHeader />
      <HelpInfoButtons changeFunc={setOption} />
      {option === "Foundation" ? <HelpInfoFoundations /> : null}
    </section>
  );
}
export default HelpInfo;

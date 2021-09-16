import React, { useState } from "react";
import HelpInfoHeader from "../molecules/HelpInfoHeader";
import HelpInfoButtons from "../molecules/HelpInfoButtons";
function HelpInfo() {
  const [option, setOption] = useState("Foundation");
  return (
    <section className="help-info">
      <HelpInfoHeader />
      <HelpInfoButtons changeFunc={setOption} />
    </section>
  );
}
export default HelpInfo;

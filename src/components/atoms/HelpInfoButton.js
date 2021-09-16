import React from "react";
function HelpInfoButton({ changeFunc, text }) {
  return (
    <>
      <button className="help-info-button" onClick={() => changeFunc()}>
        {text}
      </button>
    </>
  );
}
export default HelpInfoButton;

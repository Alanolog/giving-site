import React from "react";
function HelpInfoButton({ changeFunc, text, value }) {
  return (
    <>
      <button
        className="help-info-button"
        onClick={(e) => {
          e.preventDefault();
          changeFunc(value);
        }}
      >
        {text}
      </button>
    </>
  );
}
export default HelpInfoButton;

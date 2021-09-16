import React from "react";
function HelpInfoContentButton({ pageNumber, setOption }) {
  return (
    <button
      className="help-info-content-button"
      onClick={(e) => {
        e.preventDefault();
        setOption(pageNumber);
      }}
    >
      {pageNumber}
    </button>
  );
}
export default HelpInfoContentButton;

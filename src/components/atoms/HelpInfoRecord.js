import React from "react";
function HelpInfoRecord({ title, description, type }) {
  return (
    <div className="help-info-content-record">
      <div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <p className="help-info-content-record-type">{type}</p>
    </div>
  );
}
export default HelpInfoRecord;

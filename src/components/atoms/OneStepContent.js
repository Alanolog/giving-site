import React from "react";
function OneStepContent({ imageUrl, heading, text }) {
  return (
    <div className="four-steps-content-item">
      <img src={imageUrl} alt="icon" />
      <h5>{heading}</h5>
      <hr></hr>
      <p>{text}</p>
    </div>
  );
}
export default OneStepContent;

import React from "react";
function OneOfThreeColumn({ header, title, text }) {
  return (
    <div className="columns-box-1-of-3">
      <h2>{header}</h2>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}
export default OneOfThreeColumn;

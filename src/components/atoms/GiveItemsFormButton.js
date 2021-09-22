import React from "react";
function GiveItemsFormButton({ currStep, setCurrStep, direction }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        direction === "forward"
          ? setCurrStep(++currStep)
          : setCurrStep(--currStep);
      }}
    >
      {direction === "forward" ? "Dalej" : "Wstecz"}
    </button>
  );
}
export default GiveItemsFormButton;

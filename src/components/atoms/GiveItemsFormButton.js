import React from "react";
function GiveItemsFormButton({
  currStep,
  setCurrStep,
  direction,
  validationFunc,
  validationArgument,
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (direction === "backward") {
          setCurrStep(--currStep);
          return;
        }
        if (validationFunc(validationArgument)) {
          if (direction === "forward" || direction === "accept") {
            setCurrStep(++currStep);
          }
        }
      }}
    >
      {direction === "forward"
        ? "Dalej"
        : direction === "accept"
        ? "Potwierdzam"
        : "Wstecz"}
    </button>
  );
}
export default GiveItemsFormButton;

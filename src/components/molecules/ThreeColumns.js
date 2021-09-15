import React from "react";
import OneOfThreeColumn from "../atoms/OneOfThreeColumn";
function ThreeColumns() {
  return (
    <div className="columns-box">
      <OneOfThreeColumn
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        title="Oddanych worków"
        header="10"
      />
      <OneOfThreeColumn
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        title="Wspartych organizacji"
        header="5"
      />
      <OneOfThreeColumn
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        title="Zorganizowanych Zbiórek"
        header="7"
      />
    </div>
  );
}
export default ThreeColumns;

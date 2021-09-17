import React from "react";
import HelpInfoRecord from "../atoms/HelpInfoRecord";
function HelpInfoFundraising() {
  return (
    <main className="help-info-content">
      <h4 className="help-info-content-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </h4>
      <div className="help-info-content-records">
        <>
          <HelpInfoRecord
            title={"Zbiórka “Lorem Ipsum 1”"}
            description={
              "Quis varius quam quisque id diam vel quam elementum pulvinar."
            }
            type={"Egestas, sed, tempus"}
          />
          <HelpInfoRecord
            title={"Zbiórka “Lorem Ipsum 2”"}
            description={
              "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
            }
            type={"Ut, aliquam, purus, sit, amet"}
          />
          <HelpInfoRecord
            title={"Zbiórka “Lorem Ipsum 3”"}
            description={"Scelerisque in dictum non consectetur a erat nam."}
            type={"Mi, quis, hendrerit, dolor"}
          />
        </>
      </div>
    </main>
  );
}
export default HelpInfoFundraising;

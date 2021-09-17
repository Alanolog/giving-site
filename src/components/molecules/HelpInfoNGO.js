import React, { useState } from "react";
import HelpInfoRecord from "../atoms/HelpInfoRecord";
import HelpInfoContentButton from "../atoms/HelpInfoContentButton";
function HelpInfoNGO() {
  const [option, setOption] = useState(1);
  return (
    <main className="help-info-content">
      <h4 className="help-info-content-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </h4>
      <div className="help-info-content-records">
        {option === 1 ? (
          <>
            <HelpInfoRecord
              title={"Organizacja “Lorem Ipsum 1”"}
              description={
                "Quis varius quam quisque id diam vel quam elementum pulvinar."
              }
              type={"Egestas, sed, tempus"}
            />
            <HelpInfoRecord
              title={"Organizacja “Lorem Ipsum 2”"}
              description={
                "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
              }
              type={"Ut, aliquam, purus, sit, amet"}
            />
            <HelpInfoRecord
              title={"Organizacja “Lorem Ipsum 3”"}
              description={"Scelerisque in dictum non consectetur a erat nam."}
              type={"Mi, quis, hendrerit, dolor"}
            />
          </>
        ) : option === 2 ? (
          <>
            <HelpInfoRecord
              title={"Organizacja “Lorem Ipsum 4”"}
              description={"Scelerisque in dictum non consectetur a erat nam."}
              type={"Ut, aliquam, purus, sit, amet"}
            />
            <HelpInfoRecord
              title={"Organizacja “Lorem Ipsum 5”"}
              description={"Scelerisque in dictum non consectetur a erat nam."}
              type={"Egestas, sed, tempus"}
            />
          </>
        ) : null}
      </div>
      <div>
        <HelpInfoContentButton pageNumber={1} setOption={setOption} />
        <HelpInfoContentButton pageNumber={2} setOption={setOption} />
      </div>
    </main>
  );
}
export default HelpInfoNGO;

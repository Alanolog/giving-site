import React from "react";
import FourStepsHeader from "../molecules/FourStepsHeader";
import FourStepsContent from "../molecules/FourStepsContent";
import Button from "../atoms/Button";
import { BrowserRouter as Router } from "react-router-dom";
function FourSteps() {
  return (
    <section className="four-steps" name="four-steps">
      <FourStepsHeader />
      <FourStepsContent />
      <Router>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          <Button text="Oddaj Rzeczy" link="/logowanie" />
        </div>
      </Router>
    </section>
  );
}
export default FourSteps;

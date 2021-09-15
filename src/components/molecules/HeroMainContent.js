import React from "react";
import HeroButton from "../atoms/HeroButton";
import { BrowserRouter as Router } from "react-router-dom";
function HeroMainContent() {
  return (
    <div className="hero-box-right-content">
      <h1>
        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="hero-box-right-content-image" />
      <div className="hero-box-right-btns">
        <Router>
          <HeroButton text="Oddaj Rzeczy" />
          <HeroButton text="Zorganizuj Zbiórkę" />
        </Router>
      </div>
    </div>
  );
}
export default HeroMainContent;

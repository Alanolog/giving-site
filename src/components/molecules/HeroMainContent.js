import React from "react";
import HeroButton from "../atoms/HeroButton";
import DecorationLine from "../atoms/DecorationLine";
import { BrowserRouter as Router } from "react-router-dom";
function HeroMainContent() {
  return (
    <div className="hero-box-right-content">
      <h1>
        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <DecorationLine />
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

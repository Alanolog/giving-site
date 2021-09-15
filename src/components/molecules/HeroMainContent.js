import React from "react";
import Button from "../atoms/Button";
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
          <Button text="Oddaj Rzeczy" link="/logowanie" />
          <Button text="Zorganizuj Zbiórkę" link="/logowanie" />
        </Router>
      </div>
    </div>
  );
}
export default HeroMainContent;

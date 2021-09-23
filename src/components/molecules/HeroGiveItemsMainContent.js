import React from "react";
import DecorationLine from "../atoms/DecorationLine";
import HeroGiveItemsDiamond from "../atoms/HeroGiveItemsDiamond";
function HeroGiveItemsMainContent() {
  return (
    <div className="hero-box-right-content heroGiveItems-box-right-content">
      <h1>
        Oddaj rzeczy, których już nie chcesz <br />{" "}
        <p style={{ textTransform: "uppercase" }}>potrzebującym</p>
      </h1>
      <DecorationLine />
      <h2>Wystarczą 4 proste kroki:</h2>
      <div className="heroGiveItems-diamond-box">
        <HeroGiveItemsDiamond counter={1} text="Wybierz rzeczy" />
        <HeroGiveItemsDiamond counter={2} text="Spakuj je w worki" />
        <HeroGiveItemsDiamond counter={3} text="Wybierz fundację" />
        <HeroGiveItemsDiamond counter={4} text="Zamów kuriera" />
      </div>
    </div>
  );
}
export default HeroGiveItemsMainContent;

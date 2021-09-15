import React from "react";
import Header from "../molecules/Header";
import HeroMainContent from "../molecules/HeroMainContent";
function Hero() {
  return (
    <div className="hero-box">
      <div className="hero" />
      <div className="hero-box-right">
        <Header />
        <HeroMainContent />
      </div>
    </div>
  );
}
export default Hero;

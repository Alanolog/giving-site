import React from "react";
import Header from "../molecules/Header";
import HeroMainContent from "../molecules/HeroMainContent";
function Hero() {
  return (
    <section className="hero-box" name="hero">
      <div className="hero" />
      <div className="hero-box-right">
        <Header />
        <HeroMainContent />
      </div>
    </section>
  );
}
export default Hero;

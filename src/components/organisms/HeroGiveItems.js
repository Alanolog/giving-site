import React from "react";
import Header from "../molecules/Header";
import HeroGiveItemsMainContent from "../molecules/HeroGiveItemsMainContent";
function HeroGiveItems({ user }) {
  return (
    <section className="hero-box" name="hero">
      <div className="heroGiveItems" />
      <div className="hero-box-right">
        <Header user={user} />
        <HeroGiveItemsMainContent user={user} />
      </div>
    </section>
  );
}
export default HeroGiveItems;

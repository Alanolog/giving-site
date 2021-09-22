import React from "react";
import Header from "../molecules/Header";
import HeroGiveItemsMainContent from "../molecules/HeroGiveItemsMainContent";
function HeroGiveItems({ user, setUser }) {
  return (
    <section className="hero-box" name="hero">
      <div className="heroGiveItems" />
      <div className="hero-box-right">
        <Header user={user} setUser={setUser} />
        <HeroGiveItemsMainContent user={user} />
      </div>
    </section>
  );
}
export default HeroGiveItems;

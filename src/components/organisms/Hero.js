import React, { useEffect } from "react";
import Header from "../molecules/Header";
import HeroMainContent from "../molecules/HeroMainContent";
function Hero({ user, setUser }) {
  useEffect(() => {}, [user]);
  return (
    <section className="hero-box" name="hero">
      <div className="hero" />
      <div className="hero-box-right">
        <Header user={user} setUser={setUser} />
        <HeroMainContent user={user} />
      </div>
    </section>
  );
}
export default Hero;

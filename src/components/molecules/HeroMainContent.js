import React from "react";
import Button from "../atoms/Button";
import DecorationLine from "../atoms/DecorationLine";
function HeroMainContent({ user }) {
  return (
    <div className="hero-box-right-content">
      <h1>
        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <DecorationLine />
      <div className="hero-box-right-btns">
        {user ? (
          <>
            <Button text="Oddaj Rzeczy" link="/oddaj-rzeczy" />
            <Button text="Zorganizuj Zbiórkę" link="/oddaj-rzeczy" />
          </>
        ) : (
          <>
            <Button text="Oddaj Rzeczy" link="/logowanie" />
            <Button text="Zorganizuj Zbiórkę" link="/logowanie" />
          </>
        )}
      </div>
    </div>
  );
}
export default HeroMainContent;

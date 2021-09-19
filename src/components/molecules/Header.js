import React from "react";
import Menu from "./Menu";
import LoginButton from "../atoms/LoginButton";
import SignUpButton from "../atoms/SignUpButton";
function Header() {
  return (
    <>
      <header className="header__box">
        <div className="header__signinbox">
          <LoginButton />
          <SignUpButton />
        </div>
        <Menu />
      </header>
    </>
  );
}
export default Header;

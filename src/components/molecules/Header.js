import React from "react";
import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";
import LoginButton from "../atoms/LoginButton";
import SignUpButton from "../atoms/SignUpButton";
function Header() {
  return (
    <>
      <header className="header__box">
        <div className="header__signinbox">
          <Router>
            <LoginButton />
            <SignUpButton />
          </Router>
        </div>
        <Menu />
      </header>
    </>
  );
}
export default Header;

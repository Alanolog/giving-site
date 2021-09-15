import React from "react";
import { Link } from "react-router-dom";
function LoginButton() {
  return (
    <Link to="/logowanie" className="header__signinbox-button">
      Zaloguj
    </Link>
  );
}
export default LoginButton;

import React from "react";
import { Link } from "react-router-dom";
function SignUpButton() {
  return (
    <Link to="/rejestracja" className="header__signinbox-button">
      Załóż konto
    </Link>
  );
}
export default SignUpButton;

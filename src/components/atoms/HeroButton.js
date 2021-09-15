import React from "react";
import { Link } from "react-router-dom";
function HeroButton({ text }) {
  return (
    <Link to="/logowanie" className="btn">
      {text}
    </Link>
  );
}
export default HeroButton;

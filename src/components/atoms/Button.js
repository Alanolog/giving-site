import React from "react";
import { Link } from "react-router-dom";
function Button({ text, link }) {
  return (
    <Link to={link} className="btn">
      {text}
    </Link>
  );
}
export default Button;

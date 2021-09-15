import React from "react";
import { Link } from "react-scroll";
function MenuItem({ text, location }) {
  return (
    <Link to={location} smooth={true} duration={300} className="menu__item">
      {text}
    </Link>
  );
}
export default MenuItem;

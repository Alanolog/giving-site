import React from "react";
function MenuItem({ text }) {
  return (
    <a href="google.com" className="menu__item">
      {text}
    </a>
  );
}
export default MenuItem;

import React from "react";
import MenuItem from "../atoms/MenuItem";
function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuItem text={"Start"} location={"hero"} />
        <MenuItem text={"O co chodzi?"} location={"four-steps"} />
        <MenuItem text={"O nas"} location={"about-us"} />
        <MenuItem text={"Fundacja i organizacje"} location={"help-info"} />
        <MenuItem text={"Kontakt"} location={"Contact"} />
      </nav>
    </>
  );
}
export default Menu;

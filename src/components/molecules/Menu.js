import React from "react";
import MenuItem from "../atoms/MenuItem";
function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuItem text={"Start"} location={"hero"} />
        <MenuItem text={"O co chodzi?"} location={"four-steps"} />
        <MenuItem text={"O nas"} location={"about-us"} />
        <MenuItem text={"Fundacja i organizacje"} location={""} />
        <MenuItem text={"Kontakt"} location={""} />
      </nav>
    </>
  );
}
export default Menu;

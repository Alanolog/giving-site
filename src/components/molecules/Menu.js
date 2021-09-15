import React from "react";
import MenuItem from "../atoms/MenuItem";
function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuItem text={"Start"} location={""} />
        <MenuItem text={"O co chodzi?"} location={""} />
        <MenuItem text={"O nas"} location={""} />
        <MenuItem text={"Fundacja i organizacje"} location={""} />
        <MenuItem text={"Kontakt"} location={""} />
      </nav>
    </>
  );
}
export default Menu;

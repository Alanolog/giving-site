import React from "react";
import MenuItem from "../atoms/MenuItem";
function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuItem text={"Start"} />
        <MenuItem text={"O co chodzi?"} />
        <MenuItem text={"O nas"} />
        <MenuItem text={"Fundacja i organizacje"} />
        <MenuItem text={"Kontakt"} />
      </nav>
    </>
  );
}
export default Menu;

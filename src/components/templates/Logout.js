import React from "react";
import Header from "../molecules/Header";
import LogoutContent from "../molecules/LogoutContent";
function Logout({ setUser }) {
  return (
    <>
      <Header setUser={setUser} />
      <LogoutContent />
    </>
  );
}
export default Logout;

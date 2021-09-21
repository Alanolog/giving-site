import React from "react";
import Header from "../molecules/Header";
import RegisterContent from "../organisms/RegisterContent";
function Register({ setUser }) {
  return (
    <>
      <Header />
      <RegisterContent setUser={setUser} />
    </>
  );
}
export default Register;

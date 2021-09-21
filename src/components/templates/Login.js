import React from "react";
import Header from "../molecules/Header";
import LoginContent from "../organisms/LoginContent";
function Login({ setUser }) {
  return (
    <>
      <Header />
      <LoginContent setUser={setUser} />
    </>
  );
}
export default Login;

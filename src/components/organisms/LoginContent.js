import React from "react";
import DecorationLine from "../atoms/DecorationLine";
import LoginForm from "../molecules/LoginForm";
function LoginContent({ setUser }) {
  return (
    <main className="login-content">
      <h1>Zaloguj się</h1>
      <DecorationLine />
      <LoginForm setUser={setUser} />
    </main>
  );
}
export default LoginContent;

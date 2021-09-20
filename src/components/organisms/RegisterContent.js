import React from "react";
import DecorationLine from "../atoms/DecorationLine";
import RegisterForm from "../molecules/RegisterForm";
function RegisterContent() {
  return (
    <main className="register-content">
      <h1>Załóż konto</h1>
      <DecorationLine />
      <RegisterForm />
    </main>
  );
}
export default RegisterContent;

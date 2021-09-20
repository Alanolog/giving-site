import React, { useState } from "react";
import { Link } from "react-router-dom";
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <form className="register-form">
      <div className="register-content-form-box">
        <label htmlFor="email">
          Email
          <p id="falseRegisterEmail" className="hidden">
            Podany email jest nieprawidłowy!
          </p>
          <input
            id="email"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Hasło
          <p id="falseRegisterPassword" className="hidden">
            Podane hasło jest za krótkie lub hasła nie są takie same!
          </p>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Powtórz Hasło
          <p id="falseRegisterPassword2" className="hidden">
            Podane hasło jest za krótkie lub hasła nie są takie same!
          </p>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>
      </div>
      <div className="register-buttons-box">
        <Link className="register-button" to="/logowanie">
          Zaloguj się
        </Link>
        <button
          className="register-button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Załóż Konto
        </button>
      </div>
    </form>
  );
}
export default RegisterForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import validateLogin from "../atoms/validateLogin";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="login-form">
      <div className="login-content-form-box">
        <label htmlFor="email">
          Email
          <p id="falseLoginEmail" className="hidden">
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
          <p id="falseLoginPassword" className="hidden">
            Podane hasło jest za krótkie!
          </p>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="login-buttons-box">
        <Router className="register-router">
          <Link className="login-button" to="/rejestracja">
            Załóż konto
          </Link>
        </Router>
        <button
          className="login-button"
          onClick={(e) => {
            e.preventDefault();
            validateLogin(email, password);
          }}
        >
          Zaloguj się
        </button>
      </div>
    </form>
  );
}
export default LoginForm;

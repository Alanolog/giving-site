import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="login-form">
      <div className="login-content-form-box">
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Hasło
          <input
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
        <button className="login-button" onClick={(e) => e.preventDefault()}>
          Zaloguj się
        </button>
      </div>
    </form>
  );
}
export default LoginForm;

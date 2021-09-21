import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import validateLogin from "../atoms/validateLogin";
import login from "../atoms/login";
function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (isLogged) {
    }
  }, [isLogged]);
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
        <Link className="login-button" to="/rejestracja">
          Załóż konto
        </Link>
        <button
          className="login-button"
          onClick={(e) => {
            e.preventDefault();
            if (validateLogin(email, password)) {
              login(email, password, setUser, setIsLogged);
            }
          }}
        >
          Zaloguj się
        </button>
      </div>
    </form>
  );
}
export default LoginForm;

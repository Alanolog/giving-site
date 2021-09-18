import React from "react";
function LoginForm() {
  return (
    <form>
      <div className="login-content-form-box">
        <label htmlFor="email">
          Email
          <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Hasło
          <input type="password" name="password" />
        </label>
      </div>
    </form>
  );
}
export default LoginForm;

import React from "react";
import DecorationLine from "../atoms/DecorationLine";
import { Link } from "react-router-dom";
function LogoutContent() {
  return (
    <main className="logout-content">
      <h1>Wylogowanie nastąpiło pomyślnie!</h1>
      <DecorationLine />
      <Link className="logout-button" to="/">
        Strona główna
      </Link>
    </main>
  );
}
export default LogoutContent;

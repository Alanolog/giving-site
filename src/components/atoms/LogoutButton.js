import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function LogoutButton({ setUser }) {
  return (
    <Link
      to="/wylogowano"
      className="header__logout-button"
      onClick={() => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            setUser(false);
            console.log("wylogowano");
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    >
      Wyloguj
    </Link>
  );
}
export default LogoutButton;

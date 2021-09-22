import React, { useEffect } from "react";
import Menu from "./Menu";
import LoginButton from "../atoms/LoginButton";
import SignUpButton from "../atoms/SignUpButton";
import LogoutButton from "../atoms/LogoutButton";
import GiveItemsButton from "../atoms/GiveItemsButton";
function Header({ user }) {
  useEffect(() => {}, [user]);
  return (
    <>
      <header className="header__box">
        <div className="header__signinbox">
          {user ? (
            <>
              <p>Cześć {user.email}!</p>
              <GiveItemsButton />
              <LogoutButton />
            </>
          ) : (
            <>
              <LoginButton />
              <SignUpButton />
            </>
          )}
        </div>
        <Menu />
      </header>
    </>
  );
}
export default Header;

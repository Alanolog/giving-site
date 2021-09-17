import React from "react";
import facebookLogo from "../../assets/Facebook.svg";
import instagramLogo from "../../assets/Instagram.svg";
function Footer() {
  return (
    <footer className="footer">
      <p>Copyright by Coders Lab</p>
      <div className="footer-img-box">
        <img src={facebookLogo} alt="facebook logo" />
        <img src={instagramLogo} alt="instagram logo" />
      </div>
    </footer>
  );
}
export default Footer;

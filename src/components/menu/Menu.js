import React from "react";
import "./menu.css";
import logo from "../pictures/stox-logo.png";
import bag from "../pictures/shoppingcart.png";

export default function Menu(props) {
  const { openMenu, setOpenMenu } = props;
  return (
    <div className="navbarWrapper">
      <div id="menuToggle">
        <input type="checkbox" onClick={() => setOpenMenu(!openMenu)} />

        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logoWrapper">
        <div className="logos">
          <img src={logo} alt="logo" className="stoxLogo" />
          <img src={bag} alt="shopping bag" className="shoppingLogo" />
        </div>
      </div>
    </div>
  );
}

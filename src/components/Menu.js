import React from "react";
import "./Menu.css";
import logo from "./stox-logo.png";
import shoppingBag from "./pngtree-vector-shopping-bag-icon-png-image_695384.jpg";

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
          <img src={shoppingBag} alt="shopping bag" className="shoppingLogo" />
        </div>
      </div>
    </div>
  );
}

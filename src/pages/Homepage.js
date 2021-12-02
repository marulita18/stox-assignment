import React from "react";
import { useState } from "react";
import Menu from "../components/menu/Menu";
import MenuOpenContent from "../components/menuOpenContent/MenuOpenContent";
import picture from "../../src/components/pictures/main-picture.png";
import "./homepage.css";

export default function Homepage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {openMenu ? (
        <MenuOpenContent />
      ) : (
        <img src={picture} alt="main" className="homepageImage" />
      )}
    </div>
  );
}

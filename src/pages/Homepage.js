import React from "react";
import { useState } from "react";
import Menu from "../components/Menu";
import MenuOpenContent from "../components/MenuOpenContent";

export default function Homepage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {openMenu ? <MenuOpenContent /> : "display nothing"}
    </div>
  );
}

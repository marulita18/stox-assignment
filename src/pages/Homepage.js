import React from "react";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Homepage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {openMenu ? "display this" : "display nothing"}
    </div>
  );
}

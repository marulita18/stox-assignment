import React, { useState } from "react";
import "./accordion.css";

export default function Accordion(props) {
  const [open, setOpen] = useState(false);
  const { item } = props;

  return (
    <div className="accordionWrapper">
      <div className="titleWrapper" onClick={() => setOpen(!open)}>
        <h1 className="accordionTitle">{item.title.toUpperCase()}</h1>
        <span>arrow</span>
      </div>
      {open && (
        <div>
          {item.submenus.map((submenu) => {
            return (
              <div className="submenuItem">
                <p>{submenu.article.toUpperCase()}</p>
                <span>{submenu.amount} products</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

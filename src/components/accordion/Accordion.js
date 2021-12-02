import React, { useState } from "react";
import "./accordion.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion(props) {
  const [open, setOpen] = useState(false);
  const { item } = props;

  return (
    <div className="accordionWrapper">
      <div className="titleWrapper" onClick={() => setOpen(!open)}>
        <h1 className="accordionTitle">{item.title.toUpperCase()}</h1>

        <span>{open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
      </div>
      {open && (
        <div>
          {item.submenus.map((submenu, i) => {
            return (
              <div className="submenuItem" key={i}>
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

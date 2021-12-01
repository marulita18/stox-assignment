import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Daily</li>
            </a>
            <a href="#">
              <li>Sports</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

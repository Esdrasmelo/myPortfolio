import { useState } from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import { HEADER_LINKS } from "../../utils/constants";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="mobile-header">
        <button className="open-menu" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </button>
        <nav className={isOpen ? "opened" : ""}>
          <button className="close-menu" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </button>
          <ul>
            {HEADER_LINKS.map((item) => (
              <NavLink to={item.href} key={item.href}>
                <li>{item.label}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <div
          className={`mobile-header-overlay ${isOpen ? "opened" : ""}`}
          onClick={() => setIsOpen(false)}
        />
      </header>
    </>
  );
}

export default MobileHeader;

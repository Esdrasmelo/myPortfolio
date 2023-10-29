import { HEADER_LINKS } from "../../utils/constants";
import "./styles.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="desktop-header">
      <nav>
        <ul>
          {HEADER_LINKS.map((item) => (
            <NavLink to={item.href} key={item.href}>
              <li>{item.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

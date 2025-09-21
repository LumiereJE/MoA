import React from "react";
import { headerNavi } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

interface NavMoveProps {
  isOpen: boolean;
  onClose: () => void;
}

const Nav: React.FC<NavMoveProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  console.log(location);

  return (
    <nav className={`header_nav ${isOpen ? "open" : ""}`}>
      <ul className="navi">
        {headerNavi.map((navi, key) => (
          <li
            key={key}
            className={location.pathname === navi.src ? "active" : ""}
          >
            <Link to={navi.src} onClick={onClose} className="link_css">
              {navi.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

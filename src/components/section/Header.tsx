import React, { useState } from "react";

import Logo from "../header/Logo";
import Search from "../header/Search";
import Nav from "../header/Nav";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header id="header" role="banner" className={isMenuActive ? "active" : ""}>
      <div className="header_top">
        <Logo toggleMenu={toggleMenu} />
        <Search />
      </div>
      <Nav />
    </header>
  );
};

export default Header;

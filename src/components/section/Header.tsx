import React, { useState } from "react";
import HamBtn from "../header/HamBtn";
import Logo from "../header/Logo";
import Search from "../header/Search";
import Nav from "../header/Nav";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log("s");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header id="header" role="banner">
      <div className="header_top">
        <div className="logo_box">
          <HamBtn onClick={toggleNav} />
          <Logo />
        </div>
        <Search />
      </div>
      <Nav isOpen={isOpen} onClose={handleClose} />
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  toggleMenu: () => void;
}

const Logo: React.FC<LogoProps> = ({ toggleMenu }) => {
  return (
    <div>
      <Link to="/">
        <em area-hidden="true" onClick={toggleMenu}></em>
        <span>MoA</span>
      </Link>
    </div>
  );
};

export default Logo;

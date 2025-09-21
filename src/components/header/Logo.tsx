import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header_logo">
      <Link to="/">
        <em area-hidden="true"></em>
        <span>MoA</span>
      </Link>
    </div>
  );
};

export default Logo;

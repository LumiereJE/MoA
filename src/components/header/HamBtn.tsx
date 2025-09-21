import React from "react";
import { useState } from "react";

interface HamBtnProps {
  onClick?: () => void;
}

const HamBtn: React.FC<HamBtnProps> = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    if (onClick) onClick();
  };

  return (
    <button className={`ham_Btn ${open ? "open" : ""}`} onClick={toggleMenu}>
      <p className="bar"></p>
      <p className="bar"></p>
      <p className="bar"></p>
    </button>
  );
};

export default HamBtn;

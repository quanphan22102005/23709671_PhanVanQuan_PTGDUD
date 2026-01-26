import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div>
      <header className="header">
        <h3>{title}</h3>
      </header>
    </div>
  );
};

export default Header;

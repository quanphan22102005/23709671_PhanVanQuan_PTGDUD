import React from "react";
import "./Footer.css";

const Footer = ({ title }) => {
  return (
    <div>
      <footer className="footer">
        <h3>{title}</h3>
      </footer>
    </div>
  );
};

export default Footer;

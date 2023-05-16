import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>&copy; {new Date().getFullYear()}</h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header>
      <a href="https://instagram.com" className="instaLink">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <h1 className="title">John Doe Photography</h1>
      <div className="menuBox" tabIndex="0">
        <div className="line" id="topLine"></div>
        <div className="line" id="bottomLine"></div>
      </div>
    </header>
  );
}

export default Header;

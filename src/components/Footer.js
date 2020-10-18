import React from "react";
import { ScrollBars } from "./ComponentArrays";
function Footer({ ui }) {
  return (
    <footer>
      <div className="scrollIndicate">{ScrollBars}</div>

      <h2 className="currentStyleTitle">{ui.title}</h2>

      <div className="emailContianer">
        <h3 className="email">JohnDoe@gmail.com</h3>
      </div>
    </footer>
  );
}

export default Footer;
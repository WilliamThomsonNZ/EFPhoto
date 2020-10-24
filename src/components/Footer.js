import React from "react";
import AlbumCount from "./AlbumCount";
function Footer({ ui, count }) {
  return (
    <footer>
      <AlbumCount count={count} />
      <div className="titleContainer">
        <h2 className="currentStyleTitle">{ui.title}</h2>
      </div>
      <div className="emailContianer">
        <h3 className="email">JohnDoe@gmail.com</h3>
      </div>
    </footer>
  );
}

export default Footer;

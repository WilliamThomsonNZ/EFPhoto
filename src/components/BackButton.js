import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/">
      <button className="backButton">&larr; Back</button>
    </Link>
  );
}

export default BackButton;

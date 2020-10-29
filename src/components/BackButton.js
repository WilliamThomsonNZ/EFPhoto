import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/">
      <button className="backButton">Back</button>
    </Link>
  );
}

export default BackButton;

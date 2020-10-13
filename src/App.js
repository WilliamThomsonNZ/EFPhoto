import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [background, setBackground] = useState(
    "https://source.unsplash.com/random/1600x900"
  );

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faCoffee} />
        </a>
        <h1 className="title">John Doe Photography</h1>
        <div>Menu</div>
      </header>
      <main></main>
    </div>
  );
}

export default App;

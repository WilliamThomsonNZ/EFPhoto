import React, { useRef, useState } from "react";
import { moveMultiArr, moveMultiIndex } from "move-position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import PhotoCard from "./components/PhotoCard";
import "./App.css";
import { faHandHolding } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [background, setBackground] = useState(
    "https://source.unsplash.com/random/1600x900"
  );
  const [photoCardArr, setPhotoCardArr] = useState([
    <PhotoCard rotate={"10deg"} bg={"purple"} key={1} />,
    <PhotoCard rotate={"-10deg"} bg={"green"} key={2} />,
    <PhotoCard rotate={"15deg"} bg={"teal"} key={3} />,
    <PhotoCard rotate={"-5deg"} bg={"pink"} key={4} />,
  ]);

  const titles = ["SURF", "SNOW", "TRAVEL", "BRAND"];
  const [title, setTitle] = useState(titles[0]);

  const handleNext = () => {
    const movingMap = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 0 },
    ];

    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
  };
  const handlePrev = () => {
    const movingMap = [
      { from: 0, to: 3 },
      { from: 1, to: 0 },
      { from: 2, to: 1 },
      { from: 3, to: 2 },
    ];
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
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
        <main>
          <div className="insideContainer">
            <button className="prevBtn btns" onClick={handlePrev}>
              Prev
            </button>
            <div className="cards">{photoCardArr}</div>
            <button className="nextBtn btns" onClick={handleNext}>
              Next
            </button>
          </div>
        </main>
        <footer>
          <div className="scrollIndicate">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <h2 className="currentStyleTitle">{title}</h2>

          <div className="emailContianer">
            <h3 className="email">JohnDoe@gmail.com</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

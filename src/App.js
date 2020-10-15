import React, { useEffect, useState } from "react";
import { moveMultiIndex } from "move-position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { UI } from "./components/UI";
import { PhotoCards, ScrollBars } from "./components/ComponentArrays";
import "./App.css";

function App() {
  const [photoCardArr, setPhotoCardArr] = useState(PhotoCards);
  const [scrollBarArr, setScrollBarArr] = useState(ScrollBars);
  const [count, setCount] = useState(0);
  const [ui, setUi] = useState(UI[count]);

  const handleNext = () => {
    const movingMap = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 0 },
    ];
    if (count >= 3) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
    console.log(count);
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
  };
  useEffect(() => {
    setUi(UI[count]);
  }, [count]);

  const handlePrev = () => {
    const movingMap = [
      { from: 0, to: 3 },
      { from: 1, to: 0 },
      { from: 2, to: 1 },
      { from: 3, to: 2 },
    ];
    if (count <= 0) {
      setCount(3);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
    console.log(scrollBarArr);
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
    setScrollBarArr(moveMultiIndex(scrollBarArr, movingMap));
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${ui.bg})` }}>
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
          <div className="scrollIndicate">{ScrollBars}</div>

          <h2 className="currentStyleTitle">{ui.title}</h2>

          <div className="emailContianer">
            <h3 className="email">JohnDoe@gmail.com</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

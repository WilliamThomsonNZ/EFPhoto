import React, { useState, useEffect } from "react";
import { ScrollBars } from "./ComponentArrays";
import { UI } from "./UI";
import { moveMultiIndex } from "move-position";
import Footer from "./Footer";
import PhotoCard from "./PhotoCard";

const photoCards = [
  { rotate: "10deg", bg: "purple", id: "brand" },
  { rotate: "-10deg", bg: "green", id: "travel" },
  { rotate: "15deg", bg: "teal", id: "snow" },
  { rotate: "-5deg", bg: "pink", id: "surf" },
];

function Main({
  countProp,
  uiProp,
  album,
  handleAlbumChange,
  albumActive,
  setAlbumActive,
}) {
  const { count, setCount } = countProp;
  const { ui, setUi } = uiProp;
  const [photoCardArr, setPhotoCardArr] = useState(photoCards);
  const [scrollBarArr, setScrollBarArr] = useState(ScrollBars);
  useEffect(() => {
    setUi(UI[count]);
  }, [count]);

  useEffect(() => {
    setCount(0);
    setAlbumActive(false);
  }, []);

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
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
  };
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
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));
    setScrollBarArr(moveMultiIndex(scrollBarArr, movingMap));
  };
  return (
    <div>
      <main>
        <div className="insideContainer">
          <button className="prevBtn btns" onClick={handlePrev}>
            Prev
          </button>
          <div className="cards">
            {photoCardArr.map((card, index) => {
              return (
                <PhotoCard
                  rotate={card.rotate}
                  bg={card.bg}
                  key={index}
                  id={card.id}
                  handleAlbumChange={handleAlbumChange}
                  album={album}
                  albumActive={albumActive}
                />
              );
            })}
          </div>
          <button className="nextBtn btns" onClick={handleNext}>
            Next
          </button>
        </div>
      </main>
      <Footer ui={ui} />
    </div>
  );
}

export default Main;

import React, { useState, useEffect } from "react";
import { ScrollBars } from "./ComponentArrays";
import { UI } from "./UI";
import { moveMultiIndex } from "move-position";
import Footer from "./Footer";
import PhotoCard from "./PhotoCard";
import { TweenMax, Power3, TimelineLite } from "gsap";

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
  var myTween = new TimelineLite({ paused: true });

  useEffect(() => {
    setUi(UI[count]);
  }, [count]);

  useEffect(() => {
    setCount(0);
    setAlbumActive(false);
  }, []);

  const handleNext = () => {
    myTween
      .to(".currentStyleTitle", {
        y: -200,
        duration: 0.5,
      })
      .to(".currentStyleTitle", {
        y: 300,
        duration: 0.0001,
      })
      .play();
    const movingMap = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 0 },
    ];
    setTimeout(() => {
      if (count >= 3) {
        setCount(0);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 700);

    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));

    TweenMax.fromTo(
      ".background",
      { backgroundColor: "rgba(0,0,0,0)" },
      { backgroundColor: "rgba(0,0,0,0.8)", duration: 1, delay: 1 }
    );
    TweenMax.to(".currentStyleTitle", {
      y: 0,
      duration: 0.5,
      delay: 0.7,
    });
  };
  const handlePrev = () => {
    myTween
      .to(".currentStyleTitle", {
        y: -200,
        duration: 0.5,
      })
      .to(".currentStyleTitle", {
        y: 300,
        duration: 0.0001,
      })
      .play();

    const movingMap = [
      { from: 0, to: 3 },
      { from: 1, to: 0 },
      { from: 2, to: 1 },
      { from: 3, to: 2 },
    ];
    setTimeout(() => {
      if (count <= 0) {
        setCount(3);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 700);
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));

    TweenMax.to(".currentStyleTitle", {
      y: 0,
      duration: 0.5,
      delay: 0.7,
    });
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

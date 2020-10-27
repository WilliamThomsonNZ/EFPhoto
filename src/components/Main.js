import React, { useState, useEffect } from "react";
import { ScrollBars } from "../utils/ComponentArrays";
import { UI } from "./UI";
import { moveMultiIndex } from "move-position";
import Footer from "./Footer";
import PhotoCard from "./PhotoCard";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { MainPhotos } from "../photos/MainPhotos";
import { motion } from "framer-motion";
import myTween from "../utils/gsap";
import IntroAnimation from "./IntroAnimation";
import { useLocalStorage } from "../utils/useLocalStorage";
import { debounce } from "../utils/debounce";

const photoCards = [
  { rotate: "7deg", bg: MainPhotos[2], id: "brand", current: "hello" },
  { rotate: "-7deg", bg: MainPhotos[3], id: "travel", current: "current" },
  { rotate: "12deg", bg: MainPhotos[1], id: "snow", current: "current" },
  { rotate: "-3deg", bg: MainPhotos[0], id: "surf", current: "currentCard" },
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
  var myTween = new TimelineLite({ paused: true });

  useEffect(() => {
    setUi(UI[count]);
  }, [count, setUi]);

  useEffect(() => {
    setCount(0);
    setAlbumActive(false);
  }, []);

  const handleNext = () => {
    myTween
      .to(".currentStyleTitle", {
        y: -200,
        opacity: 0,
        duration: 0.4,
      })

      .to(".currentStyleTitle", {
        y: 200,
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
    }, 300);
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));

    TweenMax.to(".currentStyleTitle", {
      y: 0,
      opacity: 1,
      duration: 0.45,
      delay: 0.65,
    });
  };
  const handlePrev = () => {
    myTween
      .to(".currentStyleTitle", {
        y: -200,
        opacity: 0,
        duration: 0.4,
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
    }, 300);
    setPhotoCardArr(moveMultiIndex(photoCardArr, movingMap));

    TweenMax.to(".currentStyleTitle", {
      y: 0,
      opacity: 1,
      duration: 0.45,
      delay: 0.65,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      key="main"
    >
      <main>
        <div className="insideContainer">
          <motion.button
            className="prevBtn btns"
            onClick={debounce(handlePrev, 350)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Prev
          </motion.button>
          <motion.div
            className="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
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
                  current={card.current}
                />
              );
            })}
          </motion.div>
          <motion.button
            className="nextBtn btns"
            onClick={debounce(handleNext, 350)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Next
          </motion.button>
        </div>
      </main>
      <Footer ui={ui} count={count} />
    </motion.div>
  );
}

export default Main;

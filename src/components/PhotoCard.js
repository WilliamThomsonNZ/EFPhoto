import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlbumType } from "../utils/ComponentArrays";
import { motion } from "framer-motion";

function PhotoCard({ bg, rotate, id, handleAlbumChange, current }) {
  const [selected, setSelected] = useState(false);
  let style = {
    backgroundImage: `url(${bg})`,
    transform: `rotate(${rotate})`,
  };

  const handleClick = (e) => {
    const targetAlbum = e.target.id;
    const selectedAlbum = AlbumType.find((type) => type.id === targetAlbum);
    setTimeout(() => {
      handleAlbumChange(selectedAlbum);
    }, 1000);

    setSelected(true);
  };

  return (
    <Link to="/album">
      <div
        style={
          !selected
            ? style
            : { backgroundImage: `url(${bg})`, transform: "rotate(0deg)" }
        }
        className={`photoCard ${current}`}
        onClick={handleClick}
        id={id}
      ></div>
    </Link>
  );
}

export default PhotoCard;

import React, { useContext } from "react";
import AlbumContext from "../contexts/AlbumContext";
import { AlbumType } from "./ComponentArrays";

function PhotoCard({ bg, rotate, id }) {
  // const { album, setAlbum } = useContext(AlbumContext);
  const style = {
    background: bg,
    transform: `rotate(${rotate})`,
  };

  const handleClick = (e) => {
    const targetAlbum = e.target.id;
    const selectedAlbum = AlbumType.find((id) => id === targetAlbum);
  };
  return (
    <div
      style={style}
      className="photoCard"
      onClick={handleClick}
      id={id}
    ></div>
  );
}

export default PhotoCard;

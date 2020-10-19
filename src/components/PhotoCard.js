import React from "react";
import { Link } from "react-router-dom";
import { AlbumType } from "./ComponentArrays";

function PhotoCard({ bg, rotate, id, handleAlbumChange }) {
  const style = {
    background: bg,
    transform: `rotate(${rotate})`,
  };

  const handleClick = (e) => {
    const targetAlbum = e.target.id;
    const selectedAlbum = AlbumType.find((type) => type.id === targetAlbum);
    handleAlbumChange(selectedAlbum);
  };
  return (
    <Link to="/album">
      <div
        style={style}
        className="photoCard"
        onClick={handleClick}
        id={id}
      ></div>
    </Link>
  );
}

export default PhotoCard;

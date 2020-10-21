import React from "react";
import BackButton from "./BackButton";
import Photo from "./Photo";
function Album({ album }) {
  console.log(album);
  return (
    <div className="albumBody">
      <h2 className="albumTitle">{album.id}</h2>
      <BackButton />
      <div className="albumGrid">
        {album.photos.map((photo, index) => (
          <Photo url={photo.url} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Album;

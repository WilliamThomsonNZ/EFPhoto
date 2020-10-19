import React from "react";

function Album({ album }) {
  console.log(album);
  return (
    <div>
      <h2>{album.id}</h2>
    </div>
  );
}

export default Album;

import React from "react";

function AlbumCount({ count }) {
  return (
    <div className="albumCount">
      <h3>0{String(count + 1)}</h3>
      <div className="progressBar"></div>
      <h3>04</h3>
    </div>
  );
}

export default AlbumCount;

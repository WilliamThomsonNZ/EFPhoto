import React from "react";

function Photo({ url, index }) {
  return (
    <div
      className={`albumPhoto albumPhoto${index}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default Photo;

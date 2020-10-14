import React from "react";

function PhotoCard(props) {
  const { bg, rotate } = props;
  const style = {
    background: bg,
    transform: `rotate(${rotate})`,
  };
  return <div style={style} className="photoCard"></div>;
}

export default PhotoCard;

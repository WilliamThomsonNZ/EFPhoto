import React from "react";
import { motion } from "framer-motion";

const ModalImg = ({ url, modal }) => {
  const handleExit = (e) => {
    if (e.target.className === "outerModal") {
      modal.current.style.opcaity = 0;
      modal.current.style.display = "none";
    }
  };
  return (
    <div className="outerModal" ref={modal} onClick={handleExit}>
      <div
        className="photoModal"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className="photoInfo">
        <span>Location:</span>
        <span>A600</span>
        <span>01 05 2020</span>
      </div>
    </div>
  );
};

export default ModalImg;

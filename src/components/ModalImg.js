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
          position: "absolute",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "block",
          width: "40%",
          height: "70%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      ></div>
      <div className="photoInfo"></div>
    </div>
  );
};

export default ModalImg;

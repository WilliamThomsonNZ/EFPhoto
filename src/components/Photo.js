import { AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import ModalImg from "./ModalImg";

function Photo({ url, index }) {
  const modal = useRef();
  const showLargeImage = () => {
    modal.current.style.display = "block";
    modal.current.style.opacity = 1;
  };
  return (
    <>
      <div
        className={`albumPhoto albumPhoto${index}`}
        onClick={showLargeImage}
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <AnimatePresence exitBeforeEnter>
        <ModalImg modal={modal} url={url} />
      </AnimatePresence>
    </>
  );
}

export default Photo;

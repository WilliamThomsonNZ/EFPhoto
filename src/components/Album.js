import React from "react";
import BackButton from "./BackButton";
import Photo from "./Photo";
import { motion } from "framer-motion";
function Album({ album }) {
  console.log(album);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="albumBody"
    >
      <BackButton />
      <h2 className="albumTitle">{album.id}</h2>

      <div className="albumGrid">
        {album.photos.map((photo, index) => (
          <Photo url={photo.url} key={index} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Album;

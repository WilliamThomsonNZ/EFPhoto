import React from "react";
import AlbumCount from "./AlbumCount";
import { motion } from "framer-motion";

function Footer({ ui, count }) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AlbumCount count={count} />
      <div className="titleContainer">
        <h2 className="currentStyleTitle">{ui.title}</h2>
      </div>
      <div className="emailContianer">
        <a href="mailto:erin@efphoto.co.nz">
          <h3 className="email">erin@efphoto.co.nz</h3>
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;

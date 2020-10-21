import { faDivide } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import CountTo from "react-count-to";

function IntroAnimation() {
  const fn = (value) => <span>%{value}</span>;
  return (
    <div className="introAnimation">
      <div className="introText">
        <h3>Just digging up my albums</h3>
      </div>
      <div className="counter">
        <CountTo to={100} speed={1000}>
          {fn}
        </CountTo>
      </div>
    </div>
  );
}

export default IntroAnimation;

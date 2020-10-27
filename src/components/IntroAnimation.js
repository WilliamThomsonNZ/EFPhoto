import React, { useEffect, useState } from "react";
import { TimelineLite, TweenMax } from "gsap";

function IntroAnimation() {
  var myTween = new TimelineLite({ paused: true });

  useEffect(() => {
    myTween
      .fromTo(
        ".introTextH3",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1.5,
        }
      )
      .to(".introAnimation", {
        opacity: 0,
        duration: 0.7,
        display: "none",
        delay: 1.8,
      })
      .play();
  }, []);

  return (
    <div className="introAnimation">
      <div className="introText">
        <h3 className="introTextH3">Just digging out my albums</h3>
      </div>
    </div>
  );
}

export default IntroAnimation;

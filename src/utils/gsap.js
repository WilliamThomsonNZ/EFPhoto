import { TweenMax, Power3, TimelineLite } from "gsap";

var myTween = new TimelineLite({ paused: true });

export default myTween
  .to(".currentStyleTitle", {
    y: -200,
    duration: 0.5,
  })
  .to(".currentStyleTitle", {
    y: 300,
    duration: 0.0001,
  });

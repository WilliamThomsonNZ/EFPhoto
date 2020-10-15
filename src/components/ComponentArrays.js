import React from "react";
import PhotoCard from "./PhotoCard";
import ScrollBar from "./ScrollBar";

export const PhotoCards = [
  <PhotoCard rotate={"10deg"} bg={"purple"} key={1} />,
  <PhotoCard rotate={"-10deg"} bg={"green"} key={2} />,
  <PhotoCard rotate={"15deg"} bg={"teal"} key={3} />,
  <PhotoCard rotate={"-5deg"} bg={"pink"} key={4} />,
];

export const ScrollBars = [
  <ScrollBar key={1} />,
  <ScrollBar selected={"selected"} key={2} />,
  <ScrollBar key={3} />,
  <ScrollBar key={4} />,
];

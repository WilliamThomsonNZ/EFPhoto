import React from "react";
import PhotoCard from "./PhotoCard";
import ScrollBar from "./ScrollBar";

export const PhotoCards = [
  <PhotoCard rotate={"10deg"} bg={"purple"} key={1} id={"brand"} />,
  <PhotoCard rotate={"-10deg"} bg={"green"} key={2} id={"travel"} />,
  <PhotoCard rotate={"15deg"} bg={"teal"} key={3} id={"snow"} />,
  <PhotoCard rotate={"-5deg"} bg={"pink"} key={4} id={"surf"} />,
];

export const ScrollBars = [
  <ScrollBar key={1} selected={"selected"} path="/surf" />,
  <ScrollBar key={2} path="/snow" />,
  <ScrollBar key={3} path="/travel" />,
  <ScrollBar key={4} path="/brand" />,
];

export const AlbumType = [
  { bg: "blue", id: "surf" },
  { bg: "green", id: "snow" },
  { bg: "yellow", id: "travel" },
  { bg: "purple", id: "brand" },
];

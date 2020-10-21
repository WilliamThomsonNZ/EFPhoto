import React from "react";
import { SnowArray } from "../photos/SnowArray";
import ScrollBar from "./ScrollBar";

export const ScrollBars = [
  <ScrollBar key={1} selected={"selected"} path="/surf" />,
  <ScrollBar key={2} path="/snow" />,
  <ScrollBar key={3} path="/travel" />,
  <ScrollBar key={4} path="/brand" />,
];

export const AlbumType = [
  { bg: "blue", id: "surf" },
  { bg: "green", id: "snow", photos: [...SnowArray] },
  { bg: "yellow", id: "travel" },
  { bg: "purple", id: "brand" },
];

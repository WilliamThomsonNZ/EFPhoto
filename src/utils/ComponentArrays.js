import React from "react";
import { SnowArray } from "../photos/SnowArray";

export const AlbumType = [
  { bg: "blue", id: "surf" },
  { bg: "green", id: "snow", photos: [...SnowArray] },
  { bg: "yellow", id: "travel", photos: [...SnowArray] },
  { bg: "purple", id: "brand", photos: [...SnowArray] },
];

import { MVTLayer } from "deck.gl/typed";
import { useState } from "react";

export const MVT = () => {
  return new MVTLayer({
    id: "base-map",
    data: [
      "http://localhost:8080/maps/bonn/{z}/{x}/{y}.vector.pbf?",
    ],

    getFillColor: (f) => {
      // "water",
      // "landcover",
      // "landuse",
      // "transportation",
      // "building",
      // "mountain_peak",
      // "place",
      // "poi",
      // "transportation_name",
      // "aerodrome_label",
      // "park",
      // "aeroway",
      // "water_name"

      switch (f.properties.layerName) {
        case "poi":
          return [255, 0, 0];
        case "water":
          return [120, 150, 180];
        case "building":
          return [218, 218, 218];
        default:
          return [240, 240, 240];
      }
    },
    getLineColor: [240, 12, 240],
    getLineWidth: (f) => {
      switch (f.properties.class) {
        case "street":
          return 6;
        case "motorway":
          return 10;
        default:
          return 1;
      }
    },
    lineWidthMinPixels: 1,

    pointRadiusUnits: "pixels",
    // pointType: 'circle',
    stroked: false,
    maxzoom: 14,
    minzoom: 0,
  });
};

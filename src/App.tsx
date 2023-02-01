import { useState } from "react";
import "./App.css";
import DeckGL, { LayersList, LineLayer, MVTLayer } from "deck.gl/typed";
import { Line } from "./Layers/line";
import { MVT } from "./Layers/mvt";
import { Tile } from "./Layers/tile";
import { Polygon } from "./Layers/polygon";
import { Point } from "./Layers/points";
import StaticMap from "react-map-gl";
import green_style from "./assets/carto_with_osm.json";
import mystyle from "./assets/empty_style.json";
import { usePosition } from "./usePosition";
import { useGeolocated } from "react-geolocated";
import { GPSPoint } from "./Layers/gpsPoint";

const INITIAL_VIEW_STATE = {
  longitude: 5.313,
  latitude: 60.382,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

function App() {
  const layers: LayersList = [
    // MVT(),
    // Tile(),
    Line(),
    // Polygon(),
    // Point(),
    //GPSPoint()
  ];

  return (
    <div className="App">
      <DeckGL
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        {/* <StaticMap mapStyle={mystyle}/> */}
      </DeckGL>
    </div>
  );
}

export default App;

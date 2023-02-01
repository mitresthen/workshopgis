import { TileLayer, BitmapLayer } from "deck.gl/typed";

export type GeoBoundingBox = {
  west: number;
  north: number;
  east: number;
  south: number;
};
export type NonGeoBoundingBox = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export const Tile = () =>
  new TileLayer({
    data: `https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}`,
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,

    renderSubLayers: (layerProps) => {
      const {
        //@ts-ignore
        bbox: { west, south, east, north },
      } = layerProps.tile;

      return new BitmapLayer(layerProps, {
        data: null,
        image: layerProps.data,
        bounds: [west, south, east, north],
      });
    },
  });

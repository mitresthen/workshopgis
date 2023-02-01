import { LineLayer } from "deck.gl/typed";

const data = [
  {
    sourcePosition: [5.313, 60.382],
    targetPosition: [5.313, 60.392],
  },
  {
    sourcePosition: [5.313, 60.392],
    targetPosition: [5.323, 60.392],
  },
  {
    sourcePosition: [5.323, 60.392],
    targetPosition: [5.313, 60.382],
  },
];

export const Line = () =>
  new LineLayer({ id: "line-layer", data, getColor: [255, 0, 0] });

import { SolidPolygonLayer } from "deck.gl/typed";

const data = [
  {
    polygon: [
      [5.313, 60.382],
      [5.313, 60.392],
      [5.323, 60.392],
    ],
  },
];

export const Polygon = () => {
  return new SolidPolygonLayer({
    /*
     * Data format:
     * [
     *   {polygon: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]},   // Simple polygon (array of coords)
     *   {polygon: [                                            // Complex polygon with one hole
     *     [[0, 0], [0, 2], [2, 2], [2, 0], [0, 0]],            // (array of array of coords)
     *     [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]
     *   ]}
     * ]
     */
    data,
    getPolygon: (d) => d.polygon,
    getFillColor: [0, 0, 255],
    getColor: [255, 0, 0],
    extruded: false,
  });
};

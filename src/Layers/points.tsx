import { ScatterplotLayer } from "deck.gl/typed"
import { z } from "zod";
import sykler from '../data/bysykler.json';

const StationType = z.object({
    station_id: z.string(),
    name: z.string(),
    address: z.string(),
    rental_uris: z.object({
        android: z.string(),
        iod: z.string()
    }),
    lat: z.number(),
    lon: z.number(),
    capacity: z.number()
});

export type StationType = z.infer<typeof StationType>;

export const Point = () => {
    return new ScatterplotLayer<StationType>({
        id: "cycle-layer",
        data: sykler.data.stations,
        getPosition: (d) => [d.lon, d.lat],
        getRadius: (d) => d.capacity,
        onClick: (d) => console.log("You clicked", d.object),
        getFillColor: [255, 0, 0],
        pickable: true
    })
}
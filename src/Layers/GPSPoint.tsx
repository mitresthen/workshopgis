import { Layer, ScatterplotLayer } from "deck.gl/typed";
import { useGeolocated } from "react-geolocated";

export const GPSPoint = (): Layer => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });

  return new ScatterplotLayer<GeolocationCoordinates>(
    {
      id: "gps-point",
      data: [coords],
      getPosition: (d) => [d.longitude, d.latitude],
      getRadius: 50,
      getFillColor: [120, 240, 120]
    }
  )

}
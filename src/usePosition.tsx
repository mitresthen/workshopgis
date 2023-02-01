import { useEffect, useState } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState<GeolocationPosition>();

  if (!("geolocation" in navigator)) {
    throw Error("no geolocation");
  }

  function success(position: GeolocationPosition) {
    setPosition(position)
  }

  function error() {
    console.log("no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(success, error, options);

    return (() => 
        navigator.geolocation.clearWatch(watchID)
    )
  })
  return position;
};

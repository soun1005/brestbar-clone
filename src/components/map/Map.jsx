import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.MAP_TOKEN;

const Map = ({ barsData }) => {
  // default states
  // Next, you will create some defaults for your app to use for the initial latitude, longitude, and zoom of the map
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-4.49);
  const [lat, setLat] = useState(48.389999);
  const [zoom, setZoom] = useState(9);

  // The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
  // Next, initialize the map. The following code will be invoked right after the app is inserted into the DOM tree of your HTML page.
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // styles => https://docs.mapbox.com/api/maps/styles/#mapbox-styles
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    barsData.forEach(({ location }) => {
      const [lon, lat] = location.coordinates;
      new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map.current);
    });
  });

  return (
    <div
      ref={mapContainer}
      className="!absolute top-0 left-0 h-screen w-screen bg-gray-secondary"
    ></div>
  );
};

export default Map;

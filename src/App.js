import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheWt1bWFyMjMiLCJhIjoiY2x4NzN6MDl3MXlhcjJub213eXowZDJqcyJ9.O33RsaaRIe8JrTgkVMrFmQ';

const coordinates = [
  [76.500015, 31.499993],
  [82.499985, 27.500008],
  [79.199992, 32.199987],
  [74.800003, 28.320006],
  [81.500012, 30.500002],
  [79.499998, 31.500007],
  [78.499994, 33.499995],
  [75.500006, 27.500003],
  [77.500004, 30.500006],
  [79.500001, 31.499997]
];

const UserInfo = () => {
  return (
    <div>
      <h1>User Info</h1>
    </div>
  );
}

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(79.75);
  const [lat, setLat] = useState(29.81);
  const [zoom, setZoom] = useState(6);



  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    coordinates.forEach((coord, idx) => {
      const el = document.createElement("div");
      el.className = "custom-marker";
      var nameParagraph = document.createElement("p");
      var designationParagraph = document.createElement("p");
      var cityParagraph = document.createElement("p");

      nameParagraph.className = "marker-para";
      designationParagraph.className = "marker-para";
      cityParagraph.className = "marker-para";

      // Set text content for each paragraph
      nameParagraph.textContent = "Ajay Yadav " + idx;
      designationParagraph.textContent = "Software Engineer";
      cityParagraph.textContent = "Goa";

      // Append paragraphs to the div
      el.appendChild(nameParagraph);
      el.appendChild(designationParagraph);
      el.appendChild(cityParagraph);


    //   new mapboxgl.Marker({
    //     color: "#000FFF",
    //     draggable: true
    // })
    new mapboxgl.Marker(el)
      .setLngLat(coord)
      .addTo(map.current);

      // createRoot(el).render(<FaCar className="text-green-400" size={20} />);
  
    })

  //   const marker = new mapboxgl.Marker({
  //     color: "#000FFF",
  //     draggable: true
  // })
  //   .setLngLat([79.5, 30.5])
  //   .addTo(map.current);

  //   const marker2 = new mapboxgl.Marker({
  //     color: "#F00FFF",
  //     draggable: true
  // })
  //   .setLngLat([79.8, 30.5])
  //   .addTo(map.current);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
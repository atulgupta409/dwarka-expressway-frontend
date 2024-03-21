import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationMap = () => {
  const position = [28.416004165053156, 76.90607719320217];

  return (
    <div>
      <div>
        <h2 className="project_headings">M3M Crown on Google Map</h2>
        <p className="map_location">Sector 111, Dwarka Expressway, Gurgaon</p>
      </div>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Landmark Avana</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;

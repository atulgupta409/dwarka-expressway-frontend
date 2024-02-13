import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationMap = () => {
  const position = [28.416004165053156, 76.90607719320217];

  return (
    <div className="container main_container">
      <div>
        <h2 className="best_project_heading">
          Ganga Realty Nandaka Location Map
        </h2>
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
      <div class="row advantages_highlights">
        <div class="col-md-6">
          <h4>
            Location <span>Advantages</span>
          </h4>
          <div class="location-advantage feature_content">
            <ul>
              <li>
                Ganga Realty Nandaka can be found in Sector-84, Gurgaon, which
                is conveniently situated near NH 8, Manesar Toll, and Hyatt
                Hotel.
              </li>
              <li>
                It is just a 7-minute drive away from IMT Manesar and offers
                easy connectivity to IGI Airport.
              </li>
              <li>
                The vicinity also boasts of prominent hospitals such as Metro
                Hospital and Columbia Asia Hospital.
              </li>
              <li>
                There are several renowned schools in the area, including Green
                Field Public School, Royal Oak International School, GEMS
                International School, and Shanti Niketan Public School.
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <h4>
            Location <span>Highlights</span>
          </h4>
          <div class="highlight feature_content">
            <ul>
              <li>
                Luxury Residential Project located in Sector-106 Gurgaon
                presents an exquisite collection of 3 and 4 BHK Apartments.
              </li>
              <li>
                These apartments boast floor sizes ranging from 1383 to 2366
                sq.ft., providing ample space for comfortable living.
              </li>
              <li>
                Spanning 10.5 Acres, this project offers a grandeur living
                experience. With 7 Dedicated Sports Arenas, residents can
                indulge in various sports activities.
              </li>
              <li>
                The elegant glass facade adds a touch of sophistication to the
                project. Additionally, residents can enjoy a relaxing time in
                the indoor heated pool with Jacuzzi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

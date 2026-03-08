import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapPage.css";

const MapPage = () => {
  const position = [-6.200000, 106.816666]; // Jakarta

  return (
    <div className="map-page">
      <h1 className="map-title">Peta Hospital</h1>

      <div className="map-wrapper">
        <MapContainer
          center={position}
          zoom={13}
          className="leaflet-map"
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              RS Hummatech <br /> Jakarta
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;

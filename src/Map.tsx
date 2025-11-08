import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import type { IFeeds } from "./types";

interface IMapProps {
  feeds: IFeeds;
}

const Map: React.FC<IMapProps> = ({ feeds }) => {
  const position = [51.505, -0.09] as LatLngTuple;
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }} // ⬅️ this is key
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {feeds.map((feed) => {
        const currentPosition = feed.assetLocation
          .split(", ")
          .map((value) => parseFloat(value.trim())) as LatLngTuple;
        return (
          <Marker position={currentPosition}>
            <Popup>{JSON.stringify(feed)}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

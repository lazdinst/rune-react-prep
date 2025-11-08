import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import type { IFeeds } from "./types";
import { getLatLangFromAssetLocation } from "./utils";

interface IMapProps {
  feeds: IFeeds;
}

const getCenterFromFeeds = (feeds: IFeeds): LatLngTuple => {
  if (!feeds.length) return [51.505, -0.09];

  const coords = feeds.map((feed) =>
    getLatLangFromAssetLocation(feed.assetLocation)
  );

  const avgLat = coords.reduce((sum, [lat]) => sum + lat, 0) / coords.length;
  const avgLng = coords.reduce((sum, [, lng]) => sum + lng, 0) / coords.length;

  return [avgLat, avgLng];
};

const Map: React.FC<IMapProps> = ({ feeds }) => {
  if (!feeds.length) return null;
  const center = getCenterFromFeeds(feeds);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {feeds.map((feed) => {
        const currentPosition = getLatLangFromAssetLocation(feed.assetLocation);
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

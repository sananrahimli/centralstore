// components/Map.js
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';


const Map = ({ companies, center }) => {
  const mapRef = useRef(null);

  const UpdateMapCenter = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.setView(center, 14); // Zoom level 14, adjust as needed
      }
    }, [center, map]);
    return null;
  };

  return (
    <MapContainer center={[40.4093, 49.8671]} zoom={12} style={{ height: '500px', width: '100%' }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {companies.map((company) => (
        <Marker key={company.id} position={[company.latitude, company.longitude]}>
          <Popup>
                <h3 className="text-lg text-defCol4">{company.name}</h3>
                <div className="">
                    <p className="text-sm font-extralight text-gray-500 m-0 p-0">Ünvan:</p>
                    <p className="text-md text-gray-800 pl-2 m-0 p-0">{company.address}</p>
                </div>
                <div className="">
                    <p className="text-sm font-extralight text-gray-500">Əlaqə:</p>
                    <p className="text-md text-gray-800 pl-2">{company.phone}</p>
                </div>
                <Link href="./goods">
                    <span>
                        Məshullara bax
                    </span>
                </Link>
          </Popup>
        </Marker>
      ))}
      <UpdateMapCenter center={center} />
    </MapContainer>
  );
};

export default Map;

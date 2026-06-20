"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapComponent() {
  // FIXED: Explicitly typed as an exact 2-element tuple [number, number] to make TypeScript happy
  const position: [number, number] = [35.736566, 10.583042];

  return (
    <div className="w-full h-full relative [filter:hue-rotate(200deg)_brightness(0.6)_contrast(1.2)_saturate(0.75)]">
      {/* The inline Tailwind filter rule directly above shifts the base map colors:
      */}
      <MapContainer
        center={position}
        zoom={15} 
        scrollWheelZoom={false} 
        dragging={false} 
        zoomControl={false} 
        doubleClickZoom={false} 
        touchZoom={false} 
        boxZoom={false} 
        keyboard={false} 
        style={{ height: "100%", width: "100%", minHeight: "400px" }}
      >
        {/* Switched to CartoDB Voyager tiles which blend land/water paths beautifully for color filtering */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors & CARTO'
        />

        {/* Single Fixed Marker */}
        <Marker position={position}>
          <Popup>
            <strong className="text-gray-900">Ingénieur PC - Msaken</strong><br />
            <span className="text-gray-600">Sousse, Tunisie</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
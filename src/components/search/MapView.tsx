"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/types";
import { formatPrice } from "@/lib/utils/format-price";

interface MapViewProps {
  properties: Property[];
  center?: [number, number];
}

export function MapView({ properties, center }: MapViewProps) {
  const mapCenter: [number, number] = center || [
    properties[0]?.coordinates.lat || 21.0285,
    properties[0]?.coordinates.lng || 105.8527,
  ];

  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <MapContainer
        center={mapCenter}
        zoom={14}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.coordinates.lat, property.coordinates.lng]}
          >
            <Popup>
              <div style={{ minWidth: "200px", fontFamily: "Inter, sans-serif" }}>
                <p style={{ fontWeight: 600, fontSize: "14px" }}>{property.titleVi}</p>
                <p style={{ fontSize: "12px", color: "#6b7280" }}>{property.address}</p>
                <p style={{ fontWeight: 600, fontSize: "14px", color: "#924a34", marginTop: "4px" }}>
                  {formatPrice(property.pricePerNight)} / đêm
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

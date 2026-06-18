"use client";

import dynamic from "next/dynamic";
import type { Property } from "@/types";

interface LocationMapProps {
  property: Property;
}

const MapView = dynamic(
  () => import("@/components/search/MapView").then((m) => m.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-surface-container rounded-xl flex items-center justify-center">
        <span className="text-on-surface-variant">Loading map...</span>
      </div>
    ),
  }
);

export function LocationMap({ property }: LocationMapProps) {
  return (
    <div>
      <div className="w-full h-80 bg-surface-container rounded-xl overflow-hidden mb-4 relative">
        <MapView properties={[property]} center={[property.coordinates.lat, property.coordinates.lng]} />
      </div>
      <p className="text-base text-on-surface-variant mb-4">
        {property.address}
      </p>
    </div>
  );
}

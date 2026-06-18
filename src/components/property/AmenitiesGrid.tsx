"use client";

import { useState } from "react";
import type { Amenity } from "@/types";

interface AmenitiesGridProps {
  amenities: Amenity[];
}

export function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? amenities : amenities.slice(0, 12);
  const available = visible.filter((a) => a.available);
  const unavailable = visible.filter((a) => !a.available);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {available.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl text-on-surface-variant">
              {amenity.icon}
            </span>
            <span className="text-base text-on-surface">{amenity.nameVi}</span>
          </div>
        ))}
        {unavailable.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-3 opacity-50">
            <span className="material-symbols-outlined text-xl text-on-surface-variant line-through">
              {amenity.icon}
            </span>
            <span className="text-base text-on-surface-variant line-through">
              {amenity.nameVi}
            </span>
          </div>
        ))}
      </div>
      {amenities.length > 12 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-3 border border-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container transition-colors"
        >
          {showAll ? "Ẩn bớt" : `Hiển thị tất cả ${amenities.length} tiện nghi`}
        </button>
      )}
    </>
  );
}

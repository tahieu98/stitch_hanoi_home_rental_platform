"use client";

import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/types";
import { formatPrice } from "@/lib/utils/format-price";
import { cn } from "@/lib/utils/cn";

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "horizontal";
  className?: string;
}

const DISTRICT_LABELS: Record<string, string> = {
  "hoan-kiem": "Hoàn Kiếm",
  "west-lake": "Tây Hồ",
  "ba-dinh": "Ba Đình",
};

const TYPE_LABELS: Record<string, string> = {
  "entire-apartment": "Toàn bộ căn hộ",
  "entire-villa": "Toàn bộ biệt thự",
  "penthouse": "Penthouse",
  "studio": "Studio",
  "loft": "Loft",
  "private-room": "Phòng riêng",
};

export function PropertyCard({ property, variant = "default", className }: PropertyCardProps) {
  const href = `/properties/${property.id}`;

  if (variant === "horizontal") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-outline-variant/20 cursor-pointer",
          className
        )}
      >
        {/* Image */}
        <div className="w-full sm:w-72 h-48 sm:h-auto relative shrink-0 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.titleVi}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 indochine-inner-border"
            sizes="(max-width: 640px) 100vw, 288px"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {property.isLuxury && (
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                Luxury
              </span>
            )}
            {property.isRareFind && (
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full text-xs font-semibold">
                Rare Find
              </span>
            )}
            {property.isVerified && !property.isLuxury && !property.isRareFind && (
              <span className="bg-secondary-container text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                Verified
              </span>
            )}
          </div>
          {/* Favorite */}
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-3 right-3 text-white hover:text-secondary transition-colors"
            aria-label="Save"
          >
            <span className="material-symbols-outlined">favorite_border</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs text-on-surface-variant font-semibold">
                {TYPE_LABELS[property.type] || property.type} · {DISTRICT_LABELS[property.district]}
              </span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-semibold">{property.rating}</span>
                <span className="text-xs text-on-surface-variant">({property.reviewCount})</span>
              </div>
            </div>
            <h3 className="font-semibold text-base text-on-surface mb-1 group-hover:text-secondary transition-colors line-clamp-1">
              {property.titleVi}
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="bg-surface-container-low px-2 py-0.5 rounded-full text-xs text-on-surface-variant">{property.guests} khách</span>
              <span className="bg-surface-container-low px-2 py-0.5 rounded-full text-xs text-on-surface-variant">{property.bedrooms} PN</span>
              <span className="bg-surface-container-low px-2 py-0.5 rounded-full text-xs text-on-surface-variant">{property.beds} giường</span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-semibold text-base text-on-surface">{formatPrice(property.pricePerNight)}</span>
            <span className="text-xs text-on-surface-variant"> / đêm</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 luxury-card-shadow">
        <Image
          src={property.images[0]}
          alt={property.titleVi}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 indochine-inner-border"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {property.isLuxury && (
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              Luxury
            </span>
          )}
          {property.isRareFind && (
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full text-xs font-semibold">
              Rare Find
            </span>
          )}
          {property.isVerified && !property.isLuxury && !property.isRareFind && (
            <span className="bg-tertiary-container text-on-tertiary-container px-2.5 py-1 rounded-full text-xs font-semibold">
              Verified
            </span>
          )}
        </div>
        {/* Favorite */}
        <button
          onClick={(e) => { e.preventDefault(); }}
          className="absolute top-3 right-3 text-white hover:text-secondary transition-colors"
          aria-label="Save"
        >
          <span className="material-symbols-outlined">favorite_border</span>
        </button>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-on-surface mb-0.5 group-hover:text-secondary transition-colors truncate">
            {property.titleVi}
          </h3>
          <p className="text-xs text-on-surface-variant">
            {property.address.split(",")[0]}
          </p>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {property.amenities.slice(0, 3).filter(a => a.available).map((amenity) => (
              <span
                key={amenity.id}
                className="bg-surface-container-low px-2 py-0.5 rounded-full text-xs text-on-surface-variant"
              >
                {amenity.nameVi}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right ml-2 shrink-0">
          <div className="flex items-center gap-1 justify-end mb-0.5">
            <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-xs font-semibold text-on-surface">{property.rating}</span>
            <span className="text-xs text-on-surface-variant">({property.reviewCount})</span>
          </div>
          <div>
            <span className="font-semibold text-base text-secondary">{formatPrice(property.pricePerNight)}</span>
            <span className="text-xs text-on-surface-variant"> / đêm</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

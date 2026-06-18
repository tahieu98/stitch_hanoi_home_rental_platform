"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { PropertyCard } from "@/components/listings/PropertyCard";
import { SearchFilters } from "@/components/listings/SearchFilters";
import { properties } from "@/lib/data/properties";
import type { Property } from "@/types";

const MapView = dynamic(
  () => import("@/components/search/MapView").then((m) => m.MapView),
  { ssr: false, loading: () => <div className="h-full w-full bg-surface-container flex items-center justify-center"><span className="text-on-surface-variant">Loading map...</span></div> }
);

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const typeFilter = searchParams.get("type") || "";
  const priceFilter = searchParams.get("price") || "";

  // Filter properties
  let results: Property[] = [...properties];

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.titleVi.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.district.includes(q)
    );
  }

  if (typeFilter) {
    results = results.filter((p) => p.type === typeFilter);
  }

  if (priceFilter) {
    const [minStr, maxStr] = priceFilter.split("-");
    const min = parseInt(minStr || "0");
    const max = parseInt(maxStr || "999999999");
    results = results.filter((p) => p.pricePerNight >= min && p.pricePerNight <= max);
  }

  return (
    <div className="h-[calc(100vh-5rem)] flex overflow-hidden">
      {/* Left: Results */}
      <div className="w-full lg:w-[60%] flex flex-col h-full">
        {/* Sticky filter bar */}
        <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md px-6 md:px-12 py-3 border-b border-outline-variant/30">
          <div className="mb-2">
            <h1 className="font-semibold text-base text-on-background">
              {results.length} chỗ ở tại Hà Nội
              {query && <span> cho &ldquo;{query}&rdquo;</span>}
            </h1>
          </div>
          <SearchFilters />
        </div>

        {/* Property list */}
        <div className="flex-1 overflow-y-auto px-6 md:px-12 py-6 space-y-4 no-scrollbar">
          {results.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
              <p className="text-lg text-on-surface-variant">Không tìm thấy chỗ ở nào.</p>
              <p className="text-sm text-on-surface-variant mt-1">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
            </div>
          ) : (
            results.map((property) => (
              <PropertyCard key={property.id} property={property} variant="horizontal" />
            ))
          )}
        </div>
      </div>

      {/* Right: Map */}
      <div className="hidden lg:block w-[40%] h-full relative">
        <MapView properties={results} />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <span className="text-on-surface-variant">Đang tải...</span>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

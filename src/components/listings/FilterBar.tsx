"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface FilterBarProps {
  onSortChange?: (sort: string) => void;
  onTypeChange?: (type: string) => void;
  onPriceChange?: (range: string) => void;
  activeSort?: string;
}

const PROPERTY_TYPES = [
  { value: "", label: "Tất cả loại" },
  { value: "entire-apartment", label: "Căn hộ" },
  { value: "entire-villa", label: "Biệt thự" },
  { value: "penthouse", label: "Penthouse" },
  { value: "studio", label: "Studio" },
  { value: "loft", label: "Loft" },
];

const PRICE_RANGES = [
  { value: "", label: "Tất cả giá" },
  { value: "0-2000000", label: "Dưới 2 triệu" },
  { value: "2000000-4000000", label: "2 - 4 triệu" },
  { value: "4000000-8000000", label: "4 - 8 triệu" },
  { value: "8000000-", label: "Trên 8 triệu" },
];

const SORT_OPTIONS = [
  { value: "recommended", label: "Đề xuất" },
  { value: "price-asc", label: "Giá thấp → cao" },
  { value: "price-desc", label: "Giá cao → thấp" },
  { value: "rating", label: "Đánh giá cao nhất" },
];

export function FilterBar({ onSortChange, onTypeChange, onPriceChange, activeSort = "recommended" }: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <section className="sticky top-20 z-40 bg-surface border-b border-outline-variant py-4 px-6 md:px-12">
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Filter dropdowns */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
          {/* Property Type */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
              className="flex items-center gap-1 border border-outline-variant rounded-full px-4 py-1.5 text-xs font-semibold text-on-surface hover:border-on-surface transition-colors bg-white whitespace-nowrap"
            >
              Loại phòng
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {openDropdown === "type" && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-outline-variant shadow-card p-2 z-50 min-w-48 animate-scale-in">
                {PROPERTY_TYPES.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onTypeChange?.(opt.value);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface-container transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setOpenDropdown(openDropdown === "price" ? null : "price")}
              className="flex items-center gap-1 border border-outline-variant rounded-full px-4 py-1.5 text-xs font-semibold text-on-surface hover:border-on-surface transition-colors bg-white whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base">payments</span>
              Giá
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {openDropdown === "price" && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-outline-variant shadow-card p-2 z-50 min-w-48 animate-scale-in">
                {PRICE_RANGES.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onPriceChange?.(opt.value);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface-container transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filters button */}
          <button className="flex items-center gap-1 border border-outline-variant rounded-full px-4 py-1.5 text-xs font-semibold text-on-surface hover:border-on-surface transition-colors bg-white whitespace-nowrap">
            <span className="material-symbols-outlined text-base">tune</span>
            Bộ lọc
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant shrink-0">
          <span className="font-semibold">Sắp xếp:</span>
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}
              className="font-semibold text-secondary hover:text-secondary-container transition-colors"
            >
              {SORT_OPTIONS.find((o) => o.value === activeSort)?.label || "Đề xuất"}
            </button>
            {openDropdown === "sort" && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl border border-outline-variant shadow-card p-2 z-50 min-w-36 animate-scale-in">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onSortChange?.(opt.value);
                      setOpenDropdown(null);
                    }}
                    className={cn(
                      "block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface-container transition-colors",
                      activeSort === opt.value && "text-secondary font-semibold"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdown on outside click */}
      {openDropdown && (
        <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)} />
      )}
    </section>
  );
}

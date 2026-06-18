"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const PROPERTY_TYPES = [
  { value: "", label: "Tất cả" },
  { value: "entire-apartment", label: "Căn hộ" },
  { value: "entire-villa", label: "Biệt thự" },
  { value: "penthouse", label: "Penthouse" },
  { value: "studio", label: "Studio" },
  { value: "loft", label: "Loft" },
];

const PRICE_RANGES = [
  { value: "", label: "Tất cả" },
  { value: "0-2000000", label: "Dưới 2 triệu" },
  { value: "2000000-4000000", label: "2 - 4 triệu" },
  { value: "4000000-8000000", label: "4 - 8 triệu" },
  { value: "8000000-", label: "Trên 8 triệu" },
];

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentType = searchParams.get("type") || "";
  const currentPrice = searchParams.get("price") || "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      {/* Filter chips row */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-1 border border-outline-variant rounded-full px-4 py-1.5 text-xs font-semibold text-on-surface hover:border-on-surface transition-colors bg-white whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-base">tune</span>
          Bộ lọc
        </button>
        <button
          onClick={() => updateParam("type", currentType === "entire-apartment" ? "" : "entire-apartment")}
          className={cn(
            "flex items-center gap-1 border rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap",
            currentType === "entire-apartment"
              ? "border-secondary bg-secondary text-white"
              : "border-outline-variant text-on-surface hover:border-on-surface bg-white"
          )}
        >
          Căn hộ
        </button>
        <button
          onClick={() => updateParam("type", currentType === "entire-villa" ? "" : "entire-villa")}
          className={cn(
            "flex items-center gap-1 border rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap",
            currentType === "entire-villa"
              ? "border-secondary bg-secondary text-white"
              : "border-outline-variant text-on-surface hover:border-on-surface bg-white"
          )}
        >
          Biệt thự
        </button>
        <button
          onClick={() => updateParam("type", currentType === "penthouse" ? "" : "penthouse")}
          className={cn(
            "flex items-center gap-1 border rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap",
            currentType === "penthouse"
              ? "border-secondary bg-secondary text-white"
              : "border-outline-variant text-on-surface hover:border-on-surface bg-white"
          )}
        >
          Penthouse
        </button>
        <button
          onClick={() => updateParam("price", currentPrice === "0-2000000" ? "" : "0-2000000")}
          className={cn(
            "flex items-center gap-1 border rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap",
            currentPrice === "0-2000000"
              ? "border-secondary bg-secondary text-white"
              : "border-outline-variant text-on-surface hover:border-on-surface bg-white"
          )}
        >
          Giá thấp
        </button>
        <button
          onClick={() => updateParam("price", currentPrice === "8000000-" ? "" : "8000000-")}
          className={cn(
            "flex items-center gap-1 border rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap",
            currentPrice === "8000000-"
              ? "border-secondary bg-secondary text-white"
              : "border-outline-variant text-on-surface hover:border-on-surface bg-white"
          )}
        >
          Cao cấp
        </button>
      </div>

      {/* Filter drawer */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setDrawerOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl p-6 shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Bộ lọc</h3>
              <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-full hover:bg-surface-container">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Type */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3">Loại chỗ ở</h4>
              <div className="grid grid-cols-2 gap-2">
                {PROPERTY_TYPES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      updateParam("type", t.value);
                      setDrawerOpen(false);
                    }}
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-semibold transition-colors text-left",
                      currentType === t.value
                        ? "border-secondary bg-secondary text-white"
                        : "border-outline-variant text-on-surface hover:border-secondary"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3">Khoảng giá (VND / đêm)</h4>
              <div className="grid grid-cols-2 gap-2">
                {PRICE_RANGES.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => {
                      updateParam("price", p.value);
                      setDrawerOpen(false);
                    }}
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-semibold transition-colors text-left",
                      currentPrice === p.value
                        ? "border-secondary bg-secondary text-white"
                        : "border-outline-variant text-on-surface hover:border-secondary"
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear */}
            <button
              onClick={() => {
                updateParam("type", "");
                updateParam("price", "");
                setDrawerOpen(false);
              }}
              className="w-full py-3 border border-outline-variant rounded-xl font-semibold text-sm hover:bg-surface-container transition-colors"
            >
              Xóa bộ lọc
            </button>
          </div>
        </>
      )}
    </div>
  );
}

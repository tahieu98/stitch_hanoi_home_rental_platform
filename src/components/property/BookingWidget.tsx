"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Property } from "@/types";
import { formatPrice } from "@/lib/utils/format-price";
import { calculatePrice } from "@/lib/utils/booking-calc";

interface BookingWidgetProps {
  property: Property;
}

export function BookingWidget({ property }: BookingWidgetProps) {
  const router = useRouter();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const defaultCheckIn = today.toISOString().split("T")[0];
  const defaultCheckOut = tomorrow.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(2);

  const priceBreakdown = calculatePrice(
    property.pricePerNight,
    property.cleaningFee,
    property.serviceFee,
    checkIn,
    checkOut
  );

  const handleBook = () => {
    const params = new URLSearchParams({
      propertyId: property.id,
      checkIn,
      checkOut,
      guests: guests.toString(),
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="sticky top-28 bg-white rounded-xl p-5 border border-outline-variant shadow-card flex flex-col gap-4">
      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-2xl text-on-surface">
          {formatPrice(property.pricePerNight)}
        </span>
        <span className="text-sm text-on-surface-variant">/ đêm</span>
      </div>

      {/* Date inputs */}
      <div className="border border-outline-variant rounded-lg overflow-hidden">
        <div className="flex border-b border-outline-variant">
          <div className="w-1/2 p-3 border-r border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors">
            <label className="block text-xs uppercase font-semibold text-on-surface mb-1" style={{ letterSpacing: "0.04em" }}>
              Nhận phòng
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={defaultCheckIn}
              className="w-full bg-transparent text-sm text-on-surface outline-none [color-scheme:light]"
            />
          </div>
          <div className="w-1/2 p-3 cursor-pointer hover:bg-surface-container-low transition-colors">
            <label className="block text-xs uppercase font-semibold text-on-surface mb-1" style={{ letterSpacing: "0.04em" }}>
              Trả phòng
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || defaultCheckIn}
              className="w-full bg-transparent text-sm text-on-surface outline-none [color-scheme:light]"
            />
          </div>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
          <div>
            <label className="block text-xs uppercase font-semibold text-on-surface mb-1" style={{ letterSpacing: "0.04em" }}>
              Khách
            </label>
            <div className="text-sm text-on-surface-variant">
              {guests} khách{property.guests > guests ? "" : " (tối đa)"}
            </div>
          </div>
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="bg-transparent text-sm text-on-surface outline-none"
          >
            {Array.from({ length: property.guests }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} khách{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Book button */}
      <button
        onClick={handleBook}
        className="w-full bg-secondary text-white font-semibold text-base py-4 rounded-lg hover:bg-secondary-container hover:text-secondary transition-colors shadow-sm"
      >
        Đặt ngay
      </button>
      <p className="text-center text-sm text-on-surface-variant">Bạn vẫn chưa bị trừ tiền</p>

      {/* Price breakdown */}
      {priceBreakdown.nights > 0 && (
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="underline decoration-dotted">{formatPrice(property.pricePerNight)} x {priceBreakdown.nights} đêm</span>
            <span>{formatPrice(priceBreakdown.nightlyTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline decoration-dotted">Phí vệ sinh</span>
            <span>{formatPrice(priceBreakdown.cleaningFee)}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline decoration-dotted">Phí dịch vụ AutumnHanoi</span>
            <span>{formatPrice(priceBreakdown.serviceFee)}</span>
          </div>
          <div className="border-t border-outline-variant pt-3 mt-1 flex justify-between font-semibold text-base text-on-surface">
            <span>Tổng (VND)</span>
            <span>{formatPrice(priceBreakdown.subtotal)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

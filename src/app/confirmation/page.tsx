"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProperty } from "@/lib/data/properties";
import { formatPrice } from "@/lib/utils/format-price";
import { formatDateRange, calculateNights } from "@/lib/utils/date-range";

const DISTRICT_LABELS: Record<string, string> = {
  "hoan-kiem": "Hoàn Kiếm",
  "west-lake": "Tây Hồ",
  "ba-dinh": "Ba Đình",
};

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("booking_id") || "AH-XXXXXX";
  const propertyId = searchParams.get("propertyId") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = parseInt(searchParams.get("guests") || "2");

  const property = propertyId ? getProperty(propertyId) : null;
  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = property ? property.pricePerNight * nights + property.cleaningFee + property.serviceFee : 0;

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-soft w-full overflow-hidden border border-surface-dim relative">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />

        {/* Success icon */}
        <div className="flex flex-col items-center pt-12 pb-6 px-6">
          <div className="w-20 h-20 rounded-full bg-secondary-fixed flex items-center justify-center mb-4">
            <span
              className="material-symbols-outlined text-[40px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1
            className="text-2xl md:text-3xl font-bold text-primary mb-2"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em" }}
          >
            Đặt phòng thành công!
          </h1>
          <p className="text-base text-on-surface-variant text-center max-w-md leading-relaxed">
            Cảm ơn bạn đã đặt phòng. Chúng tôi đã gửi email xác nhận chi tiết đến hộp thư của bạn. Rất mong được đón tiếp bạn tại Hà Nội.
          </p>

          {/* Booking Reference */}
          <div className="inline-flex flex-col items-center bg-surface-container-low border border-outline-variant rounded-lg py-3 px-6 my-6">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1" style={{ letterSpacing: "0.04em" }}>
              Mã đặt phòng
            </span>
            <span className="font-bold text-xl text-primary tracking-widest">{bookingId}</span>
          </div>
        </div>

        {/* Booking Summary */}
        {property && (
          <div className="bg-surface rounded-xl border border-surface-dim p-5 md:p-6 flex flex-col md:flex-row gap-5 mx-6 mb-6">
            {/* Image */}
            <div className="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant/30 shrink-0 relative">
              <Image
                src={property.images[0]}
                alt={property.titleVi}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center flex-grow">
              <h2 className="font-semibold text-base text-primary mb-1">{property.titleVi}</h2>
              <p className="text-xs text-on-surface-variant mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">location_on</span>
                {DISTRICT_LABELS[property.district]}, Hà Nội
              </p>
              <div className="grid grid-cols-2 gap-3 border-t border-surface-dim pt-4">
                <div>
                  <span className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase" style={{ letterSpacing: "0.04em" }}>
                    Ngày
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {checkIn && checkOut ? formatDateRange(checkIn, checkOut) : "N/A"}
                  </span>
                  <span className="text-xs text-on-surface-variant block">{nights} đêm</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase" style={{ letterSpacing: "0.04em" }}>
                    Tổng thanh toán
                  </span>
                  <span className="font-bold text-lg text-secondary">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 px-6 pb-8 justify-center">
          <button className="bg-secondary text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-secondary-container hover:text-secondary transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Xem đặt phòng của tôi
          </button>
          <Link
            href="/"
            className="border border-primary text-primary font-semibold text-sm px-8 py-3 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>

      {/* Next steps */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: "mail",
            title: "Kiểm tra email",
            desc: "Chúng tôi đã gửi chi tiết đặt phòng đến email của bạn.",
          },
          {
            icon: "phone",
            title: "Liên hệ chủ nhà",
            desc: "Chủ nhà sẽ liên hệ với bạn trước ngày nhận phòng.",
          },
          {
            icon: "travel",
            title: "Chuẩn bị hành lý",
            desc: "Đừng quên mang theo giấy tờ tùy thân khi nhận phòng.",
          },
        ].map((step, i) => (
          <div key={i} className="bg-surface-container-low rounded-xl p-4 flex gap-3 items-start">
            <span className="material-symbols-outlined text-xl text-secondary">{step.icon}</span>
            <div>
              <h3 className="font-semibold text-sm text-on-surface mb-0.5">{step.title}</h3>
              <p className="text-xs text-on-surface-variant">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-on-surface-variant">Đang tải...</span>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

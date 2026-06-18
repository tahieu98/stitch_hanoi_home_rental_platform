"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProperty } from "@/lib/data/properties";
import { formatPrice } from "@/lib/utils/format-price";
import { calculatePrice } from "@/lib/utils/booking-calc";
import { calculateNights, formatDateRange } from "@/lib/utils/date-range";
import { cn } from "@/lib/utils/cn";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");
  const checkIn = searchParams.get("checkIn") || new Date().toISOString().split("T")[0];
  const checkOut = searchParams.get("checkOut") || new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const guests = parseInt(searchParams.get("guests") || "2");

  const property = propertyId ? getProperty(propertyId) : null;

  const [paymentMethod, setPaymentMethod] = useState<"card" | "momo" | "bank">("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nights = calculateNights(checkIn, checkOut);
  const priceBreakdown = property
    ? calculatePrice(property.pricePerNight, property.cleaningFee, property.serviceFee, checkIn, checkOut)
    : null;

  if (!property) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <p className="text-lg text-on-surface-variant mb-6">Không tìm thấy thông tin đặt phòng.</p>
        <Link href="/" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const name = (document.getElementById("guestName") as HTMLInputElement)?.value;
    const email = (document.getElementById("guestEmail") as HTMLInputElement)?.value;
    const phone = (document.getElementById("guestPhone") as HTMLInputElement)?.value;

    if (!name?.trim()) newErrors.guestName = "Vui lòng nhập tên";
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.guestEmail = "Vui lòng nhập email hợp lệ";
    if (!phone?.trim() || phone.length < 10) newErrors.guestPhone = "Vui lòng nhập số điện thoại hợp lệ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const bookingId = `AH-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    await new Promise((r) => setTimeout(r, 1500));

    router.push(`/confirmation?booking_id=${bookingId}&propertyId=${propertyId}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 md:px-12">
      {/* Back */}
      <div className="mb-6 flex items-center gap-4">
        <Link
          href={`/properties/${property.id}`}
          className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1
          className="text-2xl md:text-3xl font-bold text-on-background"
          style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em" }}
        >
          Yêu cầu đặt phòng
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Form */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Trip info */}
          <div className="bg-white rounded-xl p-6 border border-outline-variant shadow-soft">
            <h2 className="font-semibold text-lg text-on-surface mb-4" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
              Thông tin chuyến đi
            </h2>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-sm mb-1">Ngày</h3>
                <p className="text-sm text-on-surface-variant">{formatDateRange(checkIn, checkOut)}</p>
                <p className="text-xs text-on-surface-variant">{nights} đêm</p>
              </div>
              <Link href={`/properties/${property.id}`} className="font-semibold text-sm text-secondary underline hover:text-secondary-container">
                Chỉnh sửa
              </Link>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm mb-1">Khách</h3>
                <p className="text-sm text-on-surface-variant">{guests} khách</p>
              </div>
              <Link href={`/properties/${property.id}`} className="font-semibold text-sm text-secondary underline hover:text-secondary-container">
                Chỉnh sửa
              </Link>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl p-6 border border-outline-variant shadow-soft">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg text-on-surface" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                Phương thức thanh toán
              </h2>
              <div className="flex gap-1 text-outline">
                <span className="material-symbols-outlined">credit_card</span>
                <span className="material-symbols-outlined">account_balance</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Credit Card */}
              <label className={cn(
                "flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors",
                paymentMethod === "card"
                  ? "border-secondary bg-secondary-fixed/30"
                  : "border-outline-variant hover:bg-surface-container-low"
              )}>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-4 h-4 accent-secondary"
                  />
                  <span className="text-sm font-semibold">Thẻ tín dụng / Ghi nợ</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
              </label>

              {/* Card details */}
              {paymentMethod === "card" && (
                <div className="pl-8 pr-4 py-3 space-y-3 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Số thẻ</label>
                    <input
                      id="cardNumber"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full bg-transparent border-b border-outline-variant focus:border-secondary px-0 py-2 text-sm outline-none transition-colors placeholder:text-outline-variant"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">Ngày hết hạn</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full bg-transparent border-b border-outline-variant focus:border-secondary px-0 py-2 text-sm outline-none transition-colors placeholder:text-outline-variant"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-transparent border-b border-outline-variant focus:border-secondary px-0 py-2 text-sm outline-none transition-colors placeholder:text-outline-variant"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* MoMo */}
              <label className={cn(
                "flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors",
                paymentMethod === "momo"
                  ? "border-secondary bg-secondary-fixed/30"
                  : "border-outline-variant hover:bg-surface-container-low"
              )}>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "momo"}
                    onChange={() => setPaymentMethod("momo")}
                    className="w-4 h-4 accent-secondary"
                  />
                  <span className="text-sm font-semibold">Ví MoMo</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">wallet</span>
              </label>

              {/* Bank Transfer */}
              <label className={cn(
                "flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors",
                paymentMethod === "bank"
                  ? "border-secondary bg-secondary-fixed/30"
                  : "border-outline-variant hover:bg-surface-container-low"
              )}>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="w-4 h-4 accent-secondary"
                  />
                  <span className="text-sm font-semibold">Chuyển khoản ngân hàng</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
              </label>
            </div>
          </div>

          {/* Guest Info */}
          <div className="bg-white rounded-xl p-6 border border-outline-variant shadow-soft">
            <h2 className="font-semibold text-lg text-on-surface mb-4" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
              Thông tin khách
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tên đầy đủ</label>
                <input
                  id="guestName"
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className={cn(
                    "w-full bg-surface border rounded-lg px-4 py-3 text-sm outline-none transition-colors",
                    errors.guestName ? "border-error focus:border-error" : "border-outline-variant focus:border-secondary"
                  )}
                />
                {errors.guestName && <p className="text-xs text-error mt-1">{errors.guestName}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Email</label>
                <input
                  id="guestEmail"
                  type="email"
                  placeholder="email@example.com"
                  className={cn(
                    "w-full bg-surface border rounded-lg px-4 py-3 text-sm outline-none transition-colors",
                    errors.guestEmail ? "border-error focus:border-error" : "border-outline-variant focus:border-secondary"
                  )}
                />
                {errors.guestEmail && <p className="text-xs text-error mt-1">{errors.guestEmail}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Số điện thoại</label>
                <input
                  id="guestPhone"
                  type="tel"
                  placeholder="0xxx xxx xxx"
                  className={cn(
                    "w-full bg-surface border rounded-lg px-4 py-3 text-sm outline-none transition-colors",
                    errors.guestPhone ? "border-error focus:border-error" : "border-outline-variant focus:border-secondary"
                  )}
                />
                {errors.guestPhone && <p className="text-xs text-error mt-1">{errors.guestPhone}</p>}
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h2 className="font-semibold text-base text-on-surface mb-2">Chính sách hủy</h2>
            <p className="text-sm text-on-surface-variant">
              <strong>Hủy miễn phí trước 14:00 ngày nhận phòng.</strong> Hoàn tiền một phần nếu hủy sau thời gian này.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white font-semibold text-base px-8 py-4 rounded-lg hover:bg-secondary-container transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">lock</span>
                    Xác nhận và thanh toán
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-outline mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified_user</span>
              Thanh toán được bảo mật an toàn
            </p>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 bg-white rounded-xl p-6 border border-outline-variant shadow-soft">
            {/* Property info */}
            <div className="flex gap-4 mb-5 pb-5 border-b border-outline-variant">
              <div className="w-24 h-24 rounded-lg overflow-hidden relative shrink-0">
                <Image
                  src={property.images[0]}
                  alt={property.titleVi}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs text-outline mb-1 block">Toàn bộ căn hộ · {DISTRICT_LABELS[property.district]}</span>
                  <h3 className="text-base font-semibold text-on-background leading-tight">{property.titleVi}</h3>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold">{property.rating}</span>
                  <span className="text-xs text-outline">({property.reviewCount})</span>
                </div>
              </div>
            </div>

            {/* Price protection */}
            <div className="bg-tertiary-fixed/30 rounded-lg p-3 mb-5 flex gap-3 items-start border border-tertiary-container/30">
              <span className="material-symbols-outlined text-secondary text-xl">workspace_premium</span>
              <div className="text-xs">
                <strong className="font-semibold block text-on-background">Đảm bảo giá tốt nhất</strong>
                <span className="text-on-surface-variant">Đã bao gồm bảo vệ đặt phòng cho kỳ nghỉ của bạn.</span>
              </div>
            </div>

            {/* Price breakdown */}
            {priceBreakdown && (
              <div className="space-y-3 text-sm mb-5 pb-5 border-b border-outline-variant">
                <div className="flex justify-between">
                  <span className="underline decoration-dotted">{formatPrice(property.pricePerNight)} x {nights} đêm</span>
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
              </div>
            )}

            {/* Total */}
            {priceBreakdown && (
              <div className="flex justify-between items-center font-semibold text-base text-on-surface">
                <span>Tổng (VND)</span>
                <span>{formatPrice(priceBreakdown.subtotal)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DISTRICT_LABELS: Record<string, string> = {
  "hoan-kiem": "Hoàn Kiếm",
  "west-lake": "Tây Hồ",
  "ba-dinh": "Ba Đình",
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-on-surface-variant">Đang tải...</span>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}

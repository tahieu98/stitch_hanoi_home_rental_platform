"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Property, RatingBreakdown, Review } from "@/types";

interface ReviewsExperienceProps {
  property: Property;
  propertyReviews: Review[];
  breakdown?: RatingBreakdown;
}

const RATING_LABELS: Record<keyof RatingBreakdown, string> = {
  cleanliness: "Mức độ sạch sẽ",
  accuracy: "Độ chính xác",
  communication: "Giao tiếp",
  location: "Vị trí",
  checkIn: "Nhận phòng",
  value: "Giá trị",
};

const DEMO_REVIEWS: Array<Omit<Review, "propertyId">> = [
  {
    id: "demo-review-1",
    author: { name: "Mai Anh", avatar: "", country: "Việt Nam" },
    rating: 5,
    date: "2024-10-18",
    dateVi: "Tháng 10 năm 2024",
    comment:
      "Không gian sạch sẽ, yên tĩnh và đúng như ảnh. Chúng tôi thích nhất là cách chủ nhà chuẩn bị sẵn mọi thứ cần thiết cho kỳ nghỉ ngắn ngày.",
    commentVi:
      "Không gian sạch sẽ, yên tĩnh và đúng như ảnh. Chúng tôi thích nhất là cách chủ nhà chuẩn bị sẵn mọi thứ cần thiết cho kỳ nghỉ ngắn ngày.",
  },
  {
    id: "demo-review-2",
    author: { name: "Jonathan", avatar: "", country: "Singapore" },
    rating: 4.9,
    date: "2024-09-22",
    dateVi: "Tháng 9 năm 2024",
    comment:
      "The apartment felt calm, private, and very easy to settle into. Check-in was smooth and the location made it simple to move around Hanoi.",
    commentVi:
      "Căn hộ rất yên tĩnh, riêng tư và dễ làm quen ngay từ lúc đến. Nhận phòng trơn tru, vị trí thuận tiện để di chuyển trong Hà Nội.",
  },
  {
    id: "demo-review-3",
    author: { name: "Hà Linh", avatar: "", country: "Việt Nam" },
    rating: 4.8,
    date: "2024-08-14",
    dateVi: "Tháng 8 năm 2024",
    comment:
      "Nội thất đẹp, giường êm và ánh sáng trong phòng rất dễ chịu. Chủ nhà phản hồi nhanh khi chúng tôi cần hỏi thêm về bãi đỗ xe.",
    commentVi:
      "Nội thất đẹp, giường êm và ánh sáng trong phòng rất dễ chịu. Chủ nhà phản hồi nhanh khi chúng tôi cần hỏi thêm về bãi đỗ xe.",
  },
  {
    id: "demo-review-4",
    author: { name: "Sophie", avatar: "", country: "France" },
    rating: 5,
    date: "2024-07-03",
    dateVi: "Tháng 7 năm 2024",
    comment:
      "A lovely stay with thoughtful touches. The space was spotless, comfortable, and had a warm Hanoi character without feeling busy.",
    commentVi:
      "Một kỳ nghỉ rất dễ chịu với nhiều chi tiết chu đáo. Không gian sạch, thoải mái và có nét Hà Nội ấm áp mà không bị rối.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getReviewsForDisplay(property: Property, propertyReviews: Review[]) {
  if (propertyReviews.length > 0) return propertyReviews;

  return DEMO_REVIEWS.map((review) => ({
    ...review,
    id: `${property.id}-${review.id}`,
    propertyId: property.id,
  }));
}

function ReviewAvatar({ review, size = "md" }: { review: Review; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-10 w-10" : "h-12 w-12";

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full bg-secondary-fixed text-on-secondary-fixed ${sizeClass}`}>
      {review.author.avatar ? (
        <Image
          src={review.author.avatar}
          alt={review.author.name}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold">
          {getInitials(review.author.name)}
        </div>
      )}
    </div>
  );
}

function RatingSummary({ breakdown }: { breakdown?: RatingBreakdown }) {
  if (!breakdown) return null;

  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-16">
      {(Object.keys(breakdown) as Array<keyof RatingBreakdown>).map((key) => (
        <div key={key} className="flex items-center justify-between gap-4">
          <span className="text-sm text-on-surface">{RATING_LABELS[key]}</span>
          <div className="flex w-1/2 items-center gap-3">
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
              <div
                className="h-full rounded-full bg-on-surface"
                style={{ width: `${(breakdown[key] / 5) * 100}%` }}
              />
            </div>
            <span className="w-6 text-right text-sm font-semibold text-on-surface">
              {breakdown[key].toFixed(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewCard({ review, compact = false }: { review: Review; compact?: boolean }) {
  return (
    <article className={compact ? "py-5" : "flex flex-col gap-4"}>
      <div className="mb-3 flex items-center gap-3">
        <ReviewAvatar review={review} size={compact ? "sm" : "md"} />
        <div className="min-w-0">
          <h4 className="font-semibold text-base text-on-surface">{review.author.name}</h4>
          <p className="text-xs text-on-surface-variant">
            {review.author.country} · {review.dateVi}
          </p>
        </div>
      </div>
      <div className="mb-2 flex items-center gap-1 text-sm font-semibold text-on-surface">
        <span className="material-symbols-outlined text-base text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
        {review.rating.toFixed(1)}
      </div>
      <p className={`text-sm leading-relaxed text-on-surface-variant ${compact ? "" : "line-clamp-4"}`}>
        {review.commentVi}
      </p>
    </article>
  );
}

export function ReviewsExperience({ property, propertyReviews, breakdown }: ReviewsExperienceProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const displayReviews = useMemo(
    () => getReviewsForDisplay(property, propertyReviews),
    [property, propertyReviews]
  );
  const previewReviews = displayReviews.slice(0, 4);

  return (
    <section className="py-12 border-t border-outline-variant mt-8">
      <div className="mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
        <h2
          className="text-2xl font-bold text-on-surface md:text-3xl"
          style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em" }}
        >
          {property.rating} · {property.reviewCount} đánh giá
        </h2>
      </div>

      <div className="mb-10">
        <RatingSummary breakdown={breakdown} />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {previewReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {property.reviewCount > 0 && (
        <button
          type="button"
          onClick={() => setDialogOpen(true)}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-on-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-container"
        >
          <span className="material-symbols-outlined text-base">rate_review</span>
          Hiển thị tất cả {property.reviewCount} đánh giá
        </button>
      )}

      {dialogOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 px-0 md:items-center md:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reviews-dialog-title"
        >
          <div className="flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-lg bg-surface shadow-card md:max-w-3xl md:rounded-lg">
            <div className="flex items-center justify-between border-b border-outline-variant px-5 py-4">
              <div>
                <h3 id="reviews-dialog-title" className="text-lg font-semibold text-on-surface">
                  Đánh giá của khách lưu trú
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {property.rating} · {property.reviewCount} đánh giá · {property.titleVi}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-surface-container"
                aria-label="Đóng đánh giá"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5">
              <div className="mb-6 rounded-lg border border-outline-variant bg-surface-container-low p-4">
                <RatingSummary breakdown={breakdown} />
              </div>

              <div className="divide-y divide-outline-variant">
                {displayReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} compact />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="absolute inset-0 -z-10 cursor-default"
            onClick={() => setDialogOpen(false)}
            aria-label="Đóng lớp phủ đánh giá"
          />
        </div>
      )}
    </section>
  );
}

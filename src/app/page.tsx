import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { DistrictCard } from "@/components/home/DistrictCard";
import { districts } from "@/lib/data/districts";

export const metadata: Metadata = {
  title: "AutumnHanoi — Căn hộ nghỉ dưỡng cao cấp tại Hà Nội",
};

export default function HomePage() {
  return (
    <div className="max-w-[80rem] mx-auto px-4 md:px-12 py-16 space-y-16">
      {/* Hero */}
      <Hero />

      {/* Districts */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2
              className="text-2xl md:text-3xl text-on-surface mb-1 font-semibold"
              style={{ fontFamily: "var(--font-hanken-grotesk)", lineHeight: "2.375rem" }}
            >
              Khu vực nổi bật
            </h2>
            <p className="text-base text-on-surface-variant">
              Những không gian sống đặc quyền tại trung tâm.
            </p>
          </div>
          <Link
            href="/search"
            className="hidden md:flex items-center font-semibold text-sm text-secondary hover:text-secondary-container transition-colors gap-1"
          >
            Xem tất cả
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {districts.map((district) => (
            <DistrictCard key={district.slug} district={district} />
          ))}
        </div>
      </section>
    </div>
  );
}

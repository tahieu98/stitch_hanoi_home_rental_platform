"use client";

import Image from "next/image";
import type { District } from "@/types";

interface DistrictInsightProps {
  district: District;
}

export function DistrictInsight({ district }: DistrictInsightProps) {
  return (
    <section className="bg-surface-container-low py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[80rem] mx-auto">
        <div className="mb-8">
          <h2
            className="text-2xl md:text-3xl text-primary mb-2 font-bold"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em", lineHeight: "2.75rem" }}
          >
            Trải nghiệm {district.nameVi}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Tại sao khách của chúng tôi chọn khu vực lịch sử này cho kỳ nghỉ dài ngày và cuối tuần.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main feature card */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden luxury-card-shadow group min-h-[400px]">
            <Image
              src={district.heroImage}
              alt={district.nameVi}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <h3
                className="text-xl md:text-2xl mb-2 font-semibold"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                {district.nameVi}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {district.descriptionVi}
              </p>
            </div>
          </div>

          {/* Side cards */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {district.highlights.slice(0, 2).map((highlight, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden p-8 flex flex-col justify-end luxury-card-shadow group ${highlight.bgColor}`}
              >
                <div className="absolute top-6 right-6 opacity-40">
                  <span className="material-symbols-outlined text-4xl" style={{ color: "currentColor" }}>
                    {highlight.icon}
                  </span>
                </div>
                <h3 className={`font-semibold text-base mb-2 ${highlight.textColor}`} style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                  {highlight.titleVi}
                </h3>
                <p className={`text-sm ${highlight.textColor} opacity-90 leading-relaxed`}>
                  {highlight.descriptionVi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

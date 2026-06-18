import Image from "next/image";
import Link from "next/link";
import type { District } from "@/types";

interface DistrictHeroProps {
  district: District;
}

export function DistrictHero({ district }: DistrictHeroProps) {
  return (
    <section className="relative h-[819px] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={district.heroImage}
          alt={district.nameVi}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto h-full flex flex-col justify-end pb-16 px-6 md:px-12">
        <div className="max-w-2xl text-white">
          <span
            className="text-xs uppercase tracking-widest mb-4 block font-semibold"
            style={{ letterSpacing: "0.1em" }}
          >
            District Spotlight
          </span>
          <h1
            className="text-white mb-4 leading-tight text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em", lineHeight: "3.5rem" }}
          >
            {district.nameVi} – {district.taglineVi}
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            {district.descriptionVi}
          </p>
          <div className="flex gap-4">
            <a
              href="#listings"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2"
            >
              Khám phá collection
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { District } from "@/types";

interface DistrictCardProps {
  district: District;
}

export function DistrictCard({ district }: DistrictCardProps) {
  return (
    <Link
      href={`/districts/${district.slug}`}
      className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3] bg-surface-container-high border border-black/5 hover:scale-[1.02] transition-transform duration-300"
    >
      <Image
        src={district.heroImage}
        alt={district.nameVi}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-semibold text-xl text-white mb-1" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
          {district.nameVi}
        </h3>
        <p className="text-sm text-white/80">{district.taglineVi}</p>
      </div>
    </Link>
  );
}

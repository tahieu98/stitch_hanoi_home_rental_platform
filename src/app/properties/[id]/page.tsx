import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProperty, properties } from "@/lib/data/properties";
import { ImageGallery } from "@/components/property/ImageGallery";
import { BookingWidget } from "@/components/property/BookingWidget";
import { AmenitiesGrid } from "@/components/property/AmenitiesGrid";
import { LocationMap } from "@/components/property/LocationMap";
import { ReviewsSection } from "@/components/property/ReviewsSection";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) return { title: "Not Found" };
  return {
    title: `${property.titleVi} | AutumnHanoi`,
    description: property.descriptionVi,
  };
}

const DISTRICT_LABELS: Record<string, string> = {
  "hoan-kiem": "Hoàn Kiếm",
  "west-lake": "Tây Hồ",
  "ba-dinh": "Ba Đình",
};

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const propertyFacts = [
    `${property.guests} khách`,
    `${property.bedrooms} phòng ngủ`,
    `${property.beds} giường`,
    `${property.bathrooms} phòng tắm`,
  ];

  return (
    <div className="max-w-[80rem] mx-auto px-4 md:px-12 py-8">
      {/* Header */}
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1
            className="text-2xl md:text-3xl text-on-background mb-2 font-bold"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em", lineHeight: "2.75rem" }}
          >
            {property.titleVi}
          </h1>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
            <span className="flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-tertiary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              {property.rating} ({property.reviewCount} đánh giá)
            </span>
            <span>·</span>
            {property.superhost && (
              <>
                <span className="flex items-center gap-1 hover:underline cursor-pointer">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                  Chủ nhà siêu cấp
                </span>
                <span>·</span>
              </>
            )}
            <Link href="#location" className="underline hover:text-secondary transition-colors">
              {property.address}
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-surface-container transition-colors font-semibold text-sm">
            <span className="material-symbols-outlined">ios_share</span> Chia sẻ
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-surface-container transition-colors font-semibold text-sm">
            <span className="material-symbols-outlined">favorite_border</span> Lưu
          </button>
        </div>
      </header>

      {/* Gallery */}
      <ImageGallery images={property.images} title={property.titleVi} />

      {/* Two column layout */}
      <div className="flex flex-col md:flex-row gap-12 relative">
        {/* Left: Details */}
        <div className="flex-1 min-w-0">
          {/* Host info */}
          <div className="pb-6 border-b border-outline-variant mb-6">
            <div className="grid grid-cols-[minmax(0,1fr)_6.5rem] items-start gap-5 md:flex md:justify-between md:gap-4">
              <div className="min-w-0 md:flex-1">
                <h2 className="font-semibold text-lg text-on-surface mb-1" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                  <span className="md:hidden">Toàn bộ căn hộ cho thuê</span>
                  <span className="hidden md:inline">Toàn bộ căn hộ cho thuê. Chủ nhà {property.host.name}</span>
                </h2>
                <div className="mt-3 grid gap-2 text-sm text-on-surface-variant md:mt-1 md:flex md:flex-wrap md:items-center md:gap-3">
                  {propertyFacts.map((fact, index) => (
                    <div key={fact} className="flex items-center gap-3">
                      {index > 0 && <span className="hidden md:inline" aria-hidden="true">·</span>}
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="justify-self-end border-l border-outline-variant pl-4 text-center md:border-0 md:p-0">
                <p className="mb-2 text-xs font-semibold uppercase text-on-surface-variant md:hidden" style={{ letterSpacing: "0.08em" }}>
                  Chủ nhà
                </p>
                <div className="relative justify-self-end">
                  <div className="relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full border-2 border-white shadow-sm md:h-14 md:w-14">
                    <Image
                      src={property.host.avatar}
                      alt={property.host.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {property.host.isSuperhost && (
                    <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-secondary p-1.5 text-white md:p-1">
                      <span className="material-symbols-outlined text-sm text-white md:text-xs">verified</span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm font-semibold text-on-surface md:hidden">{property.host.name}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-4 pb-6 border-b border-outline-variant mb-6">
            {property.superhost && (
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-2xl text-on-surface">workspace_premium</span>
                <div>
                  <h3 className="font-semibold text-base text-on-surface">{property.host.name} là Chủ nhà siêu cấp</h3>
                  <p className="text-sm text-on-surface-variant">
                    Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và cam kết mang lại kỳ nghỉ tuyệt vời cho khách.
                  </p>
                </div>
              </div>
            )}
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-2xl text-on-surface">location_on</span>
              <div>
                <h3 className="font-semibold text-base text-on-surface">Vị trí tuyệt vời</h3>
                <p className="text-sm text-on-surface-variant">100% khách gần đây đã xếp hạng 5 sao cho vị trí này.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-2xl text-on-surface">key</span>
              <div>
                <h3 className="font-semibold text-base text-on-surface">Trải nghiệm nhận phòng tuyệt vời</h3>
                <p className="text-sm text-on-surface-variant">100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pb-6 border-b border-outline-variant mb-6">
            <h2 className="font-semibold text-lg text-on-surface mb-4" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
              Về không gian này
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              {property.descriptionVi}
            </p>
          </div>

          {/* Amenities */}
          <div className="pb-6 border-b border-outline-variant mb-6">
            <h2 className="font-semibold text-lg text-on-surface mb-4" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
              Nơi này có những gì cho bạn
            </h2>
            <AmenitiesGrid amenities={property.amenities} />
          </div>

          {/* Location */}
          <div id="location" className="pb-6 mb-6">
            <h2 className="font-semibold text-lg text-on-surface mb-4" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
              Nơi bạn sẽ đến
            </h2>
            <p className="text-sm text-on-surface-variant mb-4">
              {DISTRICT_LABELS[property.district]}, Hà Nội, Việt Nam
            </p>
            <LocationMap property={property} />
          </div>
        </div>

        {/* Right: Booking Widget */}
        <div className="w-full md:w-80 shrink-0">
          <BookingWidget property={property} />
        </div>
      </div>

      {/* Reviews */}
      <ReviewsSection property={property} />
    </div>
  );
}

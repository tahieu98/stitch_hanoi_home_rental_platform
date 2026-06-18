import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { districts } from "@/lib/data/districts";
import { getPropertiesByDistrict } from "@/lib/data/properties";
import { DistrictHero } from "@/components/listings/DistrictHero";
import { FilterBar } from "@/components/listings/FilterBar";
import { PropertyCard } from "@/components/listings/PropertyCard";
import { DistrictInsight } from "@/components/listings/DistrictInsight";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const district = districts.find((d) => d.slug === slug);
  if (!district) return { title: "Not Found" };
  return {
    title: `${district.nameVi} Suites — AutumnHanoi`,
    description: district.descriptionVi,
  };
}

export default async function DistrictPage({ params }: Props) {
  const { slug } = await params;
  const district = districts.find((d) => d.slug === slug);
  if (!district) notFound();

  const properties = getPropertiesByDistrict(slug);

  return (
    <div>
      <DistrictHero district={district} />
      <FilterBar />
      <section id="listings" className="py-16 px-6 md:px-12 max-w-[80rem] mx-auto">
        <div className="mb-8">
          <p className="text-sm text-on-surface-variant">
            {properties.length} chỗ ở tại {district.nameVi}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {properties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-on-surface-variant text-lg">Không tìm thấy chỗ ở nào.</p>
          </div>
        )}
      </section>
      <DistrictInsight district={district} />
    </div>
  );
}

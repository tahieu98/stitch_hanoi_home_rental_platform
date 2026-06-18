import type { Property, Review, RatingBreakdown } from "@/types";
import { reviews, ratingBreakdowns } from "@/lib/data/properties";
import { ReviewsExperience } from "./ReviewsExperience";

interface ReviewsSectionProps {
  property: Property;
}

export function ReviewsSection({ property }: ReviewsSectionProps) {
  const propertyReviews = reviews[property.id] || [];
  const breakdown = ratingBreakdowns[property.id];

  return (
    <ReviewsExperience
      property={property}
      propertyReviews={propertyReviews}
      breakdown={breakdown}
    />
  );
}

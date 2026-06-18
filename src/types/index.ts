import type { StaticImageData } from "next/image";

export type ImageSource = string | StaticImageData;

export interface Property {
  id: string;
  slug: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  district: DistrictSlug;
  address: string;
  coordinates: { lat: number; lng: number };
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  beds: number;
  pricePerNight: number; // VND
  cleaningFee: number;
  serviceFee: number;
  rating: number;
  reviewCount: number;
  superhost: boolean;
  images: ImageSource[];
  amenities: Amenity[];
  houseRules: string[];
  host: Host;
  isLuxury?: boolean;
  isRareFind?: boolean;
  isGuestFavorite?: boolean;
  isVerified?: boolean;
}

export type DistrictSlug = "hoan-kiem" | "west-lake" | "ba-dinh";

export type PropertyType =
  | "entire-apartment"
  | "entire-villa"
  | "private-room"
  | "penthouse"
  | "studio"
  | "loft";

export interface Amenity {
  id: string;
  name: string;
  nameVi: string;
  icon: string;
  available: boolean;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  isSuperhost: boolean;
  since: string;
  responseRate: number;
  responseTime: string;
}

export interface District {
  slug: DistrictSlug;
  name: string;
  nameVi: string;
  tagline: string;
  taglineVi: string;
  description: string;
  descriptionVi: string;
  heroImage: StaticImageData;
  propertyCount: number;
  highlights: DistrictHighlight[];
}

export interface DistrictHighlight {
  icon: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  bgColor: string;
  textColor: string;
}

export interface Review {
  id: string;
  propertyId: string;
  author: {
    name: string;
    avatar: string;
    country: string;
  };
  rating: number;
  date: string;
  dateVi: string;
  comment: string;
  commentVi: string;
}

export interface RatingBreakdown {
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  property: Pick<Property, "id" | "titleVi" | "images" | "district" | "address" | "rating" | "reviewCount">;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  totalPrice: number;
  status: BookingStatus;
  paymentMethod: PaymentMethod;
  createdAt: string;
}

export type BookingStatus = "pending" | "confirmed" | "cancelled";
export type PaymentMethod = "card" | "momo" | "bank";

export interface SearchFilters {
  query?: string;
  district?: DistrictSlug;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: PropertyType;
  bedrooms?: number;
  amenities?: string[];
  sortBy?: SortOption;
}

export type SortOption =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "most-reviewed";

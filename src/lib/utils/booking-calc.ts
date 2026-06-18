import { calculateNights } from "./date-range";

export interface PriceBreakdown {
  nightlyTotal: number;
  cleaningFee: number;
  serviceFee: number;
  subtotal: number;
  nights: number;
}

export function calculatePrice(
  pricePerNight: number,
  cleaningFee: number,
  serviceFee: number,
  checkIn: string,
  checkOut: string
): PriceBreakdown {
  const nights = calculateNights(checkIn, checkOut);
  const nightlyTotal = pricePerNight * nights;
  const subtotal = nightlyTotal + cleaningFee + serviceFee;

  return {
    nightlyTotal,
    cleaningFee,
    serviceFee,
    subtotal,
    nights,
  };
}

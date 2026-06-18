import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { vi, enUS } from "date-fns/locale";

export function calculateNights(checkIn: string | Date, checkOut: string | Date): number {
  const start = typeof checkIn === "string" ? parseISO(checkIn) : checkIn;
  const end = typeof checkOut === "string" ? parseISO(checkOut) : checkOut;
  return Math.max(0, differenceInCalendarDays(end, start));
}

export function formatDateRange(checkIn: string, checkOut: string, locale: "vi" | "en" = "vi"): string {
  const start = parseISO(checkIn);
  const end = parseISO(checkOut);
  const dateLocale = locale === "vi" ? vi : enUS;

  const fmt = locale === "vi" ? "d MMMM" : "MMM d";
  return `${format(start, fmt, { locale: dateLocale })} – ${format(end, fmt, { locale: dateLocale })}`;
}

export function formatDate(date: string | Date, fmt: string = "d MMM yyyy", locale: "vi" | "en" = "vi"): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  const dateLocale = locale === "vi" ? vi : enUS;
  return format(d, fmt, { locale: dateLocale });
}

export function formatDateShort(date: string | Date): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "dd/MM/yyyy");
}

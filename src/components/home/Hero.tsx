"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Hero() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("q", location);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="relative w-full h-[819px] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASRRL1cobMH7xego1Lz-_43hIJMdhMlT0MDFHSjs0u8s7KgOWNLWxNJBADO09dxYhO0_AmtUUTaf5D5ln3xyYdgFgQB2Vma-rpXs09JW4hnaxzasdJ--GktkiH4NBxCSlFra0QeS80A4hiKOjPfY44y0F5_wPO4YJg10SRKoz1abmDgPisr5XeIU1gN467jn2MiJYPJkqY12migvwZk8j467jhWYVHieT9uKUpcYDH1In1j8iEhWS9xUTcusxn1JYF1A1xJiknooVm"
          alt="Autumn setting in Hanoi with golden leaves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[80rem] mx-auto text-center mt-[-60px]">
        <h1
          className="text-white mb-2 drop-shadow-md text-5xl md:text-7xl font-bold"
          style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-0.02em", lineHeight: "3.5rem" }}
        >
          Khám phá mùa thu Hà Nội
        </h1>
        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto px-4">
          Trải nghiệm không gian sống sang trọng, mang đậm chất thơ của thủ đô.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-full p-2 mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-0 shadow-card border border-black/5"
        >
          {/* Location */}
          <div className="flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30 text-left">
            <label className="block text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wider" style={{ letterSpacing: "0.04em" }}>
              Địa điểm
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Bạn muốn đến đâu?"
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400 text-sm outline-none"
            />
          </div>

          {/* Check-in */}
          <div className="flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30 text-left">
            <label className="block text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wider" style={{ letterSpacing: "0.04em" }}>
              Nhận phòng
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400 text-sm outline-none [color-scheme:dark]"
            />
          </div>

          {/* Check-out */}
          <div className="flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30 text-left">
            <label className="block text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wider" style={{ letterSpacing: "0.04em" }}>
              Trả phòng
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400 text-sm outline-none [color-scheme:dark]"
            />
          </div>

          {/* Guests */}
          <div className="flex-1 w-full md:w-auto px-6 py-3 text-left">
            <label className="block text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wider" style={{ letterSpacing: "0.04em" }}>
              Khách
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-gray-900 font-semibold text-sm outline-none appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n} className="text-on-surface">
                  {n} khách{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-secondary text-gray-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors flex items-center justify-center m-1 gap-1"
          >
            <span className="material-symbols-outlined text-base">search</span>
            Tìm kiếm
          </button>
        </form>
      </div>
    </section>
  );
}

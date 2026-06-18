"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-20 px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-outline-variant"
          : "bg-surface border-b border-outline-variant shadow-sm"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-semibold text-[1.25rem] leading-[1.75rem] text-secondary hover:text-primary transition-colors"
        style={{ fontFamily: "var(--font-hanken-grotesk)" }}
      >
        AutumnHanoi
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/districts/ba-dinh"
          className="font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors"
          style={{ letterSpacing: "0.01em" }}
        >
          Ba Dinh Suites
        </Link>
        <Link
          href="/districts/hoan-kiem"
          className="font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors"
          style={{ letterSpacing: "0.01em" }}
        >
          Hoan Kiem Stays
        </Link>
        <Link
          href="/districts/west-lake"
          className="font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors"
          style={{ letterSpacing: "0.01em" }}
        >
          Tay Ho Lakeside
        </Link>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search toggle (mobile) */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors"
          aria-label="Search"
        >
          <span className="material-symbols-outlined text-xl text-on-surface-variant">search</span>
        </button>

        {/* Desktop search bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-2 bg-surface-container rounded-full px-4 py-2 border border-outline-variant"
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm địa điểm..."
            className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-44 placeholder:text-on-surface-variant outline-none"
          />
          <button
            type="submit"
            className="bg-secondary text-white rounded-full p-1.5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-sm">search</span>
          </button>
        </form>

        {/* Links */}
        <Link
          href="#"
          className="hidden md:block font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors px-2 py-1 rounded"
          style={{ letterSpacing: "0.01em" }}
        >
          Become a Host
        </Link>
        <Link
          href="#"
          className="hidden md:block font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors px-2 py-1 rounded"
          style={{ letterSpacing: "0.01em" }}
        >
          Help
        </Link>

        {/* Auth buttons */}
        <button className="hidden md:block font-semibold text-sm text-secondary hover:bg-surface-container px-3 py-2 rounded-lg transition-colors">
          Log In
        </button>
        <Link
          href="#"
          className="bg-secondary text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all"
          style={{ letterSpacing: "0.01em" }}
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant p-4 md:hidden animate-fade-in">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm địa điểm..."
              className="flex-1 bg-surface-container rounded-lg px-4 py-3 text-sm border border-outline-variant focus:border-secondary outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-white rounded-lg px-4 py-3 material-symbols-outlined"
            >
              search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

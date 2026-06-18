"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasThumbnails = images.length > 1;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="relative isolate grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-1 h-[360px] md:h-[614px] mb-12 rounded-xl overflow-hidden bg-surface-container-low">
        {/* Main large image */}
        <div
          className={`relative md:row-span-2 h-full cursor-pointer hover:opacity-95 transition-opacity overflow-hidden ${
            hasThumbnails ? "md:col-span-2" : "md:col-span-4"
          }`}
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={`${title} - Main`}
            fill
            className="object-cover indochine-inner-border"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Thumbnail images */}
        {images.slice(1, 5).map((src, i) => (
          <div
            key={i}
            className="hidden md:block h-full relative cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
            onClick={() => openLightbox(i + 1)}
          >
            <Image
              src={src}
              alt={`${title} - ${i + 2}`}
              fill
              className="object-cover indochine-inner-border"
              sizes="(max-width: 768px) 0vw, 25vw"
            />
          </div>
        ))}

        {/* Show all button overlay */}
        <button
          onClick={() => openLightbox(0)}
          className="hidden md:flex absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg border border-outline-variant shadow-sm items-center gap-2 text-sm font-semibold hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-base">grid_view</span>
          Hiển thị tất cả {images.length} ảnh
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={images[activeIndex]}
              alt={`${title} - ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto max-w-4xl px-4 no-scrollbar">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative w-20 h-14 rounded overflow-hidden shrink-0 border-2 transition-colors ${
                  i === activeIndex ? "border-white" : "border-transparent opacity-60"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}

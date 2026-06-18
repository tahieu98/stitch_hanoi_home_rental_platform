"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ImageSource } from "@/types";

interface ImageGalleryProps {
  images: ImageSource[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const hasThumbnails = images.length > 1;

  const openLightbox = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        showPreviousImage();
      } else if (event.key === "ArrowRight" && images.length > 1) {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, images.length, lightboxOpen, showNextImage, showPreviousImage]);

  return (
    <>
      <div className="relative isolate grid aspect-video grid-cols-1 grid-rows-1 gap-1 mb-12 overflow-hidden rounded-xl bg-surface-container-low md:grid-cols-4 md:grid-rows-2">
        {/* Main large image */}
        <button
          type="button"
          aria-label={`Mở thư viện ảnh ${title}`}
          className={`relative md:row-span-2 h-full cursor-pointer hover:opacity-95 transition-opacity overflow-hidden ${
            hasThumbnails ? "md:col-span-2" : "md:col-span-4"
          }`}
          onClick={(event) => openLightbox(0, event.currentTarget)}
        >
          <Image
            src={images[0]}
            alt={`${title} - Main`}
            fill
            className="object-cover indochine-inner-border"
            priority
            quality={90}
            sizes={hasThumbnails ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
          />
        </button>

        {/* Thumbnail images */}
        {images.slice(1, 5).map((src, i) => (
          <button
            type="button"
            aria-label={`Mở ảnh ${i + 2} của ${title}`}
            key={i}
            className="hidden md:block h-full relative cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
            onClick={(event) => openLightbox(i + 1, event.currentTarget)}
          >
            <Image
              src={src}
              alt={`${title} - ${i + 2}`}
              fill
              className="object-cover indochine-inner-border"
              quality={90}
              sizes="(max-width: 768px) 0vw, 25vw"
            />
          </button>
        ))}

        {/* Show all button overlay */}
        <button
          onClick={(event) => openLightbox(0, event.currentTarget)}
          className="hidden md:flex absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg border border-outline-variant shadow-sm items-center gap-2 text-sm font-semibold hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-base">grid_view</span>
          Hiển thị tất cả {images.length} ảnh
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Thư viện ảnh ${title}`}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Đóng thư viện ảnh"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div className="relative aspect-video w-[min(92vw,120vh)] max-w-6xl overflow-hidden rounded-lg bg-black">
            <Image
              src={images[activeIndex]}
              alt={`${title} - ${activeIndex + 1}`}
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 768px) 92vw, 72rem"
            />
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto max-w-4xl px-4 no-scrollbar">
            {images.map((src, i) => (
              <button
                type="button"
                aria-label={`Xem ảnh ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative aspect-video w-24 rounded overflow-hidden shrink-0 border-2 transition-colors ${
                  i === activeIndex ? "border-white" : "border-transparent opacity-60"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="96px" />
              </button>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Ảnh trước"
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Ảnh tiếp theo"
                onClick={showNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

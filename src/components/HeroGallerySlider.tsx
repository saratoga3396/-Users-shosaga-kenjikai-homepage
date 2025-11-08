"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
};

interface HeroGallerySliderProps {
  images: SliderImage[];
  intervalMs?: number;
  className?: string;
  showCaption?: boolean;
}

export function HeroGallerySlider({
  images,
  intervalMs = 5000,
  className,
  showCaption = true,
}: HeroGallerySliderProps) {
  const sanitizedImages = useMemo(() => images.filter((image) => image?.src), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sanitizedImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sanitizedImages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, sanitizedImages.length]);

  if (sanitizedImages.length === 0) {
    return null;
  }

  const goToIndex = (index: number) => {
    setCurrentIndex((index + sanitizedImages.length) % sanitizedImages.length);
  };

  const goToPrev = () => {
    goToIndex(currentIndex - 1);
  };

  const goToNext = () => {
    goToIndex(currentIndex + 1);
  };

  const baseClass = "relative overflow-hidden";
  const defaultSizing = "h-64 w-full rounded-2xl border border-white/30 shadow-xl";
  const containerClass = `${baseClass} ${className ?? defaultSizing}`;

  return (
    <div className={containerClass}>
      {sanitizedImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex h-full w-full items-center justify-center bg-black/5">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority={index === 0}
            />
          </div>
          {showCaption && null}
        </div>
      ))}

      {sanitizedImages.length > 1 && (
        <>
          <button
            type="button"
            aria-label="前の写真へ"
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-emerald-800 shadow hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="次の写真へ"
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-emerald-800 shadow hover:bg-white"
          >
            ›
          </button>

          <div className="absolute bottom-3 right-4 flex gap-2">
            {sanitizedImages.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`写真${index + 1}を見る`}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

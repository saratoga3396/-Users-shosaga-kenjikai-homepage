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
  const hasMultipleImages = sanitizedImages.length > 1;
  const extendedImages = useMemo(() => {
    if (!hasMultipleImages) {
      return sanitizedImages;
    }
    const first = sanitizedImages[0];
    const last = sanitizedImages[sanitizedImages.length - 1];
    return [last, ...sanitizedImages, first];
  }, [hasMultipleImages, sanitizedImages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(hasMultipleImages ? 1 : 0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    if (hasMultipleImages) {
      setActiveIndex(0);
      setPositionIndex(1);
    } else {
      setActiveIndex(0);
      setPositionIndex(0);
    }
    setTransitionEnabled(true);
  }, [hasMultipleImages, sanitizedImages]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    const timer = setInterval(() => {
      setPositionIndex((prev) => prev + 1);
      setActiveIndex((prev) => (prev + 1) % sanitizedImages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [hasMultipleImages, intervalMs, sanitizedImages.length]);

  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transitionEnabled]);

  if (sanitizedImages.length === 0) {
    return null;
  }

  const goToIndex = (index: number) => {
    if (!hasMultipleImages) return;
    setActiveIndex((index + sanitizedImages.length) % sanitizedImages.length);
    setPositionIndex(index + 1);
  };

  const goToPrev = () => {
    if (!hasMultipleImages) return;
    setPositionIndex((prev) => prev - 1);
    setActiveIndex((prev) => (prev - 1 + sanitizedImages.length) % sanitizedImages.length);
  };

  const goToNext = () => {
    if (!hasMultipleImages) return;
    setPositionIndex((prev) => prev + 1);
    setActiveIndex((prev) => (prev + 1) % sanitizedImages.length);
  };

  const handleTransitionEnd = () => {
    if (!hasMultipleImages) return;

    if (positionIndex === extendedImages.length - 1) {
      setTransitionEnabled(false);
      setPositionIndex(1);
    } else if (positionIndex === 0) {
      setTransitionEnabled(false);
      setPositionIndex(extendedImages.length - 2);
    }
  };

  const baseClass = "relative overflow-hidden";
  const defaultSizing = "h-64 w-full rounded-2xl border border-white/30 shadow-xl";
  const containerClass = `${baseClass} ${className ?? defaultSizing} [--slide-width:80%] md:[--slide-width:60%]`;
  const trackClasses = `flex h-full w-full ${transitionEnabled ? "transition-transform duration-700 ease-out" : ""}`;

  return (
    <div className={containerClass}>
      <div
        className={trackClasses}
        style={{
          transform: `translateX(calc(-${positionIndex} * var(--slide-width) + (100% - var(--slide-width)) / 2))`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-full flex-shrink-0 px-2"
            style={{ width: "var(--slide-width)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 80vw, 60vw"
                className="object-contain"
                priority={hasMultipleImages ? index === 1 : index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      {showCaption && null}

      {hasMultipleImages && (
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
                className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/40"}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

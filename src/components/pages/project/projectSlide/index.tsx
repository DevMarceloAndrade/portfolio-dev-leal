'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

export interface ProjectSlideProps {
  images: ProjectImage[];
}

const transition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1],
};

const ProjectSlide = ({ images }: ProjectSlideProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = images.length;
  const hasMultipleImages = total > 1;

  useEffect(() => {
    setIndex(0);
    setDirection(1);
  }, [total]);

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % total);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages, total]);

  if (!total) {
    return (
      <div className="cube-shell flex min-h-[260px] items-center justify-center border border-[#5c8edcb8] bg-[#06122c] text-sm text-[var(--muted)]">
        Sem imagens para este projeto.
      </div>
    );
  }

  const goToNext = () => {
    if (!hasMultipleImages) return;
    setDirection(1);
    setIndex((current) => (current + 1) % total);
  };

  const goToPrevious = () => {
    if (!hasMultipleImages) return;
    setDirection(-1);
    setIndex((current) => (current - 1 + total) % total);
  };

  return (
    <div className="cube-shell overflow-hidden border border-[#5c8edcb8] bg-[#06122c]">
      <div className="relative aspect-video w-full overflow-hidden bg-[#06122c] [perspective:1400px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`${images[index].src}-${index}`}
            initial={{
              opacity: 0,
              rotateY: direction > 0 ? -62 : 62,
              x: direction > 0 ? 56 : -56,
              scale: 0.93,
            }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              rotateY: direction > 0 ? 52 : -52,
              x: direction > 0 ? -44 : 44,
              scale: 0.95,
            }}
            transition={transition}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 border border-[#7fbfff] bg-[#062455bf] px-3 py-2 text-sm font-bold text-[#d7ebff] backdrop-blur-sm transition hover:bg-[#0b3778e6]"
              aria-label="Imagem anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 border border-[#7fbfff] bg-[#062455bf] px-3 py-2 text-sm font-bold text-[#d7ebff] backdrop-blur-sm transition hover:bg-[#0b3778e6]"
              aria-label="Próxima imagem"
            >
              →
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="flex items-center justify-between gap-3 border-t border-[#5c8edcb8] bg-[#081d46] px-3 py-2">
          <div className="text-xs font-semibold text-[#9fc9ff]">
            {index + 1} / {total}
          </div>

          <div className="flex items-center gap-2">
            {images.map((image, dotIndex) => (
              <button
                key={`${image.src}-${dotIndex}`}
                type="button"
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  setIndex(dotIndex);
                }}
                className={`h-2 w-6 border transition ${
                  dotIndex === index ? "border-[#8fd2ff] bg-[#19bfff]" : "border-[#4e83cc] bg-[#0a2457]"
                }`}
                aria-label={`Ir para imagem ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectSlide;

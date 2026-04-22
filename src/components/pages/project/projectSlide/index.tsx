'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { A11y, Autoplay, EffectCube, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ProjectImage } from "@/data/projects";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface ProjectSlideProps {
  images: ProjectImage[];
}

const ProjectSlide = ({ images }: ProjectSlideProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!images.length) {
    return (
      <div className="cube-shell flex min-h-[260px] items-center justify-center border border-[#5c8edcb8] bg-[#06122c] text-sm text-[var(--muted)]">
        Sem imagens para este projeto.
      </div>
    );
  }

  const hasMultipleImages = images.length > 1;
  const firstImage = images[0];

  if (!isMounted) {
    return (
      <div className="cube-shell overflow-hidden border border-[#5c8edcb8] bg-[#06122c]">
        <div className="relative aspect-video w-full">
          <Image
            src={firstImage.src}
            alt={firstImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <Swiper
      key={`project-swiper-${images.length}`}
      modules={[A11y, Navigation, Pagination, Keyboard, Autoplay, EffectCube]}
      effect="cube"
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 16,
        shadowScale: 0.82,
      }}
      navigation={hasMultipleImages}
      pagination={hasMultipleImages ? { clickable: true } : false}
      keyboard={hasMultipleImages}
      grabCursor={hasMultipleImages}
      rewind={hasMultipleImages}
      loop={false}
      autoplay={
        hasMultipleImages
          ? { delay: 3600, disableOnInteraction: false, pauseOnMouseEnter: true }
          : false
      }
      speed={760}
      observer
      observeParents
      onSwiper={(swiper) => {
        requestAnimationFrame(() => swiper.update());
      }}
      className="cube-shell w-full overflow-hidden border border-[#5c8edcb8] bg-[#06122c]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${image.src}-${index}`} className="bg-[#06122c]">
          <div className="relative aspect-video w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlide;

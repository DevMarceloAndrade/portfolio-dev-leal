'use client';

import Image from "next/image";
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
  return (
    <Swiper
      modules={[A11y, Navigation, Pagination, Keyboard, Autoplay, EffectCube]}
      effect="cube"
      cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.9 }}
      navigation
      pagination={{ clickable: true }}
      keyboard
      grabCursor
      loop={images.length > 1}
      autoplay={{ delay: 3600, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={900}
      className="cube-shell h-full w-full overflow-hidden"
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

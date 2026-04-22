'use client';

import Image from "next/image";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ProjectImage } from "@/data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface ProjectSlideProps {
  images: ProjectImage[];
}

const ProjectSlide = ({ images }: ProjectSlideProps) => {
  return (
    <Swiper
      modules={[A11y, Navigation, Pagination, Keyboard, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      keyboard
      loop={images.length > 1}
      autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      className="surface-panel h-full w-full overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${image.src}-${index}`} className="bg-[#f8ede2]">
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

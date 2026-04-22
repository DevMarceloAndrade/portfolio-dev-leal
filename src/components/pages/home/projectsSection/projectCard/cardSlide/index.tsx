'use client';

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ProjectImage } from "@/data/projects";

import "swiper/css";

type CardSlideProps = {
  images: ProjectImage[];
};

const CardSlide = ({ images }: CardSlideProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={images.length > 1}
      className="h-full w-full"
    >
      {images.slice(0, 4).map((image, index) => (
        <SwiperSlide key={`${image.src}-${index}`}>
          <div className="relative aspect-[4/3] w-full">
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlide;

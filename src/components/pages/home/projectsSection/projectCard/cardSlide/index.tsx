'use client';

import Image from "next/image";
import { Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ProjectImage } from "@/data/projects";

import "swiper/css";
import "swiper/css/effect-cube";

type CardSlideProps = {
  images: ProjectImage[];
};

const CardSlide = ({ images }: CardSlideProps) => {
  return (
    <Swiper
      modules={[Autoplay, EffectCube]}
      effect="cube"
      cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 16, shadowScale: 0.9 }}
      autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={850}
      loop={images.length > 1}
      className="cube-shell h-full w-full"
    >
      {images.slice(0, 4).map((image, index) => (
        <SwiperSlide key={`${image.src}-${index}`} className="bg-[#071533]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlide;

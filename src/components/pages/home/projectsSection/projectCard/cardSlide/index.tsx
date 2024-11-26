'use client'
import { EffectCube, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { ImageSlideProps } from '@/components/pages/project/projectSlide';


export interface CardSlideProps {
    images: ImageSlideProps[]
}
const CardSlide = ({images}: CardSlideProps) => {

    return (
        <>
            <Swiper
                effect={'cube'}
                rewind={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    
                }}
                zoom={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                
                modules={[EffectCube, Autoplay]}
                className="w-full h-full"
            >
                {
                    images.map((image, index) => {
                        if(index > 3) return
                        return (
                            <SwiperSlide key={index} className='w-full h-full'>
                                    <Image className='w-full h-full block' src={image.src} alt={image.alt} width={1900} height={1080}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default CardSlide